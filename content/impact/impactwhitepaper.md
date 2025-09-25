---
weight: 4
bookFlatSection: true
title: "SIGSOFT Impact Project Whitepaper"
---


### The Impact Project: Determining the Impact of Software Engineering Research upon Practice

##### Leon J. Osterweil, Carlo Ghezzi, Jeff Kramer, and Alexander L. Wolf

#### Abstract

Has software engineering research had an impact on software engineering practice? If so, in which areas, and in what way? These are questions that are raised by practitioners in industry, members of funding organizations and researchers themselves.

The goal of the Impact Project is to provide a scholarly study of the impact that software engineering research – both academic and industrial – has had upon practice. The reasons for doing this include: identifying the sorts of contributions that have had substantial impact, determining the research modalities that have been relatively more successful, and anticipating the directions that software engineering research might most effectively pursue, based upon its history and positioning.

This paper discusses the [motivations](#introduction-to-the-project), [goals](#goals-and-objectives) and the adopted [work methodology](#research-method-and-project-organization). It [summarizes the basic findings](#project-reports) in selected areas where research has already led to consolidated results. The plan for future work is also discussed.

This research is an initiative of ACM SIGSOFT, and receives funding from several international institutions. It is the collective effort of the software engineering community. It has been a highly inclusive effort, drawing contributions from as many members of the community as possible. The intention is that it will continue to draw in more members of the community as new fields are scrutinized in the future.

#### Background

It is incontrovertible that a great deal of software engineering research has been carried out over the past decades. There have been to date 25 International Conferences on Software Engineering (the last attracted nearly 350 submissions). The Foundations of Software Engineering conference has also been held annually since 1993. Other conferences devoted to software engineering are organized in Asia, on the Pacific Rim, in South America and other areas of the world. There are also innumerable smaller conferences and workshops, often focusing on specific subareas of software engineering. In addition, journal publications serve as fundamental vehicles of research results. Two archival journals of software engineering research exist: the _ACM Transactions on Software Engineering and Methodology_ and the _IEEE Transactions on Software Engineering_, the older of which has been in publication for 27 years. In addition there are numerous other journals and magazines.

Equally incontrovertible is the enormous change in software engineering practice that has occurred over the past decades. Actual practice has evolved from one centered on batch runs of punched card programs of perhaps several thousand lines of code in languages such as Fortran and Cobol, to one centered on rapid composition of multimillion line concurrent, distributed, real-time systems composed of ever larger, and better validated components, written in multiple sophisticated modern languages. A profitable software industry has emerged as a key driver of both social and economic growth in our society.

However, there does seem to be an ongoing controversy over the question of how substantially software engineering research has affected this impressive progress in software development.

*   Configuration management is a multi-billion dollar vendor industry. What ideas did researchers contribute to the development of techniques and tools in this market?  
    Programming languages are, in a sense, the primary tool of software development. How has the evolution of language features been influenced by software engineering research?
*   Reviews and walkthroughs in their various forms have been adopted as basic practices by major software development organizations. Did software engineering researchers contribute to either the development or adoption of these practices?
*   Similarly, basic testing methods, such as the collection of coverage metrics, are regularly employed by developers, are integral to modern development processes, and have appeared in software engineering texts for years. Are the methods used in practice derived from research in testing?
*   Modern internet-based applications, such as enterprise systems and web services, are now generated rapidly from components and middleware support services. To what extent is this capability attributable to research findings and prototype systems?
*   There has been a long tradition of research into design methods, models, and notations, ranging from formal foundations to practical tools. What of this work has found its way into the design practices and aids used by practitioners?

Just what is the extent and nature of the impact that software engineering research has had upon software engineering practice? Indeed, it is not unreasonable to contemplate the extent to which software engineering research has had impact beyond the software development community, affecting practice in such increasingly broad areas as engineering, electronic commerce and digital government.

This controversy rages in both the research and practitioner community, and puzzles both government agencies (many of which must make research funding decisions) and the public at large. While there is some evidence of substantial impact, the prevailing perception seems to be quite the opposite. In any case, however, the absence of solidly researched, hard evidence about such impact currently tends to place this controversy in the realm of conjecture and prejudice.

It seems timely and important to temper debates about impact with solidly researched findings. Such findings can then be used to help both the research and practitioner communities to understand each other better. The findings should also clarify the essential foci and directions of both communities, hopefully leading to clearer understandings of how they can help each other more effectively. Such understandings should be of considerable interest and value to those parties, both public and private, who must evaluate the return of past and future investments in software engineering research.

The aim of this research project is therefore to replace much of the heat apparent in current discussions with substantiated evidence of the sort that is best shed by solid scholarly research appropriate to a scientific community.

#### Introduction to the Project

Software engineers and professionals tend to pay too little attention to the broader context of their work. Many researchers seem to be unaware of the historical evolution that has led to the current status of the field in which they do their research. Similarly, many practitioners seem to be ignorant of the origins of the current state of practice. This has some unfortunate consequences. This may, for example, lead to "reinventing the wheel", where results that were published before in the open literature are rediscovered and presented as new. More importantly, it can lead to the situation where failures that were reported before are repeated. By not building incrementally on previously known results, knowledge accumulation and dissemination is made more difficult.

Historical knowledge seems to us to be particularly essential to sufficient awareness of scientific context. By historical knowledge, we mean not only an understanding of when certain results were obtained, but also why they were obtained, which were their antecedents, how they affected subsequent results and, most important, how they affected the world of practice. The motivation of the Impact project is precisely the gathering of this historical knowledge needed for the creation of the context needed for both researchers and practitioners. Specifically, its goal is to study the impact of software engineering research on the practice of software engineering, by looking backwards to what scientists have done since 1968 (when the term "software engineering" was initially coined and a research agenda initially drawn \[Naur and Randell, 1968\]), and in some cases, even earlier.

The next section elaborates the goals and objectives set for our work. The following section discusses the methodology followed in the research. Following that is a section that deals with the project organization and its evaluation. We then discuss the project reports to be delivered. Preliminary results from the impact analysis in some important areas, namely programming languages, configuration management and inspections, are summarized in the sidebars. These sidebars are a short preview of papers in preparation by leading researchers who are leading the investigations of their respective areas. Finally we present a brief indication of our plans for the future.

#### Goals and Objectives

Although our objectives are ambitious, we believe that they are achievable with the help of the community. The general goal of evaluating the impact of software engineering research upon the practice of software engineering can be decomposed into more precise and specific objectives, which are used as the drivers of our project activities. In particular:

*   The project seeks to assess in a solid, scholarly way the impact that software engineering research has had on software engineering practice. The assessment takes the form of a series of different studies and briefings, each of which involves literature searches and personal interviews where necessary. The solidity of these assessments should be sufficient to measure up to the highest standards of good scholarship. Each assessment receives careful reviewing and, eventually, wide distribution.
*   The project seeks to educate the software engineering research community, the software practitioner community, other scientific communities, and both private and public funding sources about the return on investment from past software engineering research. Using the assessment described above, the project engages in publication, lecturing, and briefing activities designed to maximize the dissemination of its findings. It is expected that some of the findings will spark debate; this is seen as one of the desirable outcomes of the project. As impact can be achieved in a variety of ways, and measured differently from differing perspectives, debates resulting from dissemination of project findings can be expected to lead to a sharpening and convergence of opinions about how to measure and assess impact. It is hoped that this will ultimately lead to increased satisfaction with technology transition activities.
*   The project seeks to clarify both the scientific issues and the engineering activities that are the complementary foci of software engineering research, both to focus the activities of the software engineering research community, and to improve perceptions of the nature of the discipline. Much of the work of the software engineering research community addresses the engineering of prototype systems, most of which are intended to have eventual impact on practice. Experience, both in software engineering and in diverse other disciplinary areas, has indicated that this impact may take as long as 20 years to become manifest \[Redwine and Riddle, 1985\]. This project's work on tracing the history of the impact of software engineering research on practice should confirm or refute this and provide specific examples, which will hopefully lead to better understanding of the sometimes elusive ways in which impact has occurred.
*   The project seeks to shed light on the nature of software engineering research, both how its scientific hypotheses are formulated and tested (i.e., validated or refuted), as well as how the ideas underlying the hypotheses are transformed for practical use. We expect to demonstrate how the development of engineering prototypes can be done in the context of attempts to establish deeper scientific hypotheses. Inevitably some software engineering research places more emphasis upon science, and some more emphasis on engineering prototypes. We expect that our project should help those who view and evaluate software engineering research to understand the dual nature of the discipline and to become more effective in applying appropriate evaluations to software engineering research.
*   The project seeks to use the above assessments and clarifications to project key future opportunities and directions for software engineering research and practice. We expect that the historical perspectives of our work will provide the basis for a clear, objective assessment of the current state of the art and practice in software engineering. This, in turn, should provide a particularly solid basis for making projections into the future. In particular, we expect that the clearer view of the history of software engineering research should make for a clearer view of the key challenges and opportunities to be faced in the immediate, near, intermediate, and long-range future. Historical analysis should also help to identify the research modalities that were relatively more successful than others. Likewise, this view should help to indicate how these research directions might be more effectively transitioned into industrial practice.

We believe that the Impact project should therefore have several beneficial effects, namely:

*   to help software engineers to understand better their field of activity, explaining the origins of the current state of practice;
*   to recognize the contributing ideas, techniques and technologies to various tools and methods;
*   to improve our teaching, by clarifying the continuous research and development threads which have lead to the current state of the art; and
*   to provide guidance to investment entities by developing understandings and appreciations of research and its impacts upon practice, and suggesting appropriate measures of research success.
*   If successful, an additional result of our project will be to encourage others to embark upon similar exercises for other areas of computing. The lack of historical perspectives is in fact a common problem that we share with most areas of current advanced technology. It is especially important to recognize if and how progress has been affected by research, both within academia and within industry, for technological areas where evolution is extremely fast and generates continuous market transformations.

#### Research Method and Project Organization

By its very nature, the Impact project is intended to be highly inclusive, involving the efforts of members of the software engineering community as well as others whose interests and expertise overlap with software engineering. Moreover, it is a specific objective of the project to include not only academic researchers, but also industrial researchers and a broad spectrum of practitioners in the project research work, as well as in reviewing and directing the research. To represent the fact that the project should belong to the software engineering community, the project is undertaken under the auspices of ACM SIGSOFT, which represents the community at large. Funding for the project has been secured from the US National Science Foundation, the Institution of Electrical Engineers (UK), the IEEE Computer Society, and the Japanese government.

The scope of the project is intended to encompass all of the key areas of software engineering research. For each area, the project is expected to produce one or more main reports and a number of ancillary artifacts, as discussed in the next section. Each report is to be authored by a team consisting of as many as 8-10 experts, lead by one or two lead authors who are responsible for the direction, integrity, and completeness of the work. Each lead author is also a member of the project Steering Committee, which serves as an Editorial Board for the reports issued by the project. As an editorial board, the group sets directions, policy, and structure for the various reports and briefings. The board is also expected to secure reviews of the reports, and to mediate discussions and conversations between the authors and the reviewers. The Steering Committee is headed by an Executive Committee that has oversight responsibility for the entire project, and serves as Editors-in-Chief of the Editorial Board. Currently the Executive Committee has four members:

> Leon Osterweil, Chair  
> Jeff Kramer  
> Carlo Ghezzi  
> Alexander Wolf

The project will also rely upon the services of a Board of Distinguished Reviewers. It is expected that this Board will be a prime source of the reviews obtained by the Steering Group. However, reviews of the reports will also be sought from individuals outside the Board of Distinguished Reviewers.

As noted above, the expert authors of the reports are expected to be drawn not only from the academic research community, but also from the industrial research and practitioner communities as well. Thus, an important collateral effect of this project should be to increase the awareness and shared understanding, by all three communities, of the true nature of software engineering research contributions to practice.

The goal of inclusiveness is reflected not only by the project organizational structure, but also by the work method. The project has been attempting to open the discussion of its goals and achievements in all the major meetings attended by the software engineering community, by soliciting contributions through panels and ad hoc project presentations, and disseminating early versions of the reports in newsletters and other rapid publication venues.

A further important aspect of this research is its contribution to the history of science and technology in the specific area of software engineering. From the outset of the project it has been clear that the success of the project was dependent upon adoption of sound approaches to historical research, as this will ultimately affect the validity of the project findings. For this reason, close cooperation with a historian was sought. Professor Michael Mahoney, of Princeton University, a leading expert on the history of technology, has been working within the project since its inception.

#### Project Reports

The overall aim is to produce individual reports covering the impact upon practice for each of the main areas of software engineering. Each of these papers will be published in the _ACM Transactions on Software Engineering_ (TOSEM). Different summaries and abstracts of these papers will also be produced in order to reach diverse audiences through various existing publication venues. Briefing materials will be developed based upon the findings documented in the reports. The project's web site, [http://www.sigsoft.org/impact.html](http://www.sigsoft.org/impact.html), is the main dissemination medium for these artifacts.

In order to ease the management challenge of studying all major areas of software engineering, the project is structured in waves, concentrating on a small number of area studies at a time. An initial wave consisting of three area studies was initiated first, and is to be followed by subsequent waves, guided by experience with the first three studies.

The three studies in the first wave address [Configuration Management](#software-configuration-management) (lead by Jacky Estublier and David Leblang), [Modern Programming Languages](#modern-programming-languages) (lead by Mary Lou Soffa and Barbara Ryder), and [Reviews and Walkthroughs](#inspections-reviews-and-walkthroughs) (lead by Dieter Rombach). Brief descriptions of each are presented as breakout boxes.

Subsequent reports will address Testing and Analysis (lead by Lori Clarke and David Rosenblum); Design Notations and Tools (lead by Anthony Wasserman); Reverse Engineering, Reengineering, and Reuse (lead by Hausi Müller); and Middleware and Component-Based Development (Wolfgang Emmerich). Additional reports are being contemplated in the areas of Programming Environments; Cost and Economic Models; Process, Workflow, and Enterprise Frameworks; and Computer Science Education.

#### Conclusions

Through the project, we therefore hope to reduce the controversy and introduce some clarity into the ongoing discussion on the impact of software engineering research. After 35 years of research, it seems timely to assess the benefits and efficacy of this research work.

We believe that if this project is successful it will have important positive benefits for the software engineering community, as well as the companies that rely upon software technology, the agencies that are charged with assuring the health of software research and practice, and the public at large. That being the case, it seems important to address the question of how the success of this project might be determined.

This is a difficult issue and could be simply (but trivially) measured by the number of reports and the quality of the venues in which they are published. However, these are relatively facile measures. An important but difficult evaluation of the project will be based upon the clarity, efficiency, and professionalism of future discussions of the effectiveness of software engineering research. It is hoped that this project will expedite the community's arrival at consensus about how well this research has served practice, and how ongoing and proposed research can be ever more effective.

#### Acknowledgments

The work of this project is largely unfunded, relying upon pro bono contributions of time and effort by the authors (especially the lead authors) of the various study areas. That being said, funding is still required to cover such costs as communications, travel to meetings, and publication expenses. The project wishes to gratefully acknowledge the financial support for these meetings that has been obtained from the US National Science Foundation, ACM SIGSOFT, the IEEE Technical Committee on Software Engineering, the Institution of Electrical Engineers (IEE) in the UK and the government of Japan.

Additional support for field trips to interview historically important individuals, and to examine primary source materials in the form of corporation documents and records, is also necessary. The support of these individuals and corporations in granting access to this primary source material is also gratefully acknowledged.

#### References

P. Naur and B. Randell, (Eds.). Software Engineering: Report of a conference sponsored by the NATO Science Committee, Garmisch, Germany, 7-11 Oct. 1968, Brussels, Scientific Affairs Division, NATO (1969) 231pp.

S. Redwine and W. Riddle, Software Technology Maturation, Proceedings of the 8th International Conference on Software Engineering, London, England, 1985, pp. 189-200.




#### Modern Programming Languages

##### Barbara Ryder and Mary Lou Soffa

To determine and document the influence of software engineering research on programming language design requires exploring how modern day language features have assimilated software engineering ideas. However, the symbiotic relationship between these two fields has made the attribution of some influences difficult. Initially, there was no distinction between the software engineering and programming language research communities; they were a single amorphous field until the late 1970s. As the fields began to evolve into distinct communities, researchers published in journals and conferences from both fields and thus, the classification of research results as either software engineering or programming languages is difficult.

Finding primary sources to document the influence of software engineering research presents an additional challenge. Not only are research publications needed to determine this impact, but also needed are oral histories from programming languages designers. The final challenge is the determination of an effective research methodology for this study.

Unlike a history of science perspective, our methodology is to examine results of research as evidenced in published works and their temporal sequence in order to infer influence from these results. In addition, we expect to incorporate facts from oral histories. To provide focus, we examined modern programming languages and identified a set of core features, using them to demonstrate the influence of software engineering research.

As an example of our findings, consider the history of exception handling. PL/I, a programming language developed in the mid-1960s, used a statement, called an On condition, whose execution defined an exception handler at run time, making compile-time checking of the completeness of exception handling impossible to accomplish. In the mid-1970s, after reviewing some existing exception mechanisms and reliability concerns, Goodenough discussed requirements for good exception handling, which should help prevent and detect programmer errors \[Goodenough, 1975a; Goodenough, 1975b\]. He argued for the effectiveness of lexical association of handlers with operations that may throw an exception. He also advocated compile-time checking of the completeness of exception handling. Subsequent programming languages including the research language CLU \[Liskov and Snyder, 1979\], Ada \[Ichbiah et al., 1979\], C++ \[Koenig and Stroustrup, 1993\] and Java \[Gosling et al., 1996\] all adopted his recommendation of lexically binding the handler to the statement whose execution directly or indirectly caused the exception. This is just one example of how software engineering researchers, concerned about the issue of software reliability, directly contributed to programming language design.

##### References

J. B. Goodenough, "Structured Exception Handling", Proceedings of ACM SIGPLAN/SIGACT Symposium on Principles of Programming Languages, January 1975, pages 204-224.

J. B. Goodenough, "Exception Handling: Issues and a Proposed Notation", Communications of the ACM, Vol. 18, No. 12, December 1975, pages 683-696.

B. Liskov and A. Snyder, "Exception Handling in CLU", IEEE Transactions on Software Engineering, SE-5, No.6, November, 1979, pages 546-558.

J.D. Ichbiah, J.C. Heliard, O. Roubine, J.G.P. Barnes, B. Kreig-Brueckner and B. A. Wichmann, "Rationale for the Design of the ADA Programming Language", ACM SIGPLAN Notices, vol. 14, no 6, June 1979

A. Koenig and B. Stroustrup,"Exception Handling for C+", in The Evolution of C++: Language Design in the Marketplace of Ideas, Jim Waldo, editor, MIT Press, a USENIX Association book, 1993.

J. Gosling, B. Joy, and G. L. Steele, Jr., The Java Language Specification, Addison-Wesley, Reading, MA, 1996




#### Software Configuration Management

##### Jacky Estublier

The impact of the discipline of software configuration management (SCM) on the software industry at large is easy to discern: A successful, billion dollar marketplace of SCM tools and services has arisen and SCM tools have become so pervasive that virtually all major projects use and rely on them. SCM concepts and techniques also have had major influences in other fields like Interactive Development Environments, Web protocols, and now product line architectures.

To distil the role and impact of SCM research on practice, a team was assembled consisting of the primary architects from two major SCM system vendors, two academic researchers, and three contributors with both industrial and academic experience in the field. With such a balanced and knowledgeable team, whose members knew each other fairly well, it should have been easy to identify the impact of research on vendor tools. It was not. Early in our discussions, researchers claimed ownership of almost all ideas, dismissing tool realization as "engineering common sense". By the same token, vendors claimed they invented everything they needed, dismissing research concepts, ideas, and architectures also as "engineering common sense". From the intensive discussion that followed emerged a much more balanced perspective.

We learned that accurately pinpointing the origins of most ideas is difficult. Therefore, our report relies on publications and actual systems to trace research contributions and their uses in SCM systems. In doing so, it became clear that both academic and industrial research have made significant research contributions, and that many original ideas take a long time and require deep reworking and reengineering before they can be successful in industry.

After discussing the details of the research contributions (and failures) at length, our report concludes by making the observation that the international academic community serves an important role by providing a forum in which ideas can be published, discussed, and scrutinized. Continual attendance at the SCM workshop series by chief architects of some of the most influential SCM systems, as well as the flow of researchers between industry and academics, have been the major means by which research impact occurred in our field, and to a large extend explains the success story of software configuration management.




#### Inspections, Reviews and Walkthroughs

##### Dieter Rombach and Marcus Ciolkowski

Inspections, reviews or walkthroughs are integral parts of most industrial software development life-cycle models and standards today. However, reported effects upon quality improvement or cost reduction vary widely. Companies reporting repeatable success tend to employ well-defined techniques for the analysis of code and other documents (often referred to as reading techniques) and embed inspections, reviews or walkthroughs into a measurement-based feedback system to facilitate motivation and optimization. Successful companies such as Allianz, NASA's Software Engineering Laboratory, Motorola or IBM report up to 95% defect detection rates before testing, overall cost reduction for newly developed lines of code by 50%, and even shortening of delivery times by up to 50%.

These effects have been enabled by various software engineering research results. They include advances in: (1) process research resulting in entry/exit criteria based processes such as Fagan Inspections \[Fagan, 1976\] or reading techniques such as perspective-based reading for informal documents \[Basili et al., 1996\]; (2) formal methods research resulting in closed-form mathematics based semantics suitable for stepwise inspections such as the Functional Semantics Approach \[Mills, 1988\]; (3) in-project measurement such as the Goal-Question-Metric paradigm \[Basili et al., 1994; van Solingen and Berghout, 1999\], allowing for the TQM-style optimization of reading techniques and inspection effectiveness \[McGarry, 2002\]; and (4) empirical methods research in software engineering, enabling the careful study of cause-effects of applications of inspections, reviews and walkthroughs \[Rombach et al., 1993\], starting with early studies showing the variance of effects \[Basili and Selby, 1987\] as well as the effects of specific techniques in a concrete context \[Selby et al., 1987\].

The success of human-based software processes such as inspections depends on a combination of software engineering results in methods and empiricism. Without the development of closed-form mathematics based notations and algorithmic reading techniques on the one hand, the establishment of an infrastructure for software engineering measurement and empirical studies in order to fine-tune and optimize the effects towards a specific environment on the other hand, success would still be varying and unsustainable. Companies aiming at sustainable effective use of inspections, reviews, or walkthroughs should mimic the transfer guidelines of successful companies.

##### References:

V.R. Basili and R.W. Selby, "Comparing the effectiveness of software testing techniques", IEEE Transactions on Software Engineering, 13 (12): 1278-1296, 1987.

V. R. Basili, G. Caldiera, and H. D. Rombach, "Goal Question Metric Paradigm", in: J. Marciniac, Encyclopedia of Software Enginering, John Wiley & Sons, 1994.

V. R. Basili, S. Green, O. Laitenberger, F. Lanubile, F. Shull, S. Sorumgard, and M. Zelkowitz, "The Empirical Investigation of Perspective-Based Reading", Journal of Empirical Software Engineering, 2(1):133-164, 1996.

M. E. Fagan. Design and Code Inspections to Reduce Errors in Program Development. IBM Systems Journal, 15(3):182-211, 1976.

F. McGarry, "What is a Level 5?", Proceedings 26th Annual NASA Goddard Software Engineering Workshop, pp. 83-90, 2002.

H. D. Mills, "Stepwise Refinement and Verification in Box-Structured Systems", IEEE Computer, June 1988.

R. van Solingen and E. Berghout, "Goal/question/metric Method: A Practical Guide for Quality Improvement of Software Development", McGraw-Hill, 1999.

H. D. Rombach, V. R. Basili, R. W. Selby, ed., Experimental Software Engineering Issues: A critical assessment and future directions, Springer-Verlag, 1993.

R. W. Selby, V. R. Basili, and F. Baker, "Cleanroom software development approach: an empirical evaluation", IEEE Transactions on Software Engineering 13(9), September 1987.
