+++
title = "Research Highlights"
+++

Research Highlights
===================

Starting in 2020, SIGSOFT is selecting papers from its sponsored conferences that show recent, significant, and exciting results that are also of general interest to the computer science research community. These papers, called **SIGSOFT Research Highlights**, are also recommended for consideration for the [Research Highlights section](https://cacm.acm.org/section/research-highlights/) of the [Communications of the ACM](https://cacm.acm.org).

Nomination Process
------------------

The committee considers nominated papers from two sources:

*   **Conference Organizers:** The chair of the SIGSOFT Research Highlights Committee will solicit nominations from the program chairs of SIGSOFT-sponsored conferences.
*   **Community:** Any SIGSOFT member may nominate a paper appearing in a SIGSOFT conference, provided they do not have a [conflict of interest](https://www.acm.org/publications/policies/conflict-of-interest).

[//]: # (To nominate a paper, please fill in [the nomination form]&#40;https://forms.office.com/Pages/ResponsePage.aspx?id=cZYxzedSaEqvqfz4-J8J6rl3q4pHT1JHiS3Dx-uvXptURFo3WDRGTFUxNFFHREVSUEE2NTcwWUdDRy4u&#41;.)

_By submitting a nomination statement, nominators authorize the SIGSOFT Research Highlights Committee to reuse all or a portion of the statement for the purpose of nominating the paper further as a CACM Research Highlight, if applicable._

SIGSOFT Research Highlights Committee
-------------------------------------

*   [Martin Robillard](https://www.cs.mcgill.ca/~martin/), McGill University (Chair)
*   [Nicole Novielli](http://collab.di.uniba.it/nicole/), University of Bari
*   [Michael Pradel](https://software-lab.org/people/Michael_Pradel.html), University of Stuttgart
*   [Saurabh Sinha](https://researcher.watson.ibm.com/researcher/view.php?person=us-sinhas), IBM Research
*   [Sebastian Uchitel](https://lafhis.dc.uba.ar/~suchitel), University of Buenos Aires
*   [Dongmei Zhang](https://www.microsoft.com/en-us/research/people/dongmeiz/), Microsoft Research

SIGSOFT Research Highlights Papers
----------------------------------

[QDiff: Differential Testing of Quantum Software Stacks](https://ieeexplore.ieee.org/document/9678792)

J. Wang, Q. Zhang, G.H. Xu, M. Kim

**Venue:** ASE 2021

**Nomination Statement:** This paper presents a three-stage approach for testing quantum compilers and simulators that are part of the software stack for quantum computers. The authors note three main challenges for testing quantum software stacks including (i) generating semantically equivalent programs for testing compilers, (ii) exposing and examining bugs in quantum simulators and hardware, and (iii) interpreting measurements from the results of running quantum programs given their probabilistic nature. To address these three issues the authors develop QDiff which introduces three main features that align with the challenges listed above, namely: (i) it is capable of generating logically equivalent quantum programs using a set of equivalent gate transformation rules, (ii) a process for selecting subsets of said programs to run on hardware, and (iii) it can determine the how many measurements are needed for a reliable comparison between equivalent programs to detect potential issues. Quantum computing continues to grow in popularity, particularly as quantum supremacy for certain classes of algorithms has now been illustrated. Testing the software stack for these programs will likely be an important topic of research moving forward, therefore, I believe that this line is both important, and given the focus on automation, is appropriate for ACM research highlights: Important topic; Equivalent gate Transformation and mutation are interesting applications of testing techniques in the quantum domain; Well-motivated problem; Promising preliminary results

[Boosting fuzzer efficiency: an information theoretic perspective](https://dl.acm.org/doi/10.1145/3368089.3409748)

M. Böhme, V.J.M. Manès, S.K. Cha

**Venue:** ESEC/FSE 2020

**Nomination Statement:** Fuzzing is one of the most successful software testing approaches for finding security vulnerabilities and is widely used in practice. Since many security faults are the result of malicious inputs, fuzzing probes an application with a large number of malformed inputs over a long period, continuously exercising the system in unintended ways. An important research direction for fuzzing is to find more efficient and effective ways to select inputs so that faults can be found quickly and that the inputs exercise (or cover) a large part of the software�s codebase. This paper reaches outside of software engineering for a solution, and leverages a novel use of information theory to improve a fuzzer�s efficiency. It uses Shannon�s entropy as a metric of the quality of input seeds, and drives the fuzzing towards those inputs by maximizing this metric. This idea was implemented in an existing fuzzer and as a result the extension is now turned on by default. While this paper makes contributions to fuzzing, it also advances the use of information theory for testing. The authors have made all of their artifacts available for the general research community and were awarded the reusable and functional artifacts badges from ACM.

[A Tale from the Trenches: Cognitive Biases and Software Development](https://dl.acm.org/doi/10.1145/3377811.3380330)

S. Chattopadhyay, N. Nelson, A. Au, N. Morales, C. Sanchez, R. Pandita, and A. Sarma

**Venue:** ICSE 2020

**Nomination Statement:** Cognitive biases impact decision-making in many spheres of human activity, including software development. If left unchecked, cognitive biases can lead to negative outcomes which, in the case of software development, include inferior solutions and the need to reverse design decisions later in the development process. This paper presents the first field study of the effects of cognitive biases in software development. In contrast to prior work which was conducted in controlled environments, this study analyzed data primarily collected from software developers' daily work. The study offers a rich perspective on how cognitive biases manifest themselves in practice with insights for many stakeholders, including developers, their managers, and the builders of software development tools. These insights for improving software development tools and practices also have the potential to apply more broadly to the use of software technology in general.

[Here We Go Again: Why Is It Difficult for Developers to Learn Another Programming Language?](https://doi.org/10.1145/3377811.3380352)

N. Shrestha, C. Botta, T. Barik, C. Parnin

**Venue:** ICSE 2020

**Nomination Statement:** It is not uncommon for programmers to have to learn a new programming language, yet relatively few resources exist to facilitate this transition. This study carefully documents why it is difficult for proficient programmers to learn a different language. The study effectively leverages two complementary sources of data: Stack Overflow posts and interviews with programmers. Through this synergy, it provides a rich illustration of how knowledge of one language can interfere with learning. The study also provides insights on the source of confusion caused by old habits and attempts at mapping between languages. The paper provides an important reminder that software technologies do not exist in isolation.

[How does misconfiguration of analytic services compromise mobile privacy?](https://doi.org/10.1145/3377811.3380401)

X. Zhang, X. Wang, R. Slavin, T. Breaux, J. Niu

**Venue:** ICSE 2020

**Nomination Statement:** Popular mobile applications (apps) typically rely on a third-party analytic service to collect usage profiles data for their users. Analytics services present a privacy risk because their interface enables app developers to channel personally-identifiable information (PII) to the services. This paper reports on a deep technical investigation of how analytic services are used by popular apps with respect to privacy protection. Its findings are both clear and unsettling: over 12% of apps studied provide PII to their analytics services, in many cases in direct violation of the app's own privacy policy. These results have implications for practically all stakeholders of the mobile software ecosystem including, notably, most app users.

[White-box fairness testing through adversarial sampling](https://doi.org/10.1145/3377811.3380331)

P. Zhang, J. Wang, J. Sun, G. Dong, X. Wang, X. Wang, J.S. Dong, and T. Dai

**Venue:** ICSE 2020

**Nomination Statement:** Deep neural networks (DNNs) have demonstrated their effectiveness in multiple important application contexts, from face recognition, to medical diagnosis, fraud detection, and others. Especially when DNNs work with human-related characteristics, it is of paramount importance to ensure that they show fair behavior. However, because of societal bias often occurring in the training data, the resulting DNNs may introduce discrimination unintentionally. To address this problem, the paper proposes a scalable approach for generating individual discriminatory instances of DNNs. By generating several instances, it is possible to retrain a DNN to reduce discrimination. The approach is evaluated by comparing it with other two from the state of the art. The evaluation is performed on three significant datasets and shows a more effective search space exploration as well as the possibility to generate a larger number of individual discriminatory instances using significant less time. This paper provides a contribution that is cross-cutting two disciplines, software engineering and machine learning, and paves the way toward improving the quality of DNNs and their usability in societal contexts.