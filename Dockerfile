FROM ubuntu:24.04

ARG HUGO_VERSION=0.148.2
ARG TARGETARCH

RUN apt-get update \
    && apt-get install -y --no-install-recommends ca-certificates tar wget \
    && rm -rf /var/lib/apt/lists/*

RUN case "${TARGETARCH}" in \
      amd64) HUGO_ARCH="amd64" ;; \
      arm64) HUGO_ARCH="arm64" ;; \
      *) echo "Unsupported TARGETARCH: ${TARGETARCH}" >&2; exit 1 ;; \
    esac \
    && HUGO_TARBALL="hugo_extended_${HUGO_VERSION}_linux-${HUGO_ARCH}.tar.gz" \
    && wget -q -O "/tmp/${HUGO_TARBALL}" "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/${HUGO_TARBALL}" \
    && wget -q -O /tmp/hugo_checksums.txt "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_checksums.txt" \
    && grep " ${HUGO_TARBALL}\$" /tmp/hugo_checksums.txt > /tmp/hugo_checksums_entry.txt \
    && sha256sum -c /tmp/hugo_checksums_entry.txt \
    && tar -xzf "/tmp/${HUGO_TARBALL}" -C /usr/local/bin hugo \
    && rm -f "/tmp/${HUGO_TARBALL}" /tmp/hugo_checksums.txt /tmp/hugo_checksums_entry.txt

WORKDIR /src

EXPOSE 1313

CMD ["hugo", "server", "--bind", "0.0.0.0", "--baseURL", "http://127.0.0.1:1313", "--buildDrafts", "--disableFastRender"]
