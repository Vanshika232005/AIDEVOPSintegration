export const eval25Data = {
  "evaluation": {
    "timestamp": "2026-09-17T08:10:58.658289",
    "questions": 25,
    "models": [
      "qwen2.5-coder:1.5b",
      "llama3.2:3b",
      "deepseek-coder:1.3b"
    ],
    "top_k": 3
  },
  "models": [
    {
      "model": "qwen2.5-coder:1.5b",
      "questions_expected": 25,
      "questions_recorded": 25,
      "results": [
        {
          "model": "qwen2.5-coder:1.5b",
          "question_id": 1,
          "question": "What documents are required for Aadhaar enrolment?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": 3.5398848709992308,
            "pages": [
              9,
              1,
              2
            ],
            "distances": [
              0.28995370864868164,
              0.30845996737480164,
              0.3144756555557251
            ],
            "results": [
              {
                "source": "UIAI_1.pdf",
                "page": 9,
                "chunk": "a valid document, you have to produce that for Aadhaar enrolment. In case you do not ha ve docu ments in y our name, y ou c an also use a certific ate issued b y authoriz ed official (r efer t o Anne x. II). UID AI has de fined a s tandard f ormat f or this certific ate. R efer t o the Lis t of Accep table Supporting Documen ts f or V erification a vailable a t: h ttps://uidai.gov.in/images/ commdoc/valid_documents_list.pdf To download Aadhaar Enrolment Form: SCAN To get details of nearby Aadhaar Enrolment Centre: SCAN Carry original documents to Aadhaar centre. These are scanned and given back to you. The document for Aadhaar enrolment should have your name. For List of Valid Supporting Documents SCAN",
                "distance": 0.28995370864868164
              },
              {
                "source": "UIAI_2.pdf",
                "page": 1,
                "chunk": "List of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan LIST OF ACCEPTABLE DOCUMENTS FOR ENROLMENT AND UPDATE List I - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar of individual up to five years of age List II - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar of individual five years and above and less than eighteen years of age List III - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar Number of individual eighteen years and above of age List IV - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for update of information in respect of Aadhaar Number Holder of any age",
                "distance": 0.30845996737480164
              },
              {
                "source": "UIAI_2.pdf",
                "page": 2,
                "chunk": "List of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan Enrolment Type I: Head of the Family (HoF) based enrolment Sl. No. List of documents (see note below this tabular statement) Proof of Relationship (PoR) document, containing name of child and name of Head of Family (HoF) Proof of Date of Birth (PDB) document, containing name and date of birth 1. Birth certificate issued under the Registration of Births and Deaths Act, 1969 and the rules made thereunder \uf0fe \uf0fe 2. Valid Indian Passport (only applicable for NRIs) \uf0fe \uf0fe 3. Document to prove legal guardianship issued by the Central government or a State Government authority or a court of law under the relevant Acts (the Guardians and Wards Act, 1890 / the National Trust Act, 1999 / the Rights of Persons with Disabilities Act, 2016) and the rules made under these Acts \uf0fe \uf0fd Enrolment Type II: Document based enrolment Sl. No. List of documents (see note below this tabular statement) Proof of Identity (PoI) document, c",
                "distance": 0.3144756555557251
              }
            ],
            "error": null
          },
          "context": "\nSource: UIAI_1.pdf\nPage: 9\n\na valid document, you have to produce that for Aadhaar enrolment. In case you do not ha ve docu ments in y our name, y ou c an also use a certific ate issued b y authoriz ed official (r efer t o Anne x. II). UID AI has de fined a s tandard f ormat f or this certific ate. R efer t o the Lis t of Accep table Supporting Documen ts f or V erification a vailable a t: h ttps://uidai.gov.in/images/ commdoc/valid_documents_list.pdf To download Aadhaar Enrolment Form: SCAN To get details of nearby Aadhaar Enrolment Centre: SCAN Carry original documents to Aadhaar centre. These are scanned and given back to you. The document for Aadhaar enrolment should have your name. For List of Valid Supporting Documents SCAN\n\n\nSource: UIAI_2.pdf\nPage: 1\n\nList of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan LIST OF ACCEPTABLE DOCUMENTS FOR ENROLMENT AND UPDATE List I - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar of individual up to five years of age List II - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar of individual five years and above and less than eighteen years of age List III - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar Number of individual eighteen years and above of age List IV - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for update of information in respect of Aadhaar Number Holder of any age\n\n\nSource: UIAI_2.pdf\nPage: 2\n\nList of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan Enrolment Type I: Head of the Family (HoF) based enrolment Sl. No. List of documents (see note below this tabular statement) Proof of Relationship (PoR) document, containing name of child and name of Head of Family (HoF) Proof of Date of Birth (PDB) document, containing name and date of birth 1. Birth certificate issued under the Registration of Births and Deaths Act, 1969 and the rules made thereunder \uf0fe \uf0fe 2. Valid Indian Passport (only applicable for NRIs) \uf0fe \uf0fe 3. Document to prove legal guardianship issued by the Central government or a State Government authority or a court of law under the relevant Acts (the Guardians and Wards Act, 1890 / the National Trust Act, 1999 / the Rights of Persons with Disabilities Act, 2016) and the rules made under these Acts \uf0fe \uf0fd Enrolment Type II: Document based enrolment Sl. No. List of documents (see note below this tabular statement) Proof of Identity (PoI) document, c\n",
          "generation": {
            "answer": "The information was not found in the provided Aadhaar Handbook.",
            "latency_seconds": 36.026457044999916,
            "prompt_tokens": 806,
            "output_tokens": 13,
            "total_tokens": 819,
            "total_duration_ns": 36023347199,
            "load_duration_ns": 1089258120,
            "prompt_eval_duration_ns": 70727000,
            "eval_duration_ns": 2262394000,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 96.7,
            "cpu_after_percent": 72.0,
            "memory_before_mb": 33.29296875,
            "memory_after_mb": 33.59765625,
            "memory_delta_mb": 0.3046875
          }
        },
        {
          "model": "qwen2.5-coder:1.5b",
          "question_id": 2,
          "question": "What is Aadhaar enrolment?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": 0.30208203099937236,
            "pages": [
              8,
              11,
              7
            ],
            "distances": [
              0.39678889513015747,
              0.4528173804283142,
              0.453491747379303
            ],
            "results": [
              {
                "source": "UIAI_1.pdf",
                "page": 8,
                "chunk": "Unique Identification Authority of India Government of India 8Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 2: HOW TO ENROL FOR AADHAAR? Visit Aadhaar Enrolment Centre Fill Aadhaar Enrolment/ Update F orm Check & Confirm All Spellings on screen Submit Valid Give Demographic & Biometric Data You get SMS of Aadhaar generation Documents for Scanning Collect your documents & Enrolment slip To g et Aadhaar , y ou ha ve t o enr oll b y pr oviding minimal demogr aphic and biome tric in formation during the enr olment process, which is totally free of cost. Please note that you need to enroll for Aadhaar only once. 2.1 En rolment Process Please do Check & Confirm all data shown on the resident screen, before the operator submits your Packet",
                "distance": 0.39678889513015747
              },
              {
                "source": "UIAI_1.pdf",
                "page": 11,
                "chunk": "Unique Identification Authority of India Government of India 11 Aadhaar Handbook for Residents 2021-Ver.2.0 Ch ildren, including new born babies, can enroll for Aadhaar. The enrolment of children follows the below two methods as per the age of the child being enrolled. F or children below 5 years of age: T o enroll a child (from a new born to one below 5 years of age), Aadhaar authen tication b y one of the par ents or guardian of the child is required. Biometric data of children below the age of 5 years is not captured during their enrolment. The child\u2019 s name, da te of birth, g ender and phot ograph are captured. Their Aadhaar is linked to that of their parent/ guardian. Th e parent/ guardian needs to take the child to any nearby Aadhaar Enrolment Centre with the following documents: \u2022 Child\u2019 s Birth Certificate issued b y R egistrar of Birth, Municipal Corpor ation or an y other notified loc al g overnment bodies like T aluk, T ehsil e tc. OR Discharge card/ slip issued by Governmen",
                "distance": 0.4528173804283142
              },
              {
                "source": "UIAI_1.pdf",
                "page": 7,
                "chunk": "haar enrolment. 1.2.2 Aadh aar for NRIs If y ou are a non-resident Indian (NRI), you can enroll for Aadhaar if you have an Indian Passport. The mandate of 182 days does not apply for NRIs. You can visit an Aadhaar Enrolment Centre and enr oll f or Aadhaar as an NRI. Indian P assport is manda tory as Pr oof of Iden tity (P oI) f or NRIs. The app licant may choose to give any other Indian Proof of Address (PoA) from amongst the documents accepted by UIDAI (see Section 13.1, Annex \u2013 I of this handbook). 1.3 F eatures of Aadhaar 1.3.1 Aadh aar is an identifier Aadhaar is a 12-digit unique ID issued to an individual. Aadhaar use s de mographic in formation (name, da te of birth, g ender and addr ess), phot ograph of the f ace, fing erprints and iris t o ide ntify a r esident. The se it ems of in formation ar e manda tory. In addition, y ou ha ve the op tion of pr oviding y our mobile phone number and email. We recommend that you provide these details also. 1.3.2 Aadh aar is an ID, nothing m",
                "distance": 0.453491747379303
              }
            ],
            "error": null
          },
          "context": "\nSource: UIAI_1.pdf\nPage: 8\n\nUnique Identification Authority of India Government of India 8Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 2: HOW TO ENROL FOR AADHAAR? Visit Aadhaar Enrolment Centre Fill Aadhaar Enrolment/ Update F orm Check & Confirm All Spellings on screen Submit Valid Give Demographic & Biometric Data You get SMS of Aadhaar generation Documents for Scanning Collect your documents & Enrolment slip To g et Aadhaar , y ou ha ve t o enr oll b y pr oviding minimal demogr aphic and biome tric in formation during the enr olment process, which is totally free of cost. Please note that you need to enroll for Aadhaar only once. 2.1 En rolment Process Please do Check & Confirm all data shown on the resident screen, before the operator submits your Packet\n\n\nSource: UIAI_1.pdf\nPage: 11\n\nUnique Identification Authority of India Government of India 11 Aadhaar Handbook for Residents 2021-Ver.2.0 Ch ildren, including new born babies, can enroll for Aadhaar. The enrolment of children follows the below two methods as per the age of the child being enrolled. F or children below 5 years of age: T o enroll a child (from a new born to one below 5 years of age), Aadhaar authen tication b y one of the par ents or guardian of the child is required. Biometric data of children below the age of 5 years is not captured during their enrolment. The child\u2019 s name, da te of birth, g ender and phot ograph are captured. Their Aadhaar is linked to that of their parent/ guardian. Th e parent/ guardian needs to take the child to any nearby Aadhaar Enrolment Centre with the following documents: \u2022 Child\u2019 s Birth Certificate issued b y R egistrar of Birth, Municipal Corpor ation or an y other notified loc al g overnment bodies like T aluk, T ehsil e tc. OR Discharge card/ slip issued by Governmen\n\n\nSource: UIAI_1.pdf\nPage: 7\n\nhaar enrolment. 1.2.2 Aadh aar for NRIs If y ou are a non-resident Indian (NRI), you can enroll for Aadhaar if you have an Indian Passport. The mandate of 182 days does not apply for NRIs. You can visit an Aadhaar Enrolment Centre and enr oll f or Aadhaar as an NRI. Indian P assport is manda tory as Pr oof of Iden tity (P oI) f or NRIs. The app licant may choose to give any other Indian Proof of Address (PoA) from amongst the documents accepted by UIDAI (see Section 13.1, Annex \u2013 I of this handbook). 1.3 F eatures of Aadhaar 1.3.1 Aadh aar is an identifier Aadhaar is a 12-digit unique ID issued to an individual. Aadhaar use s de mographic in formation (name, da te of birth, g ender and addr ess), phot ograph of the f ace, fing erprints and iris t o ide ntify a r esident. The se it ems of in formation ar e manda tory. In addition, y ou ha ve the op tion of pr oviding y our mobile phone number and email. We recommend that you provide these details also. 1.3.2 Aadh aar is an ID, nothing m\n",
          "generation": {
            "answer": "Aadhaar enrolment involves visiting an Aadhaar Enrolment Centre with the required documents to enroll for Aadhaar as a resident or non-resident Indian (NRI). The process typically includes providing minimal demographic and biometric data during the enrollment process, which is completely free of cost. The information collected is linked to that of the parent/ guardian of the child, and the child's name, date of birth, gender, and photograph are captured. The Aadhaar is then linked to that of their parent/ guardian.",
            "latency_seconds": 69.88801350100039,
            "prompt_tokens": 904,
            "output_tokens": 106,
            "total_tokens": 1010,
            "total_duration_ns": 69884746987,
            "load_duration_ns": 781719809,
            "prompt_eval_duration_ns": 73471000,
            "eval_duration_ns": 9085227000,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 100.0,
            "cpu_after_percent": 85.7,
            "memory_before_mb": 33.59765625,
            "memory_after_mb": 33.609375,
            "memory_delta_mb": 0.01171875
          }
        },
        {
          "model": "qwen2.5-coder:1.5b",
          "question_id": 3,
          "question": "What is the purpose of Aadhaar?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": 0.43906237299961504,
            "pages": [
              13,
              45,
              7
            ],
            "distances": [
              0.6429665088653564,
              0.653586745262146,
              0.6557984352111816
            ],
            "results": [
              {
                "source": "UIAI_1.pdf",
                "page": 13,
                "chunk": "trar-run Aadhaar Enrolment Centre These ar e the Aadhaar Enr olment Cen tre a vailable in Bank s, P ost Office s, BSN L cen tres, CSCs and St ate Go vernment offices acr oss the c ountry. The se ar e run b y r espective Enr olment R egistrars. 2.3.2.2 UID AI-run Aadhaar Seva Kendra Aadhaar Se va Kendras or ASKs are exclusive Aadhaar centres run by UIDAI that provide Aadhaar services to residents in a state-of-the-art environment.",
                "distance": 0.6429665088653564
              },
              {
                "source": "UIAI_1.pdf",
                "page": 45,
                "chunk": "Unique Identification Authority of India Government of India 45 Aadhaar Handbook for Residents 2021-Ver.2.0 10.5.1.3 YouTube: The official Aadhaar channel is accessible t o all user s on Y ouTube via h ttps://www. youtube.com/user/AadhaarUID. Y ou c an also sear ch f or \u2018 Aadhaar UID \u2019 on Y ouTube and sub scribe t o our official channel. This channel has dedic ated pla ylists of all tut orial videos of our onlin e ser vices, in formational videos r elated t o Aadhaar , all our TV ads, special messages, news reports, contest videos and more. Besides being informative, the channel giv es y ou a glimp se of the amazing video c ontent cr eated b y Aadhaar holders across the country. You can also leave a comment on our videos or share feedback. 10.5.1.4 Instagram: UID AI r ecently launched the official cus tomer c are acc ount of Aadhaar on Ins tagram. Y ou c an f ollow us @aadhaar_official (h ttps://instagram.com/aadhaar_official). F or an y specific queries, you can send us a direct messa",
                "distance": 0.653586745262146
              },
              {
                "source": "UIAI_1.pdf",
                "page": 7,
                "chunk": "Unique Identification Authority of India Government of India 7 Aadhaar Handbook for Residents 2021-Ver.2.0 1.2 Who c an get Aadhaar? An y individual in India, irr espective of ag e and g ender, who is a r esident of India, or a non r esident Indian (NRI), can enroll to obtain Aadhaar number. For an individual, only one Aadhaar number is generated, as the uniqueness is achieved through the process of demographic and biometric de-duplication. 1.2.1. Aadh aar for residents of India Y ou ar e eligible f or Aadhaar Enr olment if y ou ar e a r esident of India. This, b y de finition, means tha t y ou ha ve r esided in India f or a period or periods amoun ting in all t o one hundr ed and eigh ty-two days (182 days) or more in the twelve months immediately preceding the date of application for Aadhaar enrolment. 1.2.2 Aadh aar for NRIs If y ou are a non-resident Indian (NRI), you can enroll for Aadhaar if you have an Indian Passport. The mandate of 182 days does not apply for NRIs. You can vis",
                "distance": 0.6557984352111816
              }
            ],
            "error": null
          },
          "context": "\nSource: UIAI_1.pdf\nPage: 13\n\ntrar-run Aadhaar Enrolment Centre These ar e the Aadhaar Enr olment Cen tre a vailable in Bank s, P ost Office s, BSN L cen tres, CSCs and St ate Go vernment offices acr oss the c ountry. The se ar e run b y r espective Enr olment R egistrars. 2.3.2.2 UID AI-run Aadhaar Seva Kendra Aadhaar Se va Kendras or ASKs are exclusive Aadhaar centres run by UIDAI that provide Aadhaar services to residents in a state-of-the-art environment.\n\n\nSource: UIAI_1.pdf\nPage: 45\n\nUnique Identification Authority of India Government of India 45 Aadhaar Handbook for Residents 2021-Ver.2.0 10.5.1.3 YouTube: The official Aadhaar channel is accessible t o all user s on Y ouTube via h ttps://www. youtube.com/user/AadhaarUID. Y ou c an also sear ch f or \u2018 Aadhaar UID \u2019 on Y ouTube and sub scribe t o our official channel. This channel has dedic ated pla ylists of all tut orial videos of our onlin e ser vices, in formational videos r elated t o Aadhaar , all our TV ads, special messages, news reports, contest videos and more. Besides being informative, the channel giv es y ou a glimp se of the amazing video c ontent cr eated b y Aadhaar holders across the country. You can also leave a comment on our videos or share feedback. 10.5.1.4 Instagram: UID AI r ecently launched the official cus tomer c are acc ount of Aadhaar on Ins tagram. Y ou c an f ollow us @aadhaar_official (h ttps://instagram.com/aadhaar_official). F or an y specific queries, you can send us a direct messa\n\n\nSource: UIAI_1.pdf\nPage: 7\n\nUnique Identification Authority of India Government of India 7 Aadhaar Handbook for Residents 2021-Ver.2.0 1.2 Who c an get Aadhaar? An y individual in India, irr espective of ag e and g ender, who is a r esident of India, or a non r esident Indian (NRI), can enroll to obtain Aadhaar number. For an individual, only one Aadhaar number is generated, as the uniqueness is achieved through the process of demographic and biometric de-duplication. 1.2.1. Aadh aar for residents of India Y ou ar e eligible f or Aadhaar Enr olment if y ou ar e a r esident of India. This, b y de finition, means tha t y ou ha ve r esided in India f or a period or periods amoun ting in all t o one hundr ed and eigh ty-two days (182 days) or more in the twelve months immediately preceding the date of application for Aadhaar enrolment. 1.2.2 Aadh aar for NRIs If y ou are a non-resident Indian (NRI), you can enroll for Aadhaar if you have an Indian Passport. The mandate of 182 days does not apply for NRIs. You can vis\n",
          "generation": {
            "answer": "The purpose of Aadhaar is to uniquely identify individuals in India, ensuring that each person has a single and permanent identification number. This helps in various government services, including identity verification, financial transactions, and more.",
            "latency_seconds": 34.06623450199913,
            "prompt_tokens": 861,
            "output_tokens": 43,
            "total_tokens": 904,
            "total_duration_ns": 34062738512,
            "load_duration_ns": 697704403,
            "prompt_eval_duration_ns": 70986000,
            "eval_duration_ns": 3399498000,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 100.0,
            "cpu_after_percent": 79.3,
            "memory_before_mb": 33.609375,
            "memory_after_mb": 33.62109375,
            "memory_delta_mb": 0.01171875
          }
        },
        {
          "model": "qwen2.5-coder:1.5b",
          "question_id": 4,
          "question": "What is Proof of Identity?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": 0.36282629199922667,
            "pages": [
              7,
              5,
              8
            ],
            "distances": [
              0.6297215223312378,
              0.6307013034820557,
              0.6621238589286804
            ],
            "results": [
              {
                "source": "UIAI_1.pdf",
                "page": 7,
                "chunk": "ffline v erification, as the c ase ma y be. It elimina tes the need f or pr oviding iden tity documen ts each time y ou wish t o access ser vices, benefits and subsidies. Aadhaar provides a portable proof of identity that can be verified through Aadhaar Authentication online anytime, anywhere. Indian Passport is mandatory Identity proof for Aadhaar Enrolment of NRIs.",
                "distance": 0.6297215223312378
              },
              {
                "source": "UIAI_2.pdf",
                "page": 5,
                "chunk": "s Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Criteria for Head of Family and Proof of Relationship based enrolment: (i) HoF must have a valid Aadhaar before performing HoF based enrolment (ii) Any one of the parents or the legal guardian can be HoF (iii) Aadhaar number of both the parents is required for HoF based enrolment. In case the child",
                "distance": 0.6307013034820557
              },
              {
                "source": "UIAI_2.pdf",
                "page": 8,
                "chunk": "such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Validity period of the Aadhaar",
                "distance": 0.6621238589286804
              }
            ],
            "error": null
          },
          "context": "\nSource: UIAI_1.pdf\nPage: 7\n\nffline v erification, as the c ase ma y be. It elimina tes the need f or pr oviding iden tity documen ts each time y ou wish t o access ser vices, benefits and subsidies. Aadhaar provides a portable proof of identity that can be verified through Aadhaar Authentication online anytime, anywhere. Indian Passport is mandatory Identity proof for Aadhaar Enrolment of NRIs.\n\n\nSource: UIAI_2.pdf\nPage: 5\n\ns Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Criteria for Head of Family and Proof of Relationship based enrolment: (i) HoF must have a valid Aadhaar before performing HoF based enrolment (ii) Any one of the parents or the legal guardian can be HoF (iii) Aadhaar number of both the parents is required for HoF based enrolment. In case the child\n\n\nSource: UIAI_2.pdf\nPage: 8\n\nsuch document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Validity period of the Aadhaar\n",
          "generation": {
            "answer": "Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual.",
            "latency_seconds": 29.31202263600062,
            "prompt_tokens": 709,
            "output_tokens": 23,
            "total_tokens": 732,
            "total_duration_ns": 29310025969,
            "load_duration_ns": 671848331,
            "prompt_eval_duration_ns": 63832000,
            "eval_duration_ns": 2987420000,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 100.0,
            "cpu_after_percent": 86.2,
            "memory_before_mb": 33.62109375,
            "memory_after_mb": 33.62890625,
            "memory_delta_mb": 0.0078125
          }
        },
        {
          "model": "qwen2.5-coder:1.5b",
          "question_id": 5,
          "question": "What is Proof of Address?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": 0.2832250289993681,
            "pages": [
              63,
              63,
              3
            ],
            "distances": [
              0.5735834240913391,
              0.6217241287231445,
              0.6342085599899292
            ],
            "results": [
              {
                "source": "UIAI_1.pdf",
                "page": 63,
                "chunk": "Proof of Address) documents containing Name & Address 1. Passport 2. Bank Statement/ Passbook 3. Post Office Account Statement/ Passbook 4. Ration Card 5. Voter ID 6. Driving License 7. Government Photo ID cards/ service photo identity card issued by PSU 8. Electricity Bill (not older than 3 months) 9. Water Bill (not older than 3 months) 10. Telephone Landline Bill (not older than 3 months) 11. Property Tax Receipt (not older than 1 year) 12. Credit Card Statement (not older than 3 months) 13. Insurance Policy 14. Signed Letter having Photo from Bank on letterhead 15. Signed Letter having Photo issued by registered Company on letterhead 16. Signed Letter having Photo issued by Recognized Educational Institution on letterhead or Photo ID having address issued by Recognized Educational Institution 17. NREGS Job Card 18. Arms License 19. Pensioner Card 20. Freedom Fighter Card 21. Kissan Passbook 22. CGHS/ ECHS Card 23. Certificate of Address having photo issued by MP or MLA or MLC or Ga",
                "distance": 0.5735834240913391
              },
              {
                "source": "UIAI_1.pdf",
                "page": 63,
                "chunk": "low). Declared checkbox may be selected if Resident does not have a valid proof of Date of Birth document. Verified checkbox is selected where Resident has provided documents as proof of Date of birth. Field 6: ADDRESS Write complete address. Please bring the original Proof of Address (POA) document. (See list B below). Please note that the Aadhaar letter will be delivered at the given address only. \u2022 To include name of Parent / Guardian / Spouse as part of the ad dress, enter the name of person in the c/o field. \u2022 Minor Corrections / Enhancements are permissible to make the address complete without altering the base address as mentioned in POA document. Field 7: RELATIONSHIP In case of children below 5 years, it is mandatory to provide father/mother/guardian details with their Aadhaar or EID number. If the resident is not holding a Proof of Identity & using the Head of the Family identity for enrolment, it is mandatory to provide Head of the family\u2019s details with his/her Aadhaar or EI",
                "distance": 0.6217241287231445
              },
              {
                "source": "UIAI_2.pdf",
                "page": 3,
                "chunk": "List of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan * Proof of Address documents as in the \u201cList III - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar Number of individual eighteen years and above of age\u201d will also be applicable Note: (a) Any document listed in the above tabular statement shall be acceptable only if it meets the following conditions, namely:\u2014 (i) It is currently valid; (ii) The person in respect of whom such document is issued is entitled for the same; (iii) The information contained in the document is verifiable from the source; and (iv) The authority issuing the document has not made any declaration that such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is",
                "distance": 0.6342085599899292
              }
            ],
            "error": null
          },
          "context": "\nSource: UIAI_1.pdf\nPage: 63\n\nProof of Address) documents containing Name & Address 1. Passport 2. Bank Statement/ Passbook 3. Post Office Account Statement/ Passbook 4. Ration Card 5. Voter ID 6. Driving License 7. Government Photo ID cards/ service photo identity card issued by PSU 8. Electricity Bill (not older than 3 months) 9. Water Bill (not older than 3 months) 10. Telephone Landline Bill (not older than 3 months) 11. Property Tax Receipt (not older than 1 year) 12. Credit Card Statement (not older than 3 months) 13. Insurance Policy 14. Signed Letter having Photo from Bank on letterhead 15. Signed Letter having Photo issued by registered Company on letterhead 16. Signed Letter having Photo issued by Recognized Educational Institution on letterhead or Photo ID having address issued by Recognized Educational Institution 17. NREGS Job Card 18. Arms License 19. Pensioner Card 20. Freedom Fighter Card 21. Kissan Passbook 22. CGHS/ ECHS Card 23. Certificate of Address having photo issued by MP or MLA or MLC or Ga\n\n\nSource: UIAI_1.pdf\nPage: 63\n\nlow). Declared checkbox may be selected if Resident does not have a valid proof of Date of Birth document. Verified checkbox is selected where Resident has provided documents as proof of Date of birth. Field 6: ADDRESS Write complete address. Please bring the original Proof of Address (POA) document. (See list B below). Please note that the Aadhaar letter will be delivered at the given address only. \u2022 To include name of Parent / Guardian / Spouse as part of the ad dress, enter the name of person in the c/o field. \u2022 Minor Corrections / Enhancements are permissible to make the address complete without altering the base address as mentioned in POA document. Field 7: RELATIONSHIP In case of children below 5 years, it is mandatory to provide father/mother/guardian details with their Aadhaar or EID number. If the resident is not holding a Proof of Identity & using the Head of the Family identity for enrolment, it is mandatory to provide Head of the family\u2019s details with his/her Aadhaar or EI\n\n\nSource: UIAI_2.pdf\nPage: 3\n\nList of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan * Proof of Address documents as in the \u201cList III - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar Number of individual eighteen years and above of age\u201d will also be applicable Note: (a) Any document listed in the above tabular statement shall be acceptable only if it meets the following conditions, namely:\u2014 (i) It is currently valid; (ii) The person in respect of whom such document is issued is entitled for the same; (iii) The information contained in the document is verifiable from the source; and (iv) The authority issuing the document has not made any declaration that such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is\n",
          "generation": {
            "answer": "Proof of Address refers to documents containing Name & Address 1. Passport 2. Bank Statement/ Passbook 3. Post Office Account Statement/ Passbook 4. Ration Card 5. Voter ID 6. Driving License 7. Government Photo ID cards/ service photo identity card issued by PSU 8. Electricity Bill (not older than 3 months) 9. Water Bill (not older than 3 months) 10. Telephone Landline Bill (not older than 3 months) 11. Property Tax Receipt (not older than 1 year) 12. Credit Card Statement (not older than 3 months) 13. Insurance Policy 14. Signed Letter having Photo from Bank on letterhead 15. Signed Letter having Photo issued by registered Company on letterhead 16. Signed Letter having Photo issued by Recognized Educational Institution on letterhead or Photo ID having address issued by Recognized Educational Institution 17. NREGS Job Card 18. Arms License 19. Pensioner Card 20. Freedom Fighter Card 21. Kissan Passbook 22. CGHS/ ECHS Card 23. Certificate of Address having photo issued by MP or MLA or MLC or Ga",
            "latency_seconds": 135.25005792299999,
            "prompt_tokens": 867,
            "output_tokens": 265,
            "total_tokens": 1132,
            "total_duration_ns": 135246777501,
            "load_duration_ns": 646721093,
            "prompt_eval_duration_ns": 69957000,
            "eval_duration_ns": 22974810000,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 100.0,
            "cpu_after_percent": 86.2,
            "memory_before_mb": 33.62890625,
            "memory_after_mb": 33.58984375,
            "memory_delta_mb": 0
          }
        },
        {
          "model": "qwen2.5-coder:1.5b",
          "question_id": 6,
          "question": "What is Proof of Date of Birth?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": 0.5021540259986068,
            "pages": [
              13,
              3,
              63
            ],
            "distances": [
              0.4825599193572998,
              0.557792067527771,
              0.6019162535667419
            ],
            "results": [
              {
                "source": "UIAI_2.pdf",
                "page": 13,
                "chunk": "irth certificate as proof of date of birth b. For Non-Resident Indian (NRI) below 18 years of age: - Aadhaar number holder shall submit birth certificate or Indian Passport as proof of date of birth c. For resident Indians and Non-Resident Indian (NRI) of 18 years and above of age: - Aadhaar number holder shall submit any of the acceptable proof of date of birth documents as specified in the above list (ii) If the Aadhaar number holder had earlier submitted birth certificate as proof of date of birth, the Aadhaar number holder shall submit corrected birth certificate bearing same Birth Registration Number (BRN) (iii) If the Aadhaar number holder had earlier submitted any proof of date of birth document except birth certificate (for e.g. Marksheet, Passport etc.), the Aadhaar number holder shall submit corrected version of the same document or submit a birth certificate (iv) In case of date of birth update of woman who has changed her name post-marriage, proof of date of birth documents",
                "distance": 0.4825599193572998
              },
              {
                "source": "UIAI_2.pdf",
                "page": 3,
                "chunk": "birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Head of Family (HoF) based enrolment is mandatory for children below five years of age ex",
                "distance": 0.557792067527771
              },
              {
                "source": "UIAI_1.pdf",
                "page": 63,
                "chunk": "low). Declared checkbox may be selected if Resident does not have a valid proof of Date of Birth document. Verified checkbox is selected where Resident has provided documents as proof of Date of birth. Field 6: ADDRESS Write complete address. Please bring the original Proof of Address (POA) document. (See list B below). Please note that the Aadhaar letter will be delivered at the given address only. \u2022 To include name of Parent / Guardian / Spouse as part of the ad dress, enter the name of person in the c/o field. \u2022 Minor Corrections / Enhancements are permissible to make the address complete without altering the base address as mentioned in POA document. Field 7: RELATIONSHIP In case of children below 5 years, it is mandatory to provide father/mother/guardian details with their Aadhaar or EID number. If the resident is not holding a Proof of Identity & using the Head of the Family identity for enrolment, it is mandatory to provide Head of the family\u2019s details with his/her Aadhaar or EI",
                "distance": 0.6019162535667419
              }
            ],
            "error": null
          },
          "context": "\nSource: UIAI_2.pdf\nPage: 13\n\nirth certificate as proof of date of birth b. For Non-Resident Indian (NRI) below 18 years of age: - Aadhaar number holder shall submit birth certificate or Indian Passport as proof of date of birth c. For resident Indians and Non-Resident Indian (NRI) of 18 years and above of age: - Aadhaar number holder shall submit any of the acceptable proof of date of birth documents as specified in the above list (ii) If the Aadhaar number holder had earlier submitted birth certificate as proof of date of birth, the Aadhaar number holder shall submit corrected birth certificate bearing same Birth Registration Number (BRN) (iii) If the Aadhaar number holder had earlier submitted any proof of date of birth document except birth certificate (for e.g. Marksheet, Passport etc.), the Aadhaar number holder shall submit corrected version of the same document or submit a birth certificate (iv) In case of date of birth update of woman who has changed her name post-marriage, proof of date of birth documents\n\n\nSource: UIAI_2.pdf\nPage: 3\n\nbirth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Head of Family (HoF) based enrolment is mandatory for children below five years of age ex\n\n\nSource: UIAI_1.pdf\nPage: 63\n\nlow). Declared checkbox may be selected if Resident does not have a valid proof of Date of Birth document. Verified checkbox is selected where Resident has provided documents as proof of Date of birth. Field 6: ADDRESS Write complete address. Please bring the original Proof of Address (POA) document. (See list B below). Please note that the Aadhaar letter will be delivered at the given address only. \u2022 To include name of Parent / Guardian / Spouse as part of the ad dress, enter the name of person in the c/o field. \u2022 Minor Corrections / Enhancements are permissible to make the address complete without altering the base address as mentioned in POA document. Field 7: RELATIONSHIP In case of children below 5 years, it is mandatory to provide father/mother/guardian details with their Aadhaar or EID number. If the resident is not holding a Proof of Identity & using the Head of the Family identity for enrolment, it is mandatory to provide Head of the family\u2019s details with his/her Aadhaar or EI\n",
          "generation": {
            "answer": "Proof of Date of Birth refers to any document that verifies the individual's date of birth. According to the Aadhaar Handbook context provided:\n\n1. For Non-Resident Indian (NRI) below 18 years of age: - Aadhaar number holder shall submit birth certificate or Indian Passport as proof of date of birth.\n2. For resident Indians and Non-Resident Indian (NRI) of 18 years and above of age: - Aadhaar number holder shall submit any of the acceptable proof of date of birth documents as specified in the above list (ii).\n\nThe relevant page numbers for this information are:\nPage: 3\nPage: 6",
            "latency_seconds": 43.64672389599946,
            "prompt_tokens": 825,
            "output_tokens": 136,
            "total_tokens": 961,
            "total_duration_ns": 43644726108,
            "load_duration_ns": 817193855,
            "prompt_eval_duration_ns": 71186000,
            "eval_duration_ns": 10839317000,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 100.0,
            "cpu_after_percent": 96.6,
            "memory_before_mb": 33.58984375,
            "memory_after_mb": 33.44921875,
            "memory_delta_mb": 0
          }
        },
        {
          "model": "qwen2.5-coder:1.5b",
          "question_id": 7,
          "question": "What is Proof of Relationship?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": 0.37423115099954884,
            "pages": [
              5,
              3,
              8
            ],
            "distances": [
              0.6588935852050781,
              0.6885577440261841,
              0.6998454332351685
            ],
            "results": [
              {
                "source": "UIAI_2.pdf",
                "page": 5,
                "chunk": "s Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Criteria for Head of Family and Proof of Relationship based enrolment: (i) HoF must have a valid Aadhaar before performing HoF based enrolment (ii) Any one of the parents or the legal guardian can be HoF (iii) Aadhaar number of both the parents is required for HoF based enrolment. In case the child",
                "distance": 0.6588935852050781
              },
              {
                "source": "UIAI_2.pdf",
                "page": 3,
                "chunk": "birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Head of Family (HoF) based enrolment is mandatory for children below five years of age ex",
                "distance": 0.6885577440261841
              },
              {
                "source": "UIAI_2.pdf",
                "page": 8,
                "chunk": "such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Validity period of the Aadhaar",
                "distance": 0.6998454332351685
              }
            ],
            "error": null
          },
          "context": "\nSource: UIAI_2.pdf\nPage: 5\n\ns Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Criteria for Head of Family and Proof of Relationship based enrolment: (i) HoF must have a valid Aadhaar before performing HoF based enrolment (ii) Any one of the parents or the legal guardian can be HoF (iii) Aadhaar number of both the parents is required for HoF based enrolment. In case the child\n\n\nSource: UIAI_2.pdf\nPage: 3\n\nbirth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Head of Family (HoF) based enrolment is mandatory for children below five years of age ex\n\n\nSource: UIAI_2.pdf\nPage: 8\n\nsuch document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Validity period of the Aadhaar\n",
          "generation": {
            "answer": "Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF).",
            "latency_seconds": 19.658479271000033,
            "prompt_tokens": 840,
            "output_tokens": 29,
            "total_tokens": 869,
            "total_duration_ns": 19655775564,
            "load_duration_ns": 686023221,
            "prompt_eval_duration_ns": 70402000,
            "eval_duration_ns": 3466775000,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 100.0,
            "cpu_after_percent": 84.0,
            "memory_before_mb": 33.44921875,
            "memory_after_mb": 33.0546875,
            "memory_delta_mb": 0
          }
        },
        {
          "model": "qwen2.5-coder:1.5b",
          "question_id": 8,
          "question": "Can Aadhaar enrolment be done without supporting documents?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": 0.32317552699896623,
            "pages": [
              9,
              7,
              6
            ],
            "distances": [
              0.3367202877998352,
              0.41059410572052,
              0.43277132511138916
            ],
            "results": [
              {
                "source": "UIAI_1.pdf",
                "page": 9,
                "chunk": "a valid document, you have to produce that for Aadhaar enrolment. In case you do not ha ve docu ments in y our name, y ou c an also use a certific ate issued b y authoriz ed official (r efer t o Anne x. II). UID AI has de fined a s tandard f ormat f or this certific ate. R efer t o the Lis t of Accep table Supporting Documen ts f or V erification a vailable a t: h ttps://uidai.gov.in/images/ commdoc/valid_documents_list.pdf To download Aadhaar Enrolment Form: SCAN To get details of nearby Aadhaar Enrolment Centre: SCAN Carry original documents to Aadhaar centre. These are scanned and given back to you. The document for Aadhaar enrolment should have your name. For List of Valid Supporting Documents SCAN",
                "distance": 0.3367202877998352
              },
              {
                "source": "UIAI_1.pdf",
                "page": 7,
                "chunk": "haar enrolment. 1.2.2 Aadh aar for NRIs If y ou are a non-resident Indian (NRI), you can enroll for Aadhaar if you have an Indian Passport. The mandate of 182 days does not apply for NRIs. You can visit an Aadhaar Enrolment Centre and enr oll f or Aadhaar as an NRI. Indian P assport is manda tory as Pr oof of Iden tity (P oI) f or NRIs. The app licant may choose to give any other Indian Proof of Address (PoA) from amongst the documents accepted by UIDAI (see Section 13.1, Annex \u2013 I of this handbook). 1.3 F eatures of Aadhaar 1.3.1 Aadh aar is an identifier Aadhaar is a 12-digit unique ID issued to an individual. Aadhaar use s de mographic in formation (name, da te of birth, g ender and addr ess), phot ograph of the f ace, fing erprints and iris t o ide ntify a r esident. The se it ems of in formation ar e manda tory. In addition, y ou ha ve the op tion of pr oviding y our mobile phone number and email. We recommend that you provide these details also. 1.3.2 Aadh aar is an ID, nothing m",
                "distance": 0.41059410572052
              },
              {
                "source": "UIAI_2.pdf",
                "page": 6,
                "chunk": "List of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan List III - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar Number of individual eighteen years and above of age \uf0feMeans allowed | \uf0fdMeans not allowed Sl. No. List of documents (see note below this tabular statement) Proof of Identity (PoI) document, containing name and photograph Proof of Address (PoA) document, containing name and address in India Proof of Date of Birth (PDB) document, containing name and date of birth 1. Valid Indian Passport \uf0fe \uf0fe \uf0fe 2. Ration /PDS Photograph Card/e-Ration Card \uf0fe \uf0fe \uf0fd 3. Voter Identity Card /e-Voter Identity Card whose details are displayed online on the website of the Election Commission of India or the Chief Electoral Officer concerned \uf0fe \uf0fe \uf0fd 4. Driving licence \uf0fe \uf0fd \uf0fd 5. Service Photo Identity Card issued by Central Government/ State Government/ PSU/ regulatory body / statutory body \uf0fe \uf0fe \uf0fe 6. Pen",
                "distance": 0.43277132511138916
              }
            ],
            "error": null
          },
          "context": "\nSource: UIAI_1.pdf\nPage: 9\n\na valid document, you have to produce that for Aadhaar enrolment. In case you do not ha ve docu ments in y our name, y ou c an also use a certific ate issued b y authoriz ed official (r efer t o Anne x. II). UID AI has de fined a s tandard f ormat f or this certific ate. R efer t o the Lis t of Accep table Supporting Documen ts f or V erification a vailable a t: h ttps://uidai.gov.in/images/ commdoc/valid_documents_list.pdf To download Aadhaar Enrolment Form: SCAN To get details of nearby Aadhaar Enrolment Centre: SCAN Carry original documents to Aadhaar centre. These are scanned and given back to you. The document for Aadhaar enrolment should have your name. For List of Valid Supporting Documents SCAN\n\n\nSource: UIAI_1.pdf\nPage: 7\n\nhaar enrolment. 1.2.2 Aadh aar for NRIs If y ou are a non-resident Indian (NRI), you can enroll for Aadhaar if you have an Indian Passport. The mandate of 182 days does not apply for NRIs. You can visit an Aadhaar Enrolment Centre and enr oll f or Aadhaar as an NRI. Indian P assport is manda tory as Pr oof of Iden tity (P oI) f or NRIs. The app licant may choose to give any other Indian Proof of Address (PoA) from amongst the documents accepted by UIDAI (see Section 13.1, Annex \u2013 I of this handbook). 1.3 F eatures of Aadhaar 1.3.1 Aadh aar is an identifier Aadhaar is a 12-digit unique ID issued to an individual. Aadhaar use s de mographic in formation (name, da te of birth, g ender and addr ess), phot ograph of the f ace, fing erprints and iris t o ide ntify a r esident. The se it ems of in formation ar e manda tory. In addition, y ou ha ve the op tion of pr oviding y our mobile phone number and email. We recommend that you provide these details also. 1.3.2 Aadh aar is an ID, nothing m\n\n\nSource: UIAI_2.pdf\nPage: 6\n\nList of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan List III - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar Number of individual eighteen years and above of age \uf0feMeans allowed | \uf0fdMeans not allowed Sl. No. List of documents (see note below this tabular statement) Proof of Identity (PoI) document, containing name and photograph Proof of Address (PoA) document, containing name and address in India Proof of Date of Birth (PDB) document, containing name and date of birth 1. Valid Indian Passport \uf0fe \uf0fe \uf0fe 2. Ration /PDS Photograph Card/e-Ration Card \uf0fe \uf0fe \uf0fd 3. Voter Identity Card /e-Voter Identity Card whose details are displayed online on the website of the Election Commission of India or the Chief Electoral Officer concerned \uf0fe \uf0fe \uf0fd 4. Driving licence \uf0fe \uf0fd \uf0fd 5. Service Photo Identity Card issued by Central Government/ State Government/ PSU/ regulatory body / statutory body \uf0fe \uf0fe \uf0fe 6. Pen\n",
          "generation": {
            "answer": "The information was not found in the provided Aadhaar Handbook.",
            "latency_seconds": 33.8459344769999,
            "prompt_tokens": 918,
            "output_tokens": 13,
            "total_tokens": 931,
            "total_duration_ns": 33842443166,
            "load_duration_ns": 631835688,
            "prompt_eval_duration_ns": 70868000,
            "eval_duration_ns": 1410647000,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 100.0,
            "cpu_after_percent": 92.0,
            "memory_before_mb": 33.0546875,
            "memory_after_mb": 32.91015625,
            "memory_delta_mb": 0
          }
        },
        {
          "model": "qwen2.5-coder:1.5b",
          "question_id": 9,
          "question": "What information is collected during Aadhaar enrolment?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": 1.3627970710003865,
            "pages": [
              8,
              13,
              10
            ],
            "distances": [
              0.43172141909599304,
              0.45054009556770325,
              0.47255373001098633
            ],
            "results": [
              {
                "source": "UIAI_1.pdf",
                "page": 8,
                "chunk": "Unique Identification Authority of India Government of India 8Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 2: HOW TO ENROL FOR AADHAAR? Visit Aadhaar Enrolment Centre Fill Aadhaar Enrolment/ Update F orm Check & Confirm All Spellings on screen Submit Valid Give Demographic & Biometric Data You get SMS of Aadhaar generation Documents for Scanning Collect your documents & Enrolment slip To g et Aadhaar , y ou ha ve t o enr oll b y pr oviding minimal demogr aphic and biome tric in formation during the enr olment process, which is totally free of cost. Please note that you need to enroll for Aadhaar only once. 2.1 En rolment Process Please do Check & Confirm all data shown on the resident screen, before the operator submits your Packet",
                "distance": 0.43172141909599304
              },
              {
                "source": "UIAI_1.pdf",
                "page": 13,
                "chunk": "Unique Identification Authority of India Government of India 13 Aadhaar Handbook for Residents 2021-Ver.2.0 To get more details on Aadhaar Seva Kendra SCAN How to locate Aadhaar Kendra tutorial SCAN Aadhaar Seva Kendra are open on all seven days of the week, except on public holidays, from 9.30 a.m. to 5.30 p.m. Each ASK has the capacity to handle 250 to 1000 service requests per day. 2.3.1 Loc ate Aadhaar Enrolment Centre near you Y ou can get details of any nearby Aadhaar Enrolment Centre from: \u2022 B y calling 1947 \u2022 Fr om Aadhaar website: https://appointments.uidai.gov.in/easearch.aspx \u2022 Fr om mAadhaar App 2.3.2 T ypes of Enrolment Centres Th e Aadhaar En rolment Cen tres c an be br oadly classified in to tw o c ategories based on the f ormat of service delivery. These are: 2.3.2.1 R egistrar-run Aadhaar Enrolment Centre These ar e the Aadhaar Enr olment Cen tre a vailable in Bank s, P ost Office s, BSN L cen tres, CSCs and St ate Go vernment offices acr oss the c ountry. The se ar e",
                "distance": 0.45054009556770325
              },
              {
                "source": "UIAI_1.pdf",
                "page": 10,
                "chunk": "trars\u2019 own employees \u2022 Elect ed local body members \u2022 Members of local administrative bodies \u2022 P ostman \u2022 Influencers such as teachers \u2022 Health w orkers \u2022 Doct ors \u2022 Ang anwadis/Asha workers \u2022 Representatives of local NGOs The information captured during Introducer-based Enrolment is: \u2022 Introducer\u2019s name \u2022 Introducer\u2019s Aadhaar number \u2022 One modality of biometric information of the Introducer 2.1.4 Enr olment of Children For HoF based enrolment, the Head of Family has to give biometric confirmation at the time of enrolment.",
                "distance": 0.47255373001098633
              }
            ],
            "error": null
          },
          "context": "\nSource: UIAI_1.pdf\nPage: 8\n\nUnique Identification Authority of India Government of India 8Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 2: HOW TO ENROL FOR AADHAAR? Visit Aadhaar Enrolment Centre Fill Aadhaar Enrolment/ Update F orm Check & Confirm All Spellings on screen Submit Valid Give Demographic & Biometric Data You get SMS of Aadhaar generation Documents for Scanning Collect your documents & Enrolment slip To g et Aadhaar , y ou ha ve t o enr oll b y pr oviding minimal demogr aphic and biome tric in formation during the enr olment process, which is totally free of cost. Please note that you need to enroll for Aadhaar only once. 2.1 En rolment Process Please do Check & Confirm all data shown on the resident screen, before the operator submits your Packet\n\n\nSource: UIAI_1.pdf\nPage: 13\n\nUnique Identification Authority of India Government of India 13 Aadhaar Handbook for Residents 2021-Ver.2.0 To get more details on Aadhaar Seva Kendra SCAN How to locate Aadhaar Kendra tutorial SCAN Aadhaar Seva Kendra are open on all seven days of the week, except on public holidays, from 9.30 a.m. to 5.30 p.m. Each ASK has the capacity to handle 250 to 1000 service requests per day. 2.3.1 Loc ate Aadhaar Enrolment Centre near you Y ou can get details of any nearby Aadhaar Enrolment Centre from: \u2022 B y calling 1947 \u2022 Fr om Aadhaar website: https://appointments.uidai.gov.in/easearch.aspx \u2022 Fr om mAadhaar App 2.3.2 T ypes of Enrolment Centres Th e Aadhaar En rolment Cen tres c an be br oadly classified in to tw o c ategories based on the f ormat of service delivery. These are: 2.3.2.1 R egistrar-run Aadhaar Enrolment Centre These ar e the Aadhaar Enr olment Cen tre a vailable in Bank s, P ost Office s, BSN L cen tres, CSCs and St ate Go vernment offices acr oss the c ountry. The se ar e\n\n\nSource: UIAI_1.pdf\nPage: 10\n\ntrars\u2019 own employees \u2022 Elect ed local body members \u2022 Members of local administrative bodies \u2022 P ostman \u2022 Influencers such as teachers \u2022 Health w orkers \u2022 Doct ors \u2022 Ang anwadis/Asha workers \u2022 Representatives of local NGOs The information captured during Introducer-based Enrolment is: \u2022 Introducer\u2019s name \u2022 Introducer\u2019s Aadhaar number \u2022 One modality of biometric information of the Introducer 2.1.4 Enr olment of Children For HoF based enrolment, the Head of Family has to give biometric confirmation at the time of enrolment.\n",
          "generation": {
            "answer": "The information collected during Aadhaar enrolment includes:\n\n- Demographic data such as name, date of birth, gender, and address.\n- Biometric data such as fingerprints or facial recognition.\n\nThis information is collected through a form that the user fills out during the enrollment process. The information is then submitted to the Aadhaar Enrolment Centre for verification and processing.",
            "latency_seconds": 49.59334211100031,
            "prompt_tokens": 792,
            "output_tokens": 74,
            "total_tokens": 866,
            "total_duration_ns": 49585568307,
            "load_duration_ns": 577105297,
            "prompt_eval_duration_ns": 68090000,
            "eval_duration_ns": 6509578000,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 100.0,
            "cpu_after_percent": 70.6,
            "memory_before_mb": 32.91015625,
            "memory_after_mb": 32.921875,
            "memory_delta_mb": 0.01171875
          }
        },
        {
          "model": "qwen2.5-coder:1.5b",
          "question_id": 10,
          "question": "What biometric information is collected for Aadhaar?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": 0.35576497799956996,
            "pages": [
              37,
              64,
              32
            ],
            "distances": [
              0.3628368377685547,
              0.38319915533065796,
              0.40078648924827576
            ],
            "results": [
              {
                "source": "UIAI_1.pdf",
                "page": 37,
                "chunk": "Unique Identification Authority of India Government of India 37 Aadhaar Handbook for Residents 2021-Ver.2.0 To read FAQs SCAN \u2022 Aadhaar Authentication History: Using this service, you can g et de tails of authen tication perf ormed b y y ou in pas t 6 mon ths. The OTP for this service will be sent to your registered mobile number. \u2022 Offline eKYC Service: Using this service, you can generate your digitally signed Aadhaar details that you may use for KYC purposes. To know more about Aadhaar Authentication History SCAN To know more about Aadhaar Paperless Offline eKYC: SCAN 8.3 Fr equently Asked Questions UID AI also has e xtensive F AQs section on the w ebsite and mAadhaar app to help residents understand Aadhaar process, services and products.",
                "distance": 0.3628368377685547
              },
              {
                "source": "UIAI_1.pdf",
                "page": 64,
                "chunk": "Unique Identification Authority of India Government of India 64Aadhaar Handbook for Residents 2021-Ver.2.0 Verify Aadhaar SCAN Lock/ Unlock Aadhaar SCAN Check your Aadhaar Update History SCAN Update Address Without Documents SCAN Secure QR Code SCAN Locate Aadhaar Enrolment Centre SCAN Verify Digital Signature SCAN Get back your lost Aadhaar number or Enrolment ID SCAN Check status of your Aadhaar enrolment or update request SCAN mAadhaar App SCAN Download Aadhaar SCAN Generate/ Retrieve VID SCAN Check your Aadhaar Authentication History SCAN Check Status of your online update request SCAN Online Appointment Booking SCAN Update Address Online SCAN What is EID SCAN Lock/ Unlock Biometrics SCAN Order Aadhaar Reprint SCAN Aadhaar Chatbot SCAN 13.5 Aadhaar T utorial Videos",
                "distance": 0.38319915533065796
              },
              {
                "source": "UIAI_1.pdf",
                "page": 32,
                "chunk": "Unique Identification Authority of India Government of India 32Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 7: VERIFICATION OF AADHAAR Not every 12 digit number is Aadhaar Verify Aadhaar Online To watch tutorial on Verify Aadhaar Service SCAN 7.1 V erify any Aadhaar Online An y Aadhaar number c an be v erified onli ne fr om uidai. gov. in. Y ou c an use this ser vice t o check the authen ticity of an y Aadhaar number tha t is presented to you. For the entered Aadhaar number, you get the following details of the Aadhaar holder: \u2022 If the Aadhaar number e xists \u2022 Ag e band \u2022 Gender \u2022 St ate of residence \u2022 Mobile Number (in mask ed form showing only last 4 digits) Be sides, a service provider can also verify the Aadhaar presented by a person using following services: 1. Online from: https://resident.uidai.gov.in/verify 2. Fr om mAadhaar App 3. Sc an the QR Code on presented Aadhaar using the Aadhaar QR Code Scanner App or mAadhaar App",
                "distance": 0.40078648924827576
              }
            ],
            "error": null
          },
          "context": "\nSource: UIAI_1.pdf\nPage: 37\n\nUnique Identification Authority of India Government of India 37 Aadhaar Handbook for Residents 2021-Ver.2.0 To read FAQs SCAN \u2022 Aadhaar Authentication History: Using this service, you can g et de tails of authen tication perf ormed b y y ou in pas t 6 mon ths. The OTP for this service will be sent to your registered mobile number. \u2022 Offline eKYC Service: Using this service, you can generate your digitally signed Aadhaar details that you may use for KYC purposes. To know more about Aadhaar Authentication History SCAN To know more about Aadhaar Paperless Offline eKYC: SCAN 8.3 Fr equently Asked Questions UID AI also has e xtensive F AQs section on the w ebsite and mAadhaar app to help residents understand Aadhaar process, services and products.\n\n\nSource: UIAI_1.pdf\nPage: 64\n\nUnique Identification Authority of India Government of India 64Aadhaar Handbook for Residents 2021-Ver.2.0 Verify Aadhaar SCAN Lock/ Unlock Aadhaar SCAN Check your Aadhaar Update History SCAN Update Address Without Documents SCAN Secure QR Code SCAN Locate Aadhaar Enrolment Centre SCAN Verify Digital Signature SCAN Get back your lost Aadhaar number or Enrolment ID SCAN Check status of your Aadhaar enrolment or update request SCAN mAadhaar App SCAN Download Aadhaar SCAN Generate/ Retrieve VID SCAN Check your Aadhaar Authentication History SCAN Check Status of your online update request SCAN Online Appointment Booking SCAN Update Address Online SCAN What is EID SCAN Lock/ Unlock Biometrics SCAN Order Aadhaar Reprint SCAN Aadhaar Chatbot SCAN 13.5 Aadhaar T utorial Videos\n\n\nSource: UIAI_1.pdf\nPage: 32\n\nUnique Identification Authority of India Government of India 32Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 7: VERIFICATION OF AADHAAR Not every 12 digit number is Aadhaar Verify Aadhaar Online To watch tutorial on Verify Aadhaar Service SCAN 7.1 V erify any Aadhaar Online An y Aadhaar number c an be v erified onli ne fr om uidai. gov. in. Y ou c an use this ser vice t o check the authen ticity of an y Aadhaar number tha t is presented to you. For the entered Aadhaar number, you get the following details of the Aadhaar holder: \u2022 If the Aadhaar number e xists \u2022 Ag e band \u2022 Gender \u2022 St ate of residence \u2022 Mobile Number (in mask ed form showing only last 4 digits) Be sides, a service provider can also verify the Aadhaar presented by a person using following services: 1. Online from: https://resident.uidai.gov.in/verify 2. Fr om mAadhaar App 3. Sc an the QR Code on presented Aadhaar using the Aadhaar QR Code Scanner App or mAadhaar App\n",
          "generation": {
            "answer": "The biometric information collected for Aadhaar includes fingerprints and facial scans.",
            "latency_seconds": 48.61306380899987,
            "prompt_tokens": 769,
            "output_tokens": 15,
            "total_tokens": 784,
            "total_duration_ns": 48609223975,
            "load_duration_ns": 1144486725,
            "prompt_eval_duration_ns": 81439000,
            "eval_duration_ns": 2639927000,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 100.0,
            "cpu_after_percent": 88.2,
            "memory_before_mb": 32.921875,
            "memory_after_mb": 32.92578125,
            "memory_delta_mb": 0.00390625
          }
        },
        {
          "model": "qwen2.5-coder:1.5b",
          "question_id": 11,
          "question": "What demographic information is collected during enrolment?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": 0.22570209699915722,
            "pages": [
              50,
              10,
              50
            ],
            "distances": [
              0.5529363751411438,
              0.6497888565063477,
              0.6530028581619263
            ],
            "results": [
              {
                "source": "UIAI_1.pdf",
                "page": 50,
                "chunk": "ose. 4. Demo graphic information required for enrolment. \u2014 (1) The f ollowing demogr aphic in formation shall be c ollected fr om all individuals under going enrolment (other than children below five years of age):",
                "distance": 0.5529363751411438
              },
              {
                "source": "UIAI_1.pdf",
                "page": 10,
                "chunk": "trars\u2019 own employees \u2022 Elect ed local body members \u2022 Members of local administrative bodies \u2022 P ostman \u2022 Influencers such as teachers \u2022 Health w orkers \u2022 Doct ors \u2022 Ang anwadis/Asha workers \u2022 Representatives of local NGOs The information captured during Introducer-based Enrolment is: \u2022 Introducer\u2019s name \u2022 Introducer\u2019s Aadhaar number \u2022 One modality of biometric information of the Introducer 2.1.4 Enr olment of Children For HoF based enrolment, the Head of Family has to give biometric confirmation at the time of enrolment.",
                "distance": 0.6497888565063477
              },
              {
                "source": "UIAI_1.pdf",
                "page": 50,
                "chunk": "Unique Identification Authority of India Government of India 50Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 12 AADHAAR (ENROLMENT AND UPDATE) REGULATIONS, 2016 Your enr olment and upda te is g overned b y the Aadhaar (Enr olment and Upda te) R egulations, 2016. R egulations of direct relevance to you are reproduced below for your information: 12.1 CHAP TER II - Resident Enrolment Process 3. Biom etric information required for enrolment. \u2014 (1) The f ollowing bio metric in formation shall be c ollected fr om all individuals under going enrolment (other than children below five years of age): (i) Facial image; (ii) All ten fingerprints; and (iii) Sc ans of both irises. (2) The s tandards f or c ollecting the biome tric in formation shall be as specified b y the Authority f or this purpose. 4. Demo graphic information required for enrolment. \u2014 (1) The f ollowing demogr aphic in formation shall be c ollected fr om all individuals under going enrolment (other than children below five",
                "distance": 0.6530028581619263
              }
            ],
            "error": null
          },
          "context": "\nSource: UIAI_1.pdf\nPage: 50\n\nose. 4. Demo graphic information required for enrolment. \u2014 (1) The f ollowing demogr aphic in formation shall be c ollected fr om all individuals under going enrolment (other than children below five years of age):\n\n\nSource: UIAI_1.pdf\nPage: 10\n\ntrars\u2019 own employees \u2022 Elect ed local body members \u2022 Members of local administrative bodies \u2022 P ostman \u2022 Influencers such as teachers \u2022 Health w orkers \u2022 Doct ors \u2022 Ang anwadis/Asha workers \u2022 Representatives of local NGOs The information captured during Introducer-based Enrolment is: \u2022 Introducer\u2019s name \u2022 Introducer\u2019s Aadhaar number \u2022 One modality of biometric information of the Introducer 2.1.4 Enr olment of Children For HoF based enrolment, the Head of Family has to give biometric confirmation at the time of enrolment.\n\n\nSource: UIAI_1.pdf\nPage: 50\n\nUnique Identification Authority of India Government of India 50Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 12 AADHAAR (ENROLMENT AND UPDATE) REGULATIONS, 2016 Your enr olment and upda te is g overned b y the Aadhaar (Enr olment and Upda te) R egulations, 2016. R egulations of direct relevance to you are reproduced below for your information: 12.1 CHAP TER II - Resident Enrolment Process 3. Biom etric information required for enrolment. \u2014 (1) The f ollowing bio metric in formation shall be c ollected fr om all individuals under going enrolment (other than children below five years of age): (i) Facial image; (ii) All ten fingerprints; and (iii) Sc ans of both irises. (2) The s tandards f or c ollecting the biome tric in formation shall be as specified b y the Authority f or this purpose. 4. Demo graphic information required for enrolment. \u2014 (1) The f ollowing demogr aphic in formation shall be c ollected fr om all individuals under going enrolment (other than children below five\n",
          "generation": {
            "answer": "The demographic information collected during enrolment includes the following:\n\n- Introducer's name\n- Introducer's Aadhaar number\n- One modality of biometric information of the Introducer\n\nPage: 10",
            "latency_seconds": 62.08435785199981,
            "prompt_tokens": 630,
            "output_tokens": 47,
            "total_tokens": 677,
            "total_duration_ns": 62081951647,
            "load_duration_ns": 845275876,
            "prompt_eval_duration_ns": 78823000,
            "eval_duration_ns": 4017239000,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 100.0,
            "cpu_after_percent": 85.0,
            "memory_before_mb": 32.92578125,
            "memory_after_mb": 30.68359375,
            "memory_delta_mb": 0
          }
        },
        {
          "model": "qwen2.5-coder:1.5b",
          "question_id": 12,
          "question": "What happens after Aadhaar enrolment?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": 1.0327643679993344,
            "pages": [
              8,
              7,
              21
            ],
            "distances": [
              0.5121980309486389,
              0.5623500943183899,
              0.5644844770431519
            ],
            "results": [
              {
                "source": "UIAI_1.pdf",
                "page": 8,
                "chunk": "Unique Identification Authority of India Government of India 8Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 2: HOW TO ENROL FOR AADHAAR? Visit Aadhaar Enrolment Centre Fill Aadhaar Enrolment/ Update F orm Check & Confirm All Spellings on screen Submit Valid Give Demographic & Biometric Data You get SMS of Aadhaar generation Documents for Scanning Collect your documents & Enrolment slip To g et Aadhaar , y ou ha ve t o enr oll b y pr oviding minimal demogr aphic and biome tric in formation during the enr olment process, which is totally free of cost. Please note that you need to enroll for Aadhaar only once. 2.1 En rolment Process Please do Check & Confirm all data shown on the resident screen, before the operator submits your Packet",
                "distance": 0.5121980309486389
              },
              {
                "source": "UIAI_1.pdf",
                "page": 7,
                "chunk": "haar enrolment. 1.2.2 Aadh aar for NRIs If y ou are a non-resident Indian (NRI), you can enroll for Aadhaar if you have an Indian Passport. The mandate of 182 days does not apply for NRIs. You can visit an Aadhaar Enrolment Centre and enr oll f or Aadhaar as an NRI. Indian P assport is manda tory as Pr oof of Iden tity (P oI) f or NRIs. The app licant may choose to give any other Indian Proof of Address (PoA) from amongst the documents accepted by UIDAI (see Section 13.1, Annex \u2013 I of this handbook). 1.3 F eatures of Aadhaar 1.3.1 Aadh aar is an identifier Aadhaar is a 12-digit unique ID issued to an individual. Aadhaar use s de mographic in formation (name, da te of birth, g ender and addr ess), phot ograph of the f ace, fing erprints and iris t o ide ntify a r esident. The se it ems of in formation ar e manda tory. In addition, y ou ha ve the op tion of pr oviding y our mobile phone number and email. We recommend that you provide these details also. 1.3.2 Aadh aar is an ID, nothing m",
                "distance": 0.5623500943183899
              },
              {
                "source": "UIAI_1.pdf",
                "page": 21,
                "chunk": "er to track s tatus of y our Aadhaar upda te fr om: h ttps://ssup.uidai. gov.in/checkSSUPStatus/checkupdatestatus. 3.9 P oints to remember for Aadhaar Update at Aadhaar Enrolment Centre 1. An y Aadhaar holder can request for Aadhaar, update 2. Aadhaar upda te r equest r equires authen tication b y the Aadhaar holde r . This authen tication is done e ither as biome tric authen tication a t Aadhaar Enr olment Cen tre or O TP authen tication f or online addr ess upda te. F or childr en be low 5 y ears of ag e, this authen tication is done b y the parent/ guardian whose Aadhaar was linked to the child\u2019s at the time of enrolment 3. In c ase of children below the age of 18 consent of the parent/guardian is collected for updating the Aadhaar . 4. If y ou lose your update slip or do not have your Update Request Number, follow the process to retrieve EID as described in Sec. 2.5.1 5. If your update request gets rejected, you can call 1947 and get the reason for rejection and take corrective mea",
                "distance": 0.5644844770431519
              }
            ],
            "error": null
          },
          "context": "\nSource: UIAI_1.pdf\nPage: 8\n\nUnique Identification Authority of India Government of India 8Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 2: HOW TO ENROL FOR AADHAAR? Visit Aadhaar Enrolment Centre Fill Aadhaar Enrolment/ Update F orm Check & Confirm All Spellings on screen Submit Valid Give Demographic & Biometric Data You get SMS of Aadhaar generation Documents for Scanning Collect your documents & Enrolment slip To g et Aadhaar , y ou ha ve t o enr oll b y pr oviding minimal demogr aphic and biome tric in formation during the enr olment process, which is totally free of cost. Please note that you need to enroll for Aadhaar only once. 2.1 En rolment Process Please do Check & Confirm all data shown on the resident screen, before the operator submits your Packet\n\n\nSource: UIAI_1.pdf\nPage: 7\n\nhaar enrolment. 1.2.2 Aadh aar for NRIs If y ou are a non-resident Indian (NRI), you can enroll for Aadhaar if you have an Indian Passport. The mandate of 182 days does not apply for NRIs. You can visit an Aadhaar Enrolment Centre and enr oll f or Aadhaar as an NRI. Indian P assport is manda tory as Pr oof of Iden tity (P oI) f or NRIs. The app licant may choose to give any other Indian Proof of Address (PoA) from amongst the documents accepted by UIDAI (see Section 13.1, Annex \u2013 I of this handbook). 1.3 F eatures of Aadhaar 1.3.1 Aadh aar is an identifier Aadhaar is a 12-digit unique ID issued to an individual. Aadhaar use s de mographic in formation (name, da te of birth, g ender and addr ess), phot ograph of the f ace, fing erprints and iris t o ide ntify a r esident. The se it ems of in formation ar e manda tory. In addition, y ou ha ve the op tion of pr oviding y our mobile phone number and email. We recommend that you provide these details also. 1.3.2 Aadh aar is an ID, nothing m\n\n\nSource: UIAI_1.pdf\nPage: 21\n\ner to track s tatus of y our Aadhaar upda te fr om: h ttps://ssup.uidai. gov.in/checkSSUPStatus/checkupdatestatus. 3.9 P oints to remember for Aadhaar Update at Aadhaar Enrolment Centre 1. An y Aadhaar holder can request for Aadhaar, update 2. Aadhaar upda te r equest r equires authen tication b y the Aadhaar holde r . This authen tication is done e ither as biome tric authen tication a t Aadhaar Enr olment Cen tre or O TP authen tication f or online addr ess upda te. F or childr en be low 5 y ears of ag e, this authen tication is done b y the parent/ guardian whose Aadhaar was linked to the child\u2019s at the time of enrolment 3. In c ase of children below the age of 18 consent of the parent/guardian is collected for updating the Aadhaar . 4. If y ou lose your update slip or do not have your Update Request Number, follow the process to retrieve EID as described in Sec. 2.5.1 5. If your update request gets rejected, you can call 1947 and get the reason for rejection and take corrective mea\n",
          "generation": {
            "answer": "After Aadhaar enrolment, an individual is issued a unique 12-digit identifier called Aadhaar. The information provided during the enrollment process, including demographic data, photograph of the face, fingerprints, and iris prints, is used to identify the individual. The Aadhaar can be tracked for status updates through a website or app, and it serves as an ID for various government services.",
            "latency_seconds": 71.33433708300072,
            "prompt_tokens": 944,
            "output_tokens": 78,
            "total_tokens": 1022,
            "total_duration_ns": 71331712652,
            "load_duration_ns": 604488548,
            "prompt_eval_duration_ns": 103706000,
            "eval_duration_ns": 8427227999,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 100.0,
            "cpu_after_percent": 82.6,
            "memory_before_mb": 30.68359375,
            "memory_after_mb": 30.703125,
            "memory_delta_mb": 0.01953125
          }
        },
        {
          "model": "qwen2.5-coder:1.5b",
          "question_id": 13,
          "question": "What documents can be used as proof of identity?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": 1.6406583249990945,
            "pages": [
              8,
              3,
              3
            ],
            "distances": [
              0.4320237636566162,
              0.49322202801704407,
              0.49736079573631287
            ],
            "results": [
              {
                "source": "UIAI_2.pdf",
                "page": 8,
                "chunk": "such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Validity period of the Aadhaar",
                "distance": 0.4320237636566162
              },
              {
                "source": "UIAI_2.pdf",
                "page": 3,
                "chunk": "birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Head of Family (HoF) based enrolment is mandatory for children below five years of age ex",
                "distance": 0.49322202801704407
              },
              {
                "source": "UIAI_2.pdf",
                "page": 3,
                "chunk": "List of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan * Proof of Address documents as in the \u201cList III - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar Number of individual eighteen years and above of age\u201d will also be applicable Note: (a) Any document listed in the above tabular statement shall be acceptable only if it meets the following conditions, namely:\u2014 (i) It is currently valid; (ii) The person in respect of whom such document is issued is entitled for the same; (iii) The information contained in the document is verifiable from the source; and (iv) The authority issuing the document has not made any declaration that such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is",
                "distance": 0.49736079573631287
              }
            ],
            "error": null
          },
          "context": "\nSource: UIAI_2.pdf\nPage: 8\n\nsuch document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Validity period of the Aadhaar\n\n\nSource: UIAI_2.pdf\nPage: 3\n\nbirth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Head of Family (HoF) based enrolment is mandatory for children below five years of age ex\n\n\nSource: UIAI_2.pdf\nPage: 3\n\nList of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan * Proof of Address documents as in the \u201cList III - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar Number of individual eighteen years and above of age\u201d will also be applicable Note: (a) Any document listed in the above tabular statement shall be acceptable only if it meets the following conditions, namely:\u2014 (i) It is currently valid; (ii) The person in respect of whom such document is issued is entitled for the same; (iii) The information contained in the document is verifiable from the source; and (iv) The authority issuing the document has not made any declaration that such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is\n",
          "generation": {
            "answer": "The information was not found in the provided Aadhaar Handbook.",
            "latency_seconds": 35.29802724000001,
            "prompt_tokens": 827,
            "output_tokens": 13,
            "total_tokens": 840,
            "total_duration_ns": 35294942835,
            "load_duration_ns": 965637567,
            "prompt_eval_duration_ns": 80445000,
            "eval_duration_ns": 3975375000,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 100.0,
            "cpu_after_percent": 88.2,
            "memory_before_mb": 30.703125,
            "memory_after_mb": 30.1796875,
            "memory_delta_mb": 0
          }
        },
        {
          "model": "qwen2.5-coder:1.5b",
          "question_id": 14,
          "question": "What documents can be used as proof of address?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": 0.3249828730004083,
            "pages": [
              3,
              63,
              13
            ],
            "distances": [
              0.40162307024002075,
              0.4018175005912781,
              0.41209468245506287
            ],
            "results": [
              {
                "source": "UIAI_2.pdf",
                "page": 3,
                "chunk": "List of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan * Proof of Address documents as in the \u201cList III - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar Number of individual eighteen years and above of age\u201d will also be applicable Note: (a) Any document listed in the above tabular statement shall be acceptable only if it meets the following conditions, namely:\u2014 (i) It is currently valid; (ii) The person in respect of whom such document is issued is entitled for the same; (iii) The information contained in the document is verifiable from the source; and (iv) The authority issuing the document has not made any declaration that such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is",
                "distance": 0.40162307024002075
              },
              {
                "source": "UIAI_1.pdf",
                "page": 63,
                "chunk": "Proof of Address) documents containing Name & Address 1. Passport 2. Bank Statement/ Passbook 3. Post Office Account Statement/ Passbook 4. Ration Card 5. Voter ID 6. Driving License 7. Government Photo ID cards/ service photo identity card issued by PSU 8. Electricity Bill (not older than 3 months) 9. Water Bill (not older than 3 months) 10. Telephone Landline Bill (not older than 3 months) 11. Property Tax Receipt (not older than 1 year) 12. Credit Card Statement (not older than 3 months) 13. Insurance Policy 14. Signed Letter having Photo from Bank on letterhead 15. Signed Letter having Photo issued by registered Company on letterhead 16. Signed Letter having Photo issued by Recognized Educational Institution on letterhead or Photo ID having address issued by Recognized Educational Institution 17. NREGS Job Card 18. Arms License 19. Pensioner Card 20. Freedom Fighter Card 21. Kissan Passbook 22. CGHS/ ECHS Card 23. Certificate of Address having photo issued by MP or MLA or MLC or Ga",
                "distance": 0.4018175005912781
              },
              {
                "source": "UIAI_2.pdf",
                "page": 13,
                "chunk": "List of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan * Proof of Address documents as in the above list will also be applicable. Note: (a) Any document listed in the above tabular statement shall be acceptable only if it meets the following conditions, namely: \u2014 (i) It is currently valid (ii) The person in respect of whom such document is issued is entitled for the same; (iii) The information contained in the document is verifiable from the source; and (iv) The authority issuing the document has not made any declaration that such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) A document is accepted as Proof of Relationship (PoR) docume",
                "distance": 0.41209468245506287
              }
            ],
            "error": null
          },
          "context": "\nSource: UIAI_2.pdf\nPage: 3\n\nList of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan * Proof of Address documents as in the \u201cList III - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar Number of individual eighteen years and above of age\u201d will also be applicable Note: (a) Any document listed in the above tabular statement shall be acceptable only if it meets the following conditions, namely:\u2014 (i) It is currently valid; (ii) The person in respect of whom such document is issued is entitled for the same; (iii) The information contained in the document is verifiable from the source; and (iv) The authority issuing the document has not made any declaration that such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is\n\n\nSource: UIAI_1.pdf\nPage: 63\n\nProof of Address) documents containing Name & Address 1. Passport 2. Bank Statement/ Passbook 3. Post Office Account Statement/ Passbook 4. Ration Card 5. Voter ID 6. Driving License 7. Government Photo ID cards/ service photo identity card issued by PSU 8. Electricity Bill (not older than 3 months) 9. Water Bill (not older than 3 months) 10. Telephone Landline Bill (not older than 3 months) 11. Property Tax Receipt (not older than 1 year) 12. Credit Card Statement (not older than 3 months) 13. Insurance Policy 14. Signed Letter having Photo from Bank on letterhead 15. Signed Letter having Photo issued by registered Company on letterhead 16. Signed Letter having Photo issued by Recognized Educational Institution on letterhead or Photo ID having address issued by Recognized Educational Institution 17. NREGS Job Card 18. Arms License 19. Pensioner Card 20. Freedom Fighter Card 21. Kissan Passbook 22. CGHS/ ECHS Card 23. Certificate of Address having photo issued by MP or MLA or MLC or Ga\n\n\nSource: UIAI_2.pdf\nPage: 13\n\nList of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan * Proof of Address documents as in the above list will also be applicable. Note: (a) Any document listed in the above tabular statement shall be acceptable only if it meets the following conditions, namely: \u2014 (i) It is currently valid (ii) The person in respect of whom such document is issued is entitled for the same; (iii) The information contained in the document is verifiable from the source; and (iv) The authority issuing the document has not made any declaration that such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) A document is accepted as Proof of Relationship (PoR) docume\n",
          "generation": {
            "answer": "The information was not found in the provided Aadhaar Handbook.",
            "latency_seconds": 28.40344449300028,
            "prompt_tokens": 872,
            "output_tokens": 13,
            "total_tokens": 885,
            "total_duration_ns": 28400915196,
            "load_duration_ns": 825926100,
            "prompt_eval_duration_ns": 66037000,
            "eval_duration_ns": 1341843000,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 100.0,
            "cpu_after_percent": 94.4,
            "memory_before_mb": 30.1796875,
            "memory_after_mb": 30.1953125,
            "memory_delta_mb": 0.015625
          }
        },
        {
          "model": "qwen2.5-coder:1.5b",
          "question_id": 15,
          "question": "What documents can be used as proof of date of birth?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": 1.344256640999447,
            "pages": [
              13,
              3,
              5
            ],
            "distances": [
              0.4209522008895874,
              0.42837268114089966,
              0.4645431339740753
            ],
            "results": [
              {
                "source": "UIAI_2.pdf",
                "page": 13,
                "chunk": "irth certificate as proof of date of birth b. For Non-Resident Indian (NRI) below 18 years of age: - Aadhaar number holder shall submit birth certificate or Indian Passport as proof of date of birth c. For resident Indians and Non-Resident Indian (NRI) of 18 years and above of age: - Aadhaar number holder shall submit any of the acceptable proof of date of birth documents as specified in the above list (ii) If the Aadhaar number holder had earlier submitted birth certificate as proof of date of birth, the Aadhaar number holder shall submit corrected birth certificate bearing same Birth Registration Number (BRN) (iii) If the Aadhaar number holder had earlier submitted any proof of date of birth document except birth certificate (for e.g. Marksheet, Passport etc.), the Aadhaar number holder shall submit corrected version of the same document or submit a birth certificate (iv) In case of date of birth update of woman who has changed her name post-marriage, proof of date of birth documents",
                "distance": 0.4209522008895874
              },
              {
                "source": "UIAI_2.pdf",
                "page": 3,
                "chunk": "birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Head of Family (HoF) based enrolment is mandatory for children below five years of age ex",
                "distance": 0.42837268114089966
              },
              {
                "source": "UIAI_2.pdf",
                "page": 5,
                "chunk": "tionship or Date of Birth for enrolment for Aadhaar Number of individual eighteen years and above of age\u201d will also be applicable Note: (a) Any document listed in the above tabular statement shall be acceptable only if it meets the following conditions, namely:\u2014 (i) It is currently valid (ii) The person in respect of whom such document is issued is entitled for the same; (iii) The information contained in the document is verifiable from the source; and (iv) The authority issuing the document has not made any declaration that such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the",
                "distance": 0.4645431339740753
              }
            ],
            "error": null
          },
          "context": "\nSource: UIAI_2.pdf\nPage: 13\n\nirth certificate as proof of date of birth b. For Non-Resident Indian (NRI) below 18 years of age: - Aadhaar number holder shall submit birth certificate or Indian Passport as proof of date of birth c. For resident Indians and Non-Resident Indian (NRI) of 18 years and above of age: - Aadhaar number holder shall submit any of the acceptable proof of date of birth documents as specified in the above list (ii) If the Aadhaar number holder had earlier submitted birth certificate as proof of date of birth, the Aadhaar number holder shall submit corrected birth certificate bearing same Birth Registration Number (BRN) (iii) If the Aadhaar number holder had earlier submitted any proof of date of birth document except birth certificate (for e.g. Marksheet, Passport etc.), the Aadhaar number holder shall submit corrected version of the same document or submit a birth certificate (iv) In case of date of birth update of woman who has changed her name post-marriage, proof of date of birth documents\n\n\nSource: UIAI_2.pdf\nPage: 3\n\nbirth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Head of Family (HoF) based enrolment is mandatory for children below five years of age ex\n\n\nSource: UIAI_2.pdf\nPage: 5\n\ntionship or Date of Birth for enrolment for Aadhaar Number of individual eighteen years and above of age\u201d will also be applicable Note: (a) Any document listed in the above tabular statement shall be acceptable only if it meets the following conditions, namely:\u2014 (i) It is currently valid (ii) The person in respect of whom such document is issued is entitled for the same; (iii) The information contained in the document is verifiable from the source; and (iv) The authority issuing the document has not made any declaration that such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the\n",
          "generation": {
            "answer": "The information was not found in the provided Aadhaar Handbook.",
            "latency_seconds": 24.806854945998566,
            "prompt_tokens": 829,
            "output_tokens": 13,
            "total_tokens": 842,
            "total_duration_ns": 24804587796,
            "load_duration_ns": 638828433,
            "prompt_eval_duration_ns": 71041000,
            "eval_duration_ns": 1503340000,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 100.0,
            "cpu_after_percent": 83.3,
            "memory_before_mb": 30.1953125,
            "memory_after_mb": 30.06640625,
            "memory_delta_mb": 0
          }
        },
        {
          "model": "qwen2.5-coder:1.5b",
          "question_id": 16,
          "question": "What is the role of the enrolment operator?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": 0.5161105930001213,
            "pages": [
              10,
              52,
              50
            ],
            "distances": [
              0.7259753942489624,
              0.7478420734405518,
              0.7597264051437378
            ],
            "results": [
              {
                "source": "UIAI_1.pdf",
                "page": 10,
                "chunk": "trars\u2019 own employees \u2022 Elect ed local body members \u2022 Members of local administrative bodies \u2022 P ostman \u2022 Influencers such as teachers \u2022 Health w orkers \u2022 Doct ors \u2022 Ang anwadis/Asha workers \u2022 Representatives of local NGOs The information captured during Introducer-based Enrolment is: \u2022 Introducer\u2019s name \u2022 Introducer\u2019s Aadhaar number \u2022 One modality of biometric information of the Introducer 2.1.4 Enr olment of Children For HoF based enrolment, the Head of Family has to give biometric confirmation at the time of enrolment.",
                "distance": 0.7259753942489624
              },
              {
                "source": "UIAI_1.pdf",
                "page": 52,
                "chunk": "vide f or han dling of such e xceptions in the enrolment and upda te software, and such enr olment shall be carried out as per the procedure as may be specified by the Authority for this purpose. 12.2 CHAP TER IV - Update of Resident Information 16. R equest for update of identity information. \u2014 An Aadhaar number holder ma y seek alt eration of his demogr aphic in formation or biome tric in formation in c ases specified under Section 31 of the Act in acc ordance with update procedure specified in this Chapter . 17. Mand atory update for children. \u2014 The Authority shall r equire the bio metric in formation of childr en t o be upda ted upon a ttaining fiv e y ears of ag e and fift een y ears of ag e in acc ordance with the pr ocedure specified by the Authority. 19. Mode of upda ting residents\u2019 information. \u2014 The pr ocess of upda ting r esidents\u2019 in formation in the CIDR ma y be c arried out thr ough the following modes:\u2014 (a) A t any enrolment centre with the assistance of the operator and",
                "distance": 0.7478420734405518
              },
              {
                "source": "UIAI_1.pdf",
                "page": 50,
                "chunk": "ose. 4. Demo graphic information required for enrolment. \u2014 (1) The f ollowing demogr aphic in formation shall be c ollected fr om all individuals under going enrolment (other than children below five years of age):",
                "distance": 0.7597264051437378
              }
            ],
            "error": null
          },
          "context": "\nSource: UIAI_1.pdf\nPage: 10\n\ntrars\u2019 own employees \u2022 Elect ed local body members \u2022 Members of local administrative bodies \u2022 P ostman \u2022 Influencers such as teachers \u2022 Health w orkers \u2022 Doct ors \u2022 Ang anwadis/Asha workers \u2022 Representatives of local NGOs The information captured during Introducer-based Enrolment is: \u2022 Introducer\u2019s name \u2022 Introducer\u2019s Aadhaar number \u2022 One modality of biometric information of the Introducer 2.1.4 Enr olment of Children For HoF based enrolment, the Head of Family has to give biometric confirmation at the time of enrolment.\n\n\nSource: UIAI_1.pdf\nPage: 52\n\nvide f or han dling of such e xceptions in the enrolment and upda te software, and such enr olment shall be carried out as per the procedure as may be specified by the Authority for this purpose. 12.2 CHAP TER IV - Update of Resident Information 16. R equest for update of identity information. \u2014 An Aadhaar number holder ma y seek alt eration of his demogr aphic in formation or biome tric in formation in c ases specified under Section 31 of the Act in acc ordance with update procedure specified in this Chapter . 17. Mand atory update for children. \u2014 The Authority shall r equire the bio metric in formation of childr en t o be upda ted upon a ttaining fiv e y ears of ag e and fift een y ears of ag e in acc ordance with the pr ocedure specified by the Authority. 19. Mode of upda ting residents\u2019 information. \u2014 The pr ocess of upda ting r esidents\u2019 in formation in the CIDR ma y be c arried out thr ough the following modes:\u2014 (a) A t any enrolment centre with the assistance of the operator and\n\n\nSource: UIAI_1.pdf\nPage: 50\n\nose. 4. Demo graphic information required for enrolment. \u2014 (1) The f ollowing demogr aphic in formation shall be c ollected fr om all individuals under going enrolment (other than children below five years of age):\n",
          "generation": {
            "answer": "The enrolment operator is responsible for assisting with the biometric information collection during the Introducer-based Enrolment process.",
            "latency_seconds": 24.052620547001425,
            "prompt_tokens": 617,
            "output_tokens": 26,
            "total_tokens": 643,
            "total_duration_ns": 24050636893,
            "load_duration_ns": 633814786,
            "prompt_eval_duration_ns": 65307000,
            "eval_duration_ns": 3083259000,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 100.0,
            "cpu_after_percent": 90.3,
            "memory_before_mb": 30.06640625,
            "memory_after_mb": 30.08984375,
            "memory_delta_mb": 0.0234375
          }
        },
        {
          "model": "qwen2.5-coder:1.5b",
          "question_id": 17,
          "question": "What is the role of the verifier?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": 1.3016916630003834,
            "pages": [
              19,
              49,
              15
            ],
            "distances": [
              0.8584055304527283,
              0.9198484420776367,
              0.9262070655822754
            ],
            "results": [
              {
                "source": "UIAI_2.pdf",
                "page": 19,
                "chunk": "he certifier 5. Certifier Type \u2022 Mention the certifier type by tick mark one of box from below categories: \u2023 MP / MLA / MLC / Municipal Councillor \u2023 Gazetted Officer Group \u2018A\u2019/ Employees Provident Fund Organisation (EPFO) Officer \u2023 Tehsildar/ Gazetted Officer Group \u2018B\u2019 \u2023 Gazetted Officer at National AIDS Control Organisation (NACO)/State Health Department / Project Director of the State AIDS Control Society or his nominee \u2023 Head of recognised educational institution (only for the institute students concerned) \u2023 Village Panchayat Head/ President or Mukhiya/ Gaon Bura/ equivalent authority (for rural areas)/ Village Panchayat Secretary/ Village Revenue Officer or equivalent (for rural areas) 6. Checklist for Certifier \u2022 Verify the below checklist by tick mark the boxes: \u2023 No overwriting \u2023 Issue date is filled \u2023 Individual seeking to enrol / Aaadhaar number holder\u2019s signature is available \u2023 Certifier\u2019s details is filled \u2023 Individual seeking to enrol / Aaadhaar number holder\u2019s Photo is cro",
                "distance": 0.8584055304527283
              },
              {
                "source": "UIAI_1.pdf",
                "page": 49,
                "chunk": "Unique Identification Authority of India Government of India 49 Aadhaar Handbook for Residents 2021-Ver.2.0 11.1 R esponsibilities of UIDAI UID AI is r esponsible f or Aadhaar enr olment and authen tication under the Aadhaar Act 2016. The responsibilities include: \u2022 Operation and management of all stages of Aadhaar life cycle \u2022 P olicy development \u2022 Pr ocedure and system for issuing Aadhaar numbers to individuals \u2022 Authentication performance To download a copy of The Aadhaar Act 2016 SCAN",
                "distance": 0.9198484420776367
              },
              {
                "source": "UIAI_2.pdf",
                "page": 15,
                "chunk": "y above mentioned details of the Individual seeking to enrol /Aadhaar number holder and i am a.... (Tick appropriate box below) *To be used as Proof of Identify (PoI) only in specific cases as mentioned in the list of applicable supporting documents. CERTIFIER\u2019S DETAILS (TO BE FILLED BY THE CERTIFIER ONLY) No overwriting Issue date is filled Resident\u2019s signature Certifier\u2019s details Resident\u2019s Photo is cross signed and cross stamped (paper to photo or photo to paper) CHECKLIST FOR CERTIFIER Signature & Stamp of ther Certifier",
                "distance": 0.9262070655822754
              }
            ],
            "error": null
          },
          "context": "\nSource: UIAI_2.pdf\nPage: 19\n\nhe certifier 5. Certifier Type \u2022 Mention the certifier type by tick mark one of box from below categories: \u2023 MP / MLA / MLC / Municipal Councillor \u2023 Gazetted Officer Group \u2018A\u2019/ Employees Provident Fund Organisation (EPFO) Officer \u2023 Tehsildar/ Gazetted Officer Group \u2018B\u2019 \u2023 Gazetted Officer at National AIDS Control Organisation (NACO)/State Health Department / Project Director of the State AIDS Control Society or his nominee \u2023 Head of recognised educational institution (only for the institute students concerned) \u2023 Village Panchayat Head/ President or Mukhiya/ Gaon Bura/ equivalent authority (for rural areas)/ Village Panchayat Secretary/ Village Revenue Officer or equivalent (for rural areas) 6. Checklist for Certifier \u2022 Verify the below checklist by tick mark the boxes: \u2023 No overwriting \u2023 Issue date is filled \u2023 Individual seeking to enrol / Aaadhaar number holder\u2019s signature is available \u2023 Certifier\u2019s details is filled \u2023 Individual seeking to enrol / Aaadhaar number holder\u2019s Photo is cro\n\n\nSource: UIAI_1.pdf\nPage: 49\n\nUnique Identification Authority of India Government of India 49 Aadhaar Handbook for Residents 2021-Ver.2.0 11.1 R esponsibilities of UIDAI UID AI is r esponsible f or Aadhaar enr olment and authen tication under the Aadhaar Act 2016. The responsibilities include: \u2022 Operation and management of all stages of Aadhaar life cycle \u2022 P olicy development \u2022 Pr ocedure and system for issuing Aadhaar numbers to individuals \u2022 Authentication performance To download a copy of The Aadhaar Act 2016 SCAN\n\n\nSource: UIAI_2.pdf\nPage: 15\n\ny above mentioned details of the Individual seeking to enrol /Aadhaar number holder and i am a.... (Tick appropriate box below) *To be used as Proof of Identify (PoI) only in specific cases as mentioned in the list of applicable supporting documents. CERTIFIER\u2019S DETAILS (TO BE FILLED BY THE CERTIFIER ONLY) No overwriting Issue date is filled Resident\u2019s signature Certifier\u2019s details Resident\u2019s Photo is cross signed and cross stamped (paper to photo or photo to paper) CHECKLIST FOR CERTIFIER Signature & Stamp of ther Certifier\n",
          "generation": {
            "answer": "The role of the verifier is to verify the information provided by the certifier according to the checklist.",
            "latency_seconds": 19.889450803999353,
            "prompt_tokens": 650,
            "output_tokens": 21,
            "total_tokens": 671,
            "total_duration_ns": 19877839199,
            "load_duration_ns": 586577781,
            "prompt_eval_duration_ns": 97390000,
            "eval_duration_ns": 1891181000,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 100.0,
            "cpu_after_percent": 90.0,
            "memory_before_mb": 30.08984375,
            "memory_after_mb": 30.1015625,
            "memory_delta_mb": 0.01171875
          }
        },
        {
          "model": "qwen2.5-coder:1.5b",
          "question_id": 18,
          "question": "How is an Aadhaar number generated?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": 0.18475831499927153,
            "pages": [
              32,
              6,
              7
            ],
            "distances": [
              0.46779030561447144,
              0.47015380859375,
              0.4744594693183899
            ],
            "results": [
              {
                "source": "UIAI_1.pdf",
                "page": 32,
                "chunk": "Unique Identification Authority of India Government of India 32Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 7: VERIFICATION OF AADHAAR Not every 12 digit number is Aadhaar Verify Aadhaar Online To watch tutorial on Verify Aadhaar Service SCAN 7.1 V erify any Aadhaar Online An y Aadhaar number c an be v erified onli ne fr om uidai. gov. in. Y ou c an use this ser vice t o check the authen ticity of an y Aadhaar number tha t is presented to you. For the entered Aadhaar number, you get the following details of the Aadhaar holder: \u2022 If the Aadhaar number e xists \u2022 Ag e band \u2022 Gender \u2022 St ate of residence \u2022 Mobile Number (in mask ed form showing only last 4 digits) Be sides, a service provider can also verify the Aadhaar presented by a person using following services: 1. Online from: https://resident.uidai.gov.in/verify 2. Fr om mAadhaar App 3. Sc an the QR Code on presented Aadhaar using the Aadhaar QR Code Scanner App or mAadhaar App",
                "distance": 0.46779030561447144
              },
              {
                "source": "UIAI_1.pdf",
                "page": 6,
                "chunk": "one to visit the relevant webpage or watch a video tutorial on the mentioned service. Le t\u2019s begin y our Aadhaar journe y with a sneak peek in to the w orld of Aadhaar , the r elated pr ocesses, the ser vices available for you and the power of this 12-digit number that is unique to you. 1.1 Aadhaar Ov erview Aadhaar is a 12-digit unique iden tification number issue b y the Unique Identification Authority of India (UIDAI) t o the r esidents of India a fter sa tisfying the v erification pr ocess (described in Section 2) laid down by the Authority.",
                "distance": 0.47015380859375
              },
              {
                "source": "UIAI_1.pdf",
                "page": 7,
                "chunk": "Unique Identification Authority of India Government of India 7 Aadhaar Handbook for Residents 2021-Ver.2.0 1.2 Who c an get Aadhaar? An y individual in India, irr espective of ag e and g ender, who is a r esident of India, or a non r esident Indian (NRI), can enroll to obtain Aadhaar number. For an individual, only one Aadhaar number is generated, as the uniqueness is achieved through the process of demographic and biometric de-duplication. 1.2.1. Aadh aar for residents of India Y ou ar e eligible f or Aadhaar Enr olment if y ou ar e a r esident of India. This, b y de finition, means tha t y ou ha ve r esided in India f or a period or periods amoun ting in all t o one hundr ed and eigh ty-two days (182 days) or more in the twelve months immediately preceding the date of application for Aadhaar enrolment. 1.2.2 Aadh aar for NRIs If y ou are a non-resident Indian (NRI), you can enroll for Aadhaar if you have an Indian Passport. The mandate of 182 days does not apply for NRIs. You can vis",
                "distance": 0.4744594693183899
              }
            ],
            "error": null
          },
          "context": "\nSource: UIAI_1.pdf\nPage: 32\n\nUnique Identification Authority of India Government of India 32Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 7: VERIFICATION OF AADHAAR Not every 12 digit number is Aadhaar Verify Aadhaar Online To watch tutorial on Verify Aadhaar Service SCAN 7.1 V erify any Aadhaar Online An y Aadhaar number c an be v erified onli ne fr om uidai. gov. in. Y ou c an use this ser vice t o check the authen ticity of an y Aadhaar number tha t is presented to you. For the entered Aadhaar number, you get the following details of the Aadhaar holder: \u2022 If the Aadhaar number e xists \u2022 Ag e band \u2022 Gender \u2022 St ate of residence \u2022 Mobile Number (in mask ed form showing only last 4 digits) Be sides, a service provider can also verify the Aadhaar presented by a person using following services: 1. Online from: https://resident.uidai.gov.in/verify 2. Fr om mAadhaar App 3. Sc an the QR Code on presented Aadhaar using the Aadhaar QR Code Scanner App or mAadhaar App\n\n\nSource: UIAI_1.pdf\nPage: 6\n\none to visit the relevant webpage or watch a video tutorial on the mentioned service. Le t\u2019s begin y our Aadhaar journe y with a sneak peek in to the w orld of Aadhaar , the r elated pr ocesses, the ser vices available for you and the power of this 12-digit number that is unique to you. 1.1 Aadhaar Ov erview Aadhaar is a 12-digit unique iden tification number issue b y the Unique Identification Authority of India (UIDAI) t o the r esidents of India a fter sa tisfying the v erification pr ocess (described in Section 2) laid down by the Authority.\n\n\nSource: UIAI_1.pdf\nPage: 7\n\nUnique Identification Authority of India Government of India 7 Aadhaar Handbook for Residents 2021-Ver.2.0 1.2 Who c an get Aadhaar? An y individual in India, irr espective of ag e and g ender, who is a r esident of India, or a non r esident Indian (NRI), can enroll to obtain Aadhaar number. For an individual, only one Aadhaar number is generated, as the uniqueness is achieved through the process of demographic and biometric de-duplication. 1.2.1. Aadh aar for residents of India Y ou ar e eligible f or Aadhaar Enr olment if y ou ar e a r esident of India. This, b y de finition, means tha t y ou ha ve r esided in India f or a period or periods amoun ting in all t o one hundr ed and eigh ty-two days (182 days) or more in the twelve months immediately preceding the date of application for Aadhaar enrolment. 1.2.2 Aadh aar for NRIs If y ou are a non-resident Indian (NRI), you can enroll for Aadhaar if you have an Indian Passport. The mandate of 182 days does not apply for NRIs. You can vis\n",
          "generation": {
            "answer": "An Aadhaar number is generated through the process of demographic and biometric de-duplication.",
            "latency_seconds": 9.828856145000827,
            "prompt_tokens": 852,
            "output_tokens": 20,
            "total_tokens": 872,
            "total_duration_ns": 9825773266,
            "load_duration_ns": 591160985,
            "prompt_eval_duration_ns": 71601000,
            "eval_duration_ns": 2824880000,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 96.7,
            "cpu_after_percent": 89.7,
            "memory_before_mb": 30.1015625,
            "memory_after_mb": 30.11328125,
            "memory_delta_mb": 0.01171875
          }
        },
        {
          "model": "qwen2.5-coder:1.5b",
          "question_id": 19,
          "question": "What should a resident do if there is an error in their Aadhaar information?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": 1.0981502260001434,
            "pages": [
              20,
              25,
              5
            ],
            "distances": [
              0.4807325005531311,
              0.4891921877861023,
              0.498706579208374
            ],
            "results": [
              {
                "source": "UIAI_1.pdf",
                "page": 20,
                "chunk": "lds (name, gender and date of birth) in y our Aadhaar again (beyond the permissible limit), you need to: 1. Visit an y Aadhaar Enr olment Cen tre (with v alid supporting docume nt f or N ame & Da te of Birth upda te) 2. Place an up date request 3. Send the latest URN (Update Request Number) to Aadhaar help centre by calling 1947 or via email to help@uidai.gov.in and request for \u2018exception update\u2019 The c ase is then assigne d t o the UID AI\u2019s R egional Office tha t handles y our r egion f or due dilig ence. Once verified, your update request will be processed and the outcome communicated to you. 3.7 Upda te in case of Aadhaar Deactivation Y our Aadhaar data is subject to periodic quality checks. During such quality checks by UIDAI, if any discr epancy is f ound in the supporting documen ts or c aptured biome tric da ta of a r esident, his/her Aadhaar is deactiv ated t emporarily and the Aadhaar holder is duly notified of this. If y our Aadhaar gets suspended, you would not be able to ava",
                "distance": 0.4807325005531311
              },
              {
                "source": "UIAI_1.pdf",
                "page": 25,
                "chunk": "Unique Identification Authority of India Government of India 25 Aadhaar Handbook for Residents 2021-Ver.2.0 To file a complaint SCAN can download and print the Aadhaar Enrolment/Update from the link below https://www. uidai.gov.in/images/commdoc/valid_documents_list.pdf. R esident c an bring the filled f orm t o an y centre to avoid mistakes 5.2 Ho w to complaint if the centre charges you extra or if you are not satisfied with the service If the centre charged you more than the prescribed service charge men tioned abo ve, y ou c an file a c omplaint in f ollowing w ays: \u2022 Call 1947 and r egister a complaint \u2022 Email the cen tre details along with your URN and contact details to help@uidai.gov.in \u2022 File a c omplaint online fr om: h ttps://resident.uidai. gov.in/file-complaint \u2022 R esident can complaint with the concerned Registrar, details of the registrar are available at your centre.",
                "distance": 0.4891921877861023
              },
              {
                "source": "UIAI_1.pdf",
                "page": 5,
                "chunk": "Unique Identification Authority of India Government of India 5 Aadhaar Handbook for Residents 2021-Ver.2.0 9.3 How you can further protect your Aadhaar Information 39 SE CTION 10: GRIEVANCE HANDLING 40 10.1 Aadhaar Sampa rk Kendra - Helpline 1947 40 10.2 Help via Email 41 10.3 Aadhaar W ebsite 41 10.4 Aadhaar Cha tbot 42 10.5 So cial Media 43 10.5.1 Official Social Media Profiles: 43 10.5.2 Beware of Fake Profiles/ User Accounts 45 10.6 Aadhaar Regional Offices 46 SE CTION 11: THE AADHAAR ACT 2016 48 11.1 Responsibilities of UIDAI 49 SE CTION 12: AADHAAR ( ENROLMENT AN D UPD ATE) RE GULATIONS, 2 016 50 12.1 CHAP TER II - Resident Enrolment Process 50 12.2 CHAPTER IV - Update of Resident Information 52 12.3 CHAPTER VI - Omission or Deactivation of Aadhaar Number and Identity Information 53 SE CTION 13: APPENDIX 56 13.1 Annexure I - List of valid supporting documents 56 13.2 Annexure II \u2013 Format for Certificate (For Aadhaar Enrolment/ Update) 58 13.3 Annexure III \u2013 How to fill (Certifica",
                "distance": 0.498706579208374
              }
            ],
            "error": null
          },
          "context": "\nSource: UIAI_1.pdf\nPage: 20\n\nlds (name, gender and date of birth) in y our Aadhaar again (beyond the permissible limit), you need to: 1. Visit an y Aadhaar Enr olment Cen tre (with v alid supporting docume nt f or N ame & Da te of Birth upda te) 2. Place an up date request 3. Send the latest URN (Update Request Number) to Aadhaar help centre by calling 1947 or via email to help@uidai.gov.in and request for \u2018exception update\u2019 The c ase is then assigne d t o the UID AI\u2019s R egional Office tha t handles y our r egion f or due dilig ence. Once verified, your update request will be processed and the outcome communicated to you. 3.7 Upda te in case of Aadhaar Deactivation Y our Aadhaar data is subject to periodic quality checks. During such quality checks by UIDAI, if any discr epancy is f ound in the supporting documen ts or c aptured biome tric da ta of a r esident, his/her Aadhaar is deactiv ated t emporarily and the Aadhaar holder is duly notified of this. If y our Aadhaar gets suspended, you would not be able to ava\n\n\nSource: UIAI_1.pdf\nPage: 25\n\nUnique Identification Authority of India Government of India 25 Aadhaar Handbook for Residents 2021-Ver.2.0 To file a complaint SCAN can download and print the Aadhaar Enrolment/Update from the link below https://www. uidai.gov.in/images/commdoc/valid_documents_list.pdf. R esident c an bring the filled f orm t o an y centre to avoid mistakes 5.2 Ho w to complaint if the centre charges you extra or if you are not satisfied with the service If the centre charged you more than the prescribed service charge men tioned abo ve, y ou c an file a c omplaint in f ollowing w ays: \u2022 Call 1947 and r egister a complaint \u2022 Email the cen tre details along with your URN and contact details to help@uidai.gov.in \u2022 File a c omplaint online fr om: h ttps://resident.uidai. gov.in/file-complaint \u2022 R esident can complaint with the concerned Registrar, details of the registrar are available at your centre.\n\n\nSource: UIAI_1.pdf\nPage: 5\n\nUnique Identification Authority of India Government of India 5 Aadhaar Handbook for Residents 2021-Ver.2.0 9.3 How you can further protect your Aadhaar Information 39 SE CTION 10: GRIEVANCE HANDLING 40 10.1 Aadhaar Sampa rk Kendra - Helpline 1947 40 10.2 Help via Email 41 10.3 Aadhaar W ebsite 41 10.4 Aadhaar Cha tbot 42 10.5 So cial Media 43 10.5.1 Official Social Media Profiles: 43 10.5.2 Beware of Fake Profiles/ User Accounts 45 10.6 Aadhaar Regional Offices 46 SE CTION 11: THE AADHAAR ACT 2016 48 11.1 Responsibilities of UIDAI 49 SE CTION 12: AADHAAR ( ENROLMENT AN D UPD ATE) RE GULATIONS, 2 016 50 12.1 CHAP TER II - Resident Enrolment Process 50 12.2 CHAPTER IV - Update of Resident Information 52 12.3 CHAPTER VI - Omission or Deactivation of Aadhaar Number and Identity Information 53 SE CTION 13: APPENDIX 56 13.1 Annexure I - List of valid supporting documents 56 13.2 Annexure II \u2013 Format for Certificate (For Aadhaar Enrolment/ Update) 58 13.3 Annexure III \u2013 How to fill (Certifica\n",
          "generation": {
            "answer": "If there is an error in your Aadhaar information, you should visit an Aadhaar Enrolment Centre with valid supporting documents for Name and Date of Birth. Place an update request, send the latest URN to the Aadhaar help centre by calling 1947 or via email to help@uidai.gov.in, and request for 'exception update'. The case is then assigned to the UIDAI's Regional Office handling your region for due diligence. Once verified, your update request will be processed and the outcome communicated to you.",
            "latency_seconds": 34.44673827900078,
            "prompt_tokens": 1051,
            "output_tokens": 109,
            "total_tokens": 1160,
            "total_duration_ns": 34444978572,
            "load_duration_ns": 617766413,
            "prompt_eval_duration_ns": 73698000,
            "eval_duration_ns": 9052099000,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 89.7,
            "cpu_after_percent": 70.8,
            "memory_before_mb": 30.11328125,
            "memory_after_mb": 30.1328125,
            "memory_delta_mb": 0.01953125
          }
        },
        {
          "model": "qwen2.5-coder:1.5b",
          "question_id": 20,
          "question": "What is demographic authentication?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": 0.537372549999418,
            "pages": [
              36,
              33,
              20
            ],
            "distances": [
              0.6933571100234985,
              0.7304410338401794,
              0.7322732210159302
            ],
            "results": [
              {
                "source": "UIAI_1.pdf",
                "page": 36,
                "chunk": "Unique Identification Authority of India Government of India 36Aadhaar Handbook for Residents 2021-Ver.2.0 You will receive any Aadhaar-based credits in only one account that you have mapped to the NPCI mapper. \u2022 Upda te Demographic Online: If you have your Aadhaar registered mobile number, you can place an online demographic details update request using the SSUP (self- service update portal) of Aadhaar. This service requires mandatory OTP authentication \u2022 Aadhaar Bank Linking Status: You can check your Aadhaar and Bank Account Linking Status in NPCI mapper using this service. This service requires mandatory OTP authentication. \u2022 Aadhaar Update History: You can use this service to get a chronological history of all updates done in your Aadhaar. The OTP for this service will be sent to your registered mobile number \u2022 V erify Email/ Mobile Number: You can use this service to verify their email or mobile number in your Aadhaar. The OTP for this service will be sent to your registered mobi",
                "distance": 0.6933571100234985
              },
              {
                "source": "UIAI_1.pdf",
                "page": 33,
                "chunk": "Unique Identification Authority of India Government of India 33 Aadhaar Handbook for Residents 2021-Ver.2.0 7.2 Secur e QR Code on Aadhaar Th e Aadhaar letter, Aadhaar PVC Card and eAadhaar contain a digit ally signed secure QR code that has demographic details of the Aadhaar holder with photograph. This QR Code can be used to verify the identity of the Aadhaar holder . Th e service provider needs to use Aadhaar QR Code Scanner App (also available in mAadhaar) to scan the Secure QR Code on the presented Aadhaar. Aadhaar Offline Verification made easy using Secure QR Code To read more about Secure QR Code SCAN To watch tutorial on the Secure QR Code SCAN",
                "distance": 0.7304410338401794
              },
              {
                "source": "UIAI_1.pdf",
                "page": 20,
                "chunk": "Unique Identification Authority of India Government of India 20Aadhaar Handbook for Residents 2021-Ver.2.0 3.5 Li mits on number of updates As per the update policy of UIDAI, the following limits have been set for update of demographic information in their Aadhaar: \u2022 Name \u2013 Can be updated twice \u2022 Gender \u2013 Once \u2022 Date of Birth \u2013 Once Th e pr ocess f or the abo ve upda tes within the permissible limits is same as described in Section 3.1 abo ve. An y other in formation in y our Aadhaar c an be upda ted as and when r equired. Ther e is no limit on the number of updates for any other demographic information \u2013 address, email ID, mobile number; or biometrics \u2013 photograph, fingerprints, iris scans. 3.6 Ex ception Process for Aadhaar Update If for any reason, you need to update the above three fields (name, gender and date of birth) in y our Aadhaar again (beyond the permissible limit), you need to: 1. Visit an y Aadhaar Enr olment Cen tre (with v alid supporting docume nt f or N ame & Da te o",
                "distance": 0.7322732210159302
              }
            ],
            "error": null
          },
          "context": "\nSource: UIAI_1.pdf\nPage: 36\n\nUnique Identification Authority of India Government of India 36Aadhaar Handbook for Residents 2021-Ver.2.0 You will receive any Aadhaar-based credits in only one account that you have mapped to the NPCI mapper. \u2022 Upda te Demographic Online: If you have your Aadhaar registered mobile number, you can place an online demographic details update request using the SSUP (self- service update portal) of Aadhaar. This service requires mandatory OTP authentication \u2022 Aadhaar Bank Linking Status: You can check your Aadhaar and Bank Account Linking Status in NPCI mapper using this service. This service requires mandatory OTP authentication. \u2022 Aadhaar Update History: You can use this service to get a chronological history of all updates done in your Aadhaar. The OTP for this service will be sent to your registered mobile number \u2022 V erify Email/ Mobile Number: You can use this service to verify their email or mobile number in your Aadhaar. The OTP for this service will be sent to your registered mobi\n\n\nSource: UIAI_1.pdf\nPage: 33\n\nUnique Identification Authority of India Government of India 33 Aadhaar Handbook for Residents 2021-Ver.2.0 7.2 Secur e QR Code on Aadhaar Th e Aadhaar letter, Aadhaar PVC Card and eAadhaar contain a digit ally signed secure QR code that has demographic details of the Aadhaar holder with photograph. This QR Code can be used to verify the identity of the Aadhaar holder . Th e service provider needs to use Aadhaar QR Code Scanner App (also available in mAadhaar) to scan the Secure QR Code on the presented Aadhaar. Aadhaar Offline Verification made easy using Secure QR Code To read more about Secure QR Code SCAN To watch tutorial on the Secure QR Code SCAN\n\n\nSource: UIAI_1.pdf\nPage: 20\n\nUnique Identification Authority of India Government of India 20Aadhaar Handbook for Residents 2021-Ver.2.0 3.5 Li mits on number of updates As per the update policy of UIDAI, the following limits have been set for update of demographic information in their Aadhaar: \u2022 Name \u2013 Can be updated twice \u2022 Gender \u2013 Once \u2022 Date of Birth \u2013 Once Th e pr ocess f or the abo ve upda tes within the permissible limits is same as described in Section 3.1 abo ve. An y other in formation in y our Aadhaar c an be upda ted as and when r equired. Ther e is no limit on the number of updates for any other demographic information \u2013 address, email ID, mobile number; or biometrics \u2013 photograph, fingerprints, iris scans. 3.6 Ex ception Process for Aadhaar Update If for any reason, you need to update the above three fields (name, gender and date of birth) in y our Aadhaar again (beyond the permissible limit), you need to: 1. Visit an y Aadhaar Enr olment Cen tre (with v alid supporting docume nt f or N ame & Da te o\n",
          "generation": {
            "answer": "Demographic authentication involves verifying the identity of a person using their Aadhaar number and other demographic information such as name, gender, date of birth. This process typically requires a one-time password (OTP) to be sent to the registered mobile number associated with the Aadhaar. The OTP is used to confirm that the user is who they claim to be before accessing any services or accounts linked to their Aadhaar.",
            "latency_seconds": 20.58373333599957,
            "prompt_tokens": 796,
            "output_tokens": 82,
            "total_tokens": 878,
            "total_duration_ns": 20581678608,
            "load_duration_ns": 618216286,
            "prompt_eval_duration_ns": 67215000,
            "eval_duration_ns": 6008940000,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 96.6,
            "cpu_after_percent": 82.8,
            "memory_before_mb": 30.1328125,
            "memory_after_mb": 30.1484375,
            "memory_delta_mb": 0.015625
          }
        },
        {
          "model": "qwen2.5-coder:1.5b",
          "question_id": 21,
          "question": "What is biometric authentication?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": 0.2894916360000934,
            "pages": [
              20,
              64,
              52
            ],
            "distances": [
              0.6603267192840576,
              0.6823380589485168,
              0.6998177766799927
            ],
            "results": [
              {
                "source": "UIAI_1.pdf",
                "page": 20,
                "chunk": "r c aptured biome tric da ta of a r esident, his/her Aadhaar is deactiv ated t emporarily and the Aadhaar holder is duly notified of this. If y our Aadhaar gets suspended, you would not be able to avail any service based on Aadhaar OTP/ biometric authentication. In such c ases, the Aadhaar holder needs to follow the below steps: 1. R efer t o the e mail/ SMS/ le tter b y UID AI or c all 1947 t o kno w sub sequent c ourse of action. 2. If the deactiv ation is due t o biome trics r elated r eason, visit an y Aadhaar Enr olment Cen tre and update your biometrics. Name can be updated TWICE Gender can be updated only ONCE Want to update Date of Birth, Name and Gender in Aadhaar? Date of birth can be updated only ONCE NOTE THE FOLLOWING",
                "distance": 0.6603267192840576
              },
              {
                "source": "UIAI_1.pdf",
                "page": 64,
                "chunk": "Unique Identification Authority of India Government of India 64Aadhaar Handbook for Residents 2021-Ver.2.0 Verify Aadhaar SCAN Lock/ Unlock Aadhaar SCAN Check your Aadhaar Update History SCAN Update Address Without Documents SCAN Secure QR Code SCAN Locate Aadhaar Enrolment Centre SCAN Verify Digital Signature SCAN Get back your lost Aadhaar number or Enrolment ID SCAN Check status of your Aadhaar enrolment or update request SCAN mAadhaar App SCAN Download Aadhaar SCAN Generate/ Retrieve VID SCAN Check your Aadhaar Authentication History SCAN Check Status of your online update request SCAN Online Appointment Booking SCAN Update Address Online SCAN What is EID SCAN Lock/ Unlock Biometrics SCAN Order Aadhaar Reprint SCAN Aadhaar Chatbot SCAN 13.5 Aadhaar T utorial Videos",
                "distance": 0.6823380589485168
              },
              {
                "source": "UIAI_1.pdf",
                "page": 52,
                "chunk": "Unique Identification Authority of India Government of India 52Aadhaar Handbook for Residents 2021-Ver.2.0 the r elationship be tween the link ed par ent/guardian and the child shall be c ollected a t the time of enr olment. Only those childr en c an be enr olled based on the r elationship documen t (P oR), whose names ar e r ecorded in the r elationship documen t. 6. Enr olment of residents with biometric exceptions. \u2014 (1) F or r esidents who ar e unable t o pr ovide fing erprints, o wing t o r easons such as injur y, de formities, amput ation of the fing ers/ hands or an y other r elevant r eason, only iris scans of such residents will be collected. (2) F or r esidents who ar e unable t o pr ovide an y biome tric in formation c ontemplated b y these r egulations, the Authority shall pr ovide f or han dling of such e xceptions in the enrolment and upda te software, and such enr olment shall be carried out as per the procedure as may be specified by the Authority for this purpose. 12.2",
                "distance": 0.6998177766799927
              }
            ],
            "error": null
          },
          "context": "\nSource: UIAI_1.pdf\nPage: 20\n\nr c aptured biome tric da ta of a r esident, his/her Aadhaar is deactiv ated t emporarily and the Aadhaar holder is duly notified of this. If y our Aadhaar gets suspended, you would not be able to avail any service based on Aadhaar OTP/ biometric authentication. In such c ases, the Aadhaar holder needs to follow the below steps: 1. R efer t o the e mail/ SMS/ le tter b y UID AI or c all 1947 t o kno w sub sequent c ourse of action. 2. If the deactiv ation is due t o biome trics r elated r eason, visit an y Aadhaar Enr olment Cen tre and update your biometrics. Name can be updated TWICE Gender can be updated only ONCE Want to update Date of Birth, Name and Gender in Aadhaar? Date of birth can be updated only ONCE NOTE THE FOLLOWING\n\n\nSource: UIAI_1.pdf\nPage: 64\n\nUnique Identification Authority of India Government of India 64Aadhaar Handbook for Residents 2021-Ver.2.0 Verify Aadhaar SCAN Lock/ Unlock Aadhaar SCAN Check your Aadhaar Update History SCAN Update Address Without Documents SCAN Secure QR Code SCAN Locate Aadhaar Enrolment Centre SCAN Verify Digital Signature SCAN Get back your lost Aadhaar number or Enrolment ID SCAN Check status of your Aadhaar enrolment or update request SCAN mAadhaar App SCAN Download Aadhaar SCAN Generate/ Retrieve VID SCAN Check your Aadhaar Authentication History SCAN Check Status of your online update request SCAN Online Appointment Booking SCAN Update Address Online SCAN What is EID SCAN Lock/ Unlock Biometrics SCAN Order Aadhaar Reprint SCAN Aadhaar Chatbot SCAN 13.5 Aadhaar T utorial Videos\n\n\nSource: UIAI_1.pdf\nPage: 52\n\nUnique Identification Authority of India Government of India 52Aadhaar Handbook for Residents 2021-Ver.2.0 the r elationship be tween the link ed par ent/guardian and the child shall be c ollected a t the time of enr olment. Only those childr en c an be enr olled based on the r elationship documen t (P oR), whose names ar e r ecorded in the r elationship documen t. 6. Enr olment of residents with biometric exceptions. \u2014 (1) F or r esidents who ar e unable t o pr ovide fing erprints, o wing t o r easons such as injur y, de formities, amput ation of the fing ers/ hands or an y other r elevant r eason, only iris scans of such residents will be collected. (2) F or r esidents who ar e unable t o pr ovide an y biome tric in formation c ontemplated b y these r egulations, the Authority shall pr ovide f or han dling of such e xceptions in the enrolment and upda te software, and such enr olment shall be carried out as per the procedure as may be specified by the Authority for this purpose. 12.2\n",
          "generation": {
            "answer": "Biometric authentication involves using unique physical characteristics or patterns of a person's body to verify their identity. This can include fingerprints, facial recognition, iris scans, and voice recognition. The Aadhaar Handbook provides detailed information on the various methods used for biometric authentication in India, including fingerprint scanning, iris recognition, and facial recognition.",
            "latency_seconds": 13.83857926500059,
            "prompt_tokens": 825,
            "output_tokens": 66,
            "total_tokens": 891,
            "total_duration_ns": 13834154441,
            "load_duration_ns": 695498129,
            "prompt_eval_duration_ns": 69623000,
            "eval_duration_ns": 5048708000,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 96.8,
            "cpu_after_percent": 79.3,
            "memory_before_mb": 30.1484375,
            "memory_after_mb": 30.16015625,
            "memory_delta_mb": 0.01171875
          }
        },
        {
          "model": "qwen2.5-coder:1.5b",
          "question_id": 22,
          "question": "What is Aadhaar authentication?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": 0.29340853500070807,
            "pages": [
              33,
              37,
              4
            ],
            "distances": [
              0.342551589012146,
              0.3674051761627197,
              0.38354194164276123
            ],
            "results": [
              {
                "source": "UIAI_1.pdf",
                "page": 33,
                "chunk": "Unique Identification Authority of India Government of India 33 Aadhaar Handbook for Residents 2021-Ver.2.0 7.2 Secur e QR Code on Aadhaar Th e Aadhaar letter, Aadhaar PVC Card and eAadhaar contain a digit ally signed secure QR code that has demographic details of the Aadhaar holder with photograph. This QR Code can be used to verify the identity of the Aadhaar holder . Th e service provider needs to use Aadhaar QR Code Scanner App (also available in mAadhaar) to scan the Secure QR Code on the presented Aadhaar. Aadhaar Offline Verification made easy using Secure QR Code To read more about Secure QR Code SCAN To watch tutorial on the Secure QR Code SCAN",
                "distance": 0.342551589012146
              },
              {
                "source": "UIAI_1.pdf",
                "page": 37,
                "chunk": "Unique Identification Authority of India Government of India 37 Aadhaar Handbook for Residents 2021-Ver.2.0 To read FAQs SCAN \u2022 Aadhaar Authentication History: Using this service, you can g et de tails of authen tication perf ormed b y y ou in pas t 6 mon ths. The OTP for this service will be sent to your registered mobile number. \u2022 Offline eKYC Service: Using this service, you can generate your digitally signed Aadhaar details that you may use for KYC purposes. To know more about Aadhaar Authentication History SCAN To know more about Aadhaar Paperless Offline eKYC: SCAN 8.3 Fr equently Asked Questions UID AI also has e xtensive F AQs section on the w ebsite and mAadhaar app to help residents understand Aadhaar process, services and products.",
                "distance": 0.3674051761627197
              },
              {
                "source": "UIAI_1.pdf",
                "page": 4,
                "chunk": "eration 26 6.2 Aadhaar Letter 26 6.3 Do wnload eAadhaar 27 6.3.1 O TP to download Aadhaar & Password 28 6.3.2 Validating the digital signature on eAadhaar 28 6.3.3 Do wnloaded Aadhaar is legally valid 28 6.3.4 F eatures of eAadhaar 29 6.4 Aadhaar P VC Card 29 6.5 mAadhaar Mob ile App 30 SE CTION 7: VERIFICATION OF AADHAAR 3 2 7.1 V erify any Aadhaar Online 32 7.2 Secur e QR Code on Aadhaar 33 SE CTION 8: AADHAAR ONLINE SERVICES 34 8.1 Aadhaar Online Services (that DO NOT require Registered Mobile Number) 34 8.2 Aadhaar Online Services (that require Registered Mobile Number) 35 8.3 Frequently Asked Questions 37 SE CTION 9: PRIVACY AND SECURITY OF YOUR AADHAAR DATA 38 9.1 UIDAI Protecting privacy and information 38 9.2 Da ta Security in CIDR 39",
                "distance": 0.38354194164276123
              }
            ],
            "error": null
          },
          "context": "\nSource: UIAI_1.pdf\nPage: 33\n\nUnique Identification Authority of India Government of India 33 Aadhaar Handbook for Residents 2021-Ver.2.0 7.2 Secur e QR Code on Aadhaar Th e Aadhaar letter, Aadhaar PVC Card and eAadhaar contain a digit ally signed secure QR code that has demographic details of the Aadhaar holder with photograph. This QR Code can be used to verify the identity of the Aadhaar holder . Th e service provider needs to use Aadhaar QR Code Scanner App (also available in mAadhaar) to scan the Secure QR Code on the presented Aadhaar. Aadhaar Offline Verification made easy using Secure QR Code To read more about Secure QR Code SCAN To watch tutorial on the Secure QR Code SCAN\n\n\nSource: UIAI_1.pdf\nPage: 37\n\nUnique Identification Authority of India Government of India 37 Aadhaar Handbook for Residents 2021-Ver.2.0 To read FAQs SCAN \u2022 Aadhaar Authentication History: Using this service, you can g et de tails of authen tication perf ormed b y y ou in pas t 6 mon ths. The OTP for this service will be sent to your registered mobile number. \u2022 Offline eKYC Service: Using this service, you can generate your digitally signed Aadhaar details that you may use for KYC purposes. To know more about Aadhaar Authentication History SCAN To know more about Aadhaar Paperless Offline eKYC: SCAN 8.3 Fr equently Asked Questions UID AI also has e xtensive F AQs section on the w ebsite and mAadhaar app to help residents understand Aadhaar process, services and products.\n\n\nSource: UIAI_1.pdf\nPage: 4\n\neration 26 6.2 Aadhaar Letter 26 6.3 Do wnload eAadhaar 27 6.3.1 O TP to download Aadhaar & Password 28 6.3.2 Validating the digital signature on eAadhaar 28 6.3.3 Do wnloaded Aadhaar is legally valid 28 6.3.4 F eatures of eAadhaar 29 6.4 Aadhaar P VC Card 29 6.5 mAadhaar Mob ile App 30 SE CTION 7: VERIFICATION OF AADHAAR 3 2 7.1 V erify any Aadhaar Online 32 7.2 Secur e QR Code on Aadhaar 33 SE CTION 8: AADHAAR ONLINE SERVICES 34 8.1 Aadhaar Online Services (that DO NOT require Registered Mobile Number) 34 8.2 Aadhaar Online Services (that require Registered Mobile Number) 35 8.3 Frequently Asked Questions 37 SE CTION 9: PRIVACY AND SECURITY OF YOUR AADHAAR DATA 38 9.1 UIDAI Protecting privacy and information 38 9.2 Da ta Security in CIDR 39\n",
          "generation": {
            "answer": "Aadhaar authentication refers to the process of verifying an individual's identity using their Aadhaar number, which includes a unique code that can be scanned on an app or device. This authentication method ensures that only authorized individuals can access certain services and information related to the Aadhaar system.",
            "latency_seconds": 20.911703020999994,
            "prompt_tokens": 785,
            "output_tokens": 57,
            "total_tokens": 842,
            "total_duration_ns": 20909444387,
            "load_duration_ns": 563003767,
            "prompt_eval_duration_ns": 68401000,
            "eval_duration_ns": 6905519000,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 96.6,
            "cpu_after_percent": 90.0,
            "memory_before_mb": 30.16015625,
            "memory_after_mb": 28.78125,
            "memory_delta_mb": 0
          }
        },
        {
          "model": "qwen2.5-coder:1.5b",
          "question_id": 23,
          "question": "Can a resident update Aadhaar information?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": 0.3622302170006151,
            "pages": [
              16,
              16,
              21
            ],
            "distances": [
              0.415986031293869,
              0.4215809404850006,
              0.42346474528312683
            ],
            "results": [
              {
                "source": "UIAI_1.pdf",
                "page": 16,
                "chunk": "should check details of your Aadhaar for any other required update. 3.1 Documen ts Required for Update Y ou need t o submit a v alid supporting documen t f or v erification f or upda ting f ollowing de tails in y our Aadhaar: \u2022 Name \u2022 Addr ess \u2022 Da te of Birth When you update your Aadhaar, only your Aadhaar details get updated, the Aadhaar number shall remain same.",
                "distance": 0.415986031293869
              },
              {
                "source": "UIAI_1.pdf",
                "page": 16,
                "chunk": "Unique Identification Authority of India Government of India 16Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 3: AADHAAR UPDATE You can update any demographic details (name, address, date of birth, gender, mobile number or email ID), or biometric details (photograph, fingerprints, iris scan) in your Aadhaar from any Aadhaar Enrolment Centre across the country. You can get more than one entry updated in Aadhaar Enrolment Centre at the same time . The fee for update of single entry (such as address) and multiple entries (such as address, mobile phone number, email address etc.) is the same. So upda ting all those en tries t ogether which need t o be upda ted is both c onvenient and c ost e ffective f or y ou. Ther efore, be fore visiting Aadhaar Enr olment Cen tre f or an upda te, y ou should check details of your Aadhaar for any other required update. 3.1 Documen ts Required for Update Y ou need t o submit a v alid supporting documen t f or v erification f or upda ting f ollowing d",
                "distance": 0.4215809404850006
              },
              {
                "source": "UIAI_1.pdf",
                "page": 21,
                "chunk": "Unique Identification Authority of India Government of India 21 Aadhaar Handbook for Residents 2021-Ver.2.0 3. If the deactiv ation is due t o docu ments r elated r eason, c ontact/visit the c oncerned Aadhaar Regional Office for update after due diligence. 3.8 Aadhaar Upd ate Status Check Y ou can use the 8 digit Update Request Number (URN) mentioned on the upda te ackno wledgement slip t o check the s tatus of your Aadhaar update request from: \u2022 Calling Aadhaar helpline \u2013 1947 \u2022 Sending email t o help@uidai.gov.in \u2022 Visiting uidai.gov.in \u2022 Thr ough mAadhaar App On success ful submission of an online address update request via SSUP , you receive a URN (Update Request Number). This is shown on screen and also sent via SMS to your registered mobile number. Use this URN and your Aadhaar number to track s tatus of y our Aadhaar upda te fr om: h ttps://ssup.uidai. gov.in/checkSSUPStatus/checkupdatestatus. 3.9 P oints to remember for Aadhaar Update at Aadhaar Enrolment Centre 1. An y Aadhaa",
                "distance": 0.42346474528312683
              }
            ],
            "error": null
          },
          "context": "\nSource: UIAI_1.pdf\nPage: 16\n\nshould check details of your Aadhaar for any other required update. 3.1 Documen ts Required for Update Y ou need t o submit a v alid supporting documen t f or v erification f or upda ting f ollowing de tails in y our Aadhaar: \u2022 Name \u2022 Addr ess \u2022 Da te of Birth When you update your Aadhaar, only your Aadhaar details get updated, the Aadhaar number shall remain same.\n\n\nSource: UIAI_1.pdf\nPage: 16\n\nUnique Identification Authority of India Government of India 16Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 3: AADHAAR UPDATE You can update any demographic details (name, address, date of birth, gender, mobile number or email ID), or biometric details (photograph, fingerprints, iris scan) in your Aadhaar from any Aadhaar Enrolment Centre across the country. You can get more than one entry updated in Aadhaar Enrolment Centre at the same time . The fee for update of single entry (such as address) and multiple entries (such as address, mobile phone number, email address etc.) is the same. So upda ting all those en tries t ogether which need t o be upda ted is both c onvenient and c ost e ffective f or y ou. Ther efore, be fore visiting Aadhaar Enr olment Cen tre f or an upda te, y ou should check details of your Aadhaar for any other required update. 3.1 Documen ts Required for Update Y ou need t o submit a v alid supporting documen t f or v erification f or upda ting f ollowing d\n\n\nSource: UIAI_1.pdf\nPage: 21\n\nUnique Identification Authority of India Government of India 21 Aadhaar Handbook for Residents 2021-Ver.2.0 3. If the deactiv ation is due t o docu ments r elated r eason, c ontact/visit the c oncerned Aadhaar Regional Office for update after due diligence. 3.8 Aadhaar Upd ate Status Check Y ou can use the 8 digit Update Request Number (URN) mentioned on the upda te ackno wledgement slip t o check the s tatus of your Aadhaar update request from: \u2022 Calling Aadhaar helpline \u2013 1947 \u2022 Sending email t o help@uidai.gov.in \u2022 Visiting uidai.gov.in \u2022 Thr ough mAadhaar App On success ful submission of an online address update request via SSUP , you receive a URN (Update Request Number). This is shown on screen and also sent via SMS to your registered mobile number. Use this URN and your Aadhaar number to track s tatus of y our Aadhaar upda te fr om: h ttps://ssup.uidai. gov.in/checkSSUPStatus/checkupdatestatus. 3.9 P oints to remember for Aadhaar Update at Aadhaar Enrolment Centre 1. An y Aadhaa\n",
          "generation": {
            "answer": "Yes, a resident can update Aadhaar information. The Aadhaar Handbook provides clear instructions on how to check and submit updates to your Aadhaar details.",
            "latency_seconds": 31.09920023199993,
            "prompt_tokens": 802,
            "output_tokens": 31,
            "total_tokens": 833,
            "total_duration_ns": 31095218235,
            "load_duration_ns": 697495010,
            "prompt_eval_duration_ns": 66757999,
            "eval_duration_ns": 3704060000,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 100.0,
            "cpu_after_percent": 96.7,
            "memory_before_mb": 28.78125,
            "memory_after_mb": 28.37109375,
            "memory_delta_mb": 0
          }
        },
        {
          "model": "qwen2.5-coder:1.5b",
          "question_id": 24,
          "question": "What types of information can be updated in Aadhaar?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": 0.24138485600087733,
            "pages": [
              16,
              16,
              20
            ],
            "distances": [
              0.3720545172691345,
              0.41792237758636475,
              0.47000300884246826
            ],
            "results": [
              {
                "source": "UIAI_1.pdf",
                "page": 16,
                "chunk": "should check details of your Aadhaar for any other required update. 3.1 Documen ts Required for Update Y ou need t o submit a v alid supporting documen t f or v erification f or upda ting f ollowing de tails in y our Aadhaar: \u2022 Name \u2022 Addr ess \u2022 Da te of Birth When you update your Aadhaar, only your Aadhaar details get updated, the Aadhaar number shall remain same.",
                "distance": 0.3720545172691345
              },
              {
                "source": "UIAI_1.pdf",
                "page": 16,
                "chunk": "Unique Identification Authority of India Government of India 16Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 3: AADHAAR UPDATE You can update any demographic details (name, address, date of birth, gender, mobile number or email ID), or biometric details (photograph, fingerprints, iris scan) in your Aadhaar from any Aadhaar Enrolment Centre across the country. You can get more than one entry updated in Aadhaar Enrolment Centre at the same time . The fee for update of single entry (such as address) and multiple entries (such as address, mobile phone number, email address etc.) is the same. So upda ting all those en tries t ogether which need t o be upda ted is both c onvenient and c ost e ffective f or y ou. Ther efore, be fore visiting Aadhaar Enr olment Cen tre f or an upda te, y ou should check details of your Aadhaar for any other required update. 3.1 Documen ts Required for Update Y ou need t o submit a v alid supporting documen t f or v erification f or upda ting f ollowing d",
                "distance": 0.41792237758636475
              },
              {
                "source": "UIAI_1.pdf",
                "page": 20,
                "chunk": "lds (name, gender and date of birth) in y our Aadhaar again (beyond the permissible limit), you need to: 1. Visit an y Aadhaar Enr olment Cen tre (with v alid supporting docume nt f or N ame & Da te of Birth upda te) 2. Place an up date request 3. Send the latest URN (Update Request Number) to Aadhaar help centre by calling 1947 or via email to help@uidai.gov.in and request for \u2018exception update\u2019 The c ase is then assigne d t o the UID AI\u2019s R egional Office tha t handles y our r egion f or due dilig ence. Once verified, your update request will be processed and the outcome communicated to you. 3.7 Upda te in case of Aadhaar Deactivation Y our Aadhaar data is subject to periodic quality checks. During such quality checks by UIDAI, if any discr epancy is f ound in the supporting documen ts or c aptured biome tric da ta of a r esident, his/her Aadhaar is deactiv ated t emporarily and the Aadhaar holder is duly notified of this. If y our Aadhaar gets suspended, you would not be able to ava",
                "distance": 0.47000300884246826
              }
            ],
            "error": null
          },
          "context": "\nSource: UIAI_1.pdf\nPage: 16\n\nshould check details of your Aadhaar for any other required update. 3.1 Documen ts Required for Update Y ou need t o submit a v alid supporting documen t f or v erification f or upda ting f ollowing de tails in y our Aadhaar: \u2022 Name \u2022 Addr ess \u2022 Da te of Birth When you update your Aadhaar, only your Aadhaar details get updated, the Aadhaar number shall remain same.\n\n\nSource: UIAI_1.pdf\nPage: 16\n\nUnique Identification Authority of India Government of India 16Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 3: AADHAAR UPDATE You can update any demographic details (name, address, date of birth, gender, mobile number or email ID), or biometric details (photograph, fingerprints, iris scan) in your Aadhaar from any Aadhaar Enrolment Centre across the country. You can get more than one entry updated in Aadhaar Enrolment Centre at the same time . The fee for update of single entry (such as address) and multiple entries (such as address, mobile phone number, email address etc.) is the same. So upda ting all those en tries t ogether which need t o be upda ted is both c onvenient and c ost e ffective f or y ou. Ther efore, be fore visiting Aadhaar Enr olment Cen tre f or an upda te, y ou should check details of your Aadhaar for any other required update. 3.1 Documen ts Required for Update Y ou need t o submit a v alid supporting documen t f or v erification f or upda ting f ollowing d\n\n\nSource: UIAI_1.pdf\nPage: 20\n\nlds (name, gender and date of birth) in y our Aadhaar again (beyond the permissible limit), you need to: 1. Visit an y Aadhaar Enr olment Cen tre (with v alid supporting docume nt f or N ame & Da te of Birth upda te) 2. Place an up date request 3. Send the latest URN (Update Request Number) to Aadhaar help centre by calling 1947 or via email to help@uidai.gov.in and request for \u2018exception update\u2019 The c ase is then assigne d t o the UID AI\u2019s R egional Office tha t handles y our r egion f or due dilig ence. Once verified, your update request will be processed and the outcome communicated to you. 3.7 Upda te in case of Aadhaar Deactivation Y our Aadhaar data is subject to periodic quality checks. During such quality checks by UIDAI, if any discr epancy is f ound in the supporting documen ts or c aptured biome tric da ta of a r esident, his/her Aadhaar is deactiv ated t emporarily and the Aadhaar holder is duly notified of this. If y our Aadhaar gets suspended, you would not be able to ava\n",
          "generation": {
            "answer": "The information that can be updated in Aadhaar includes:\n\n1. Name\n2. Address\n3. Date of Birth\n\nThese details are specified in the Aadhaar Handbook for Residents, section 3: AADHAAR UPDATE.",
            "latency_seconds": 19.871968080000443,
            "prompt_tokens": 802,
            "output_tokens": 48,
            "total_tokens": 850,
            "total_duration_ns": 19870145413,
            "load_duration_ns": 567900462,
            "prompt_eval_duration_ns": 75318000,
            "eval_duration_ns": 3738417000,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 100.0,
            "cpu_after_percent": 93.1,
            "memory_before_mb": 28.37109375,
            "memory_after_mb": 28.08984375,
            "memory_delta_mb": 0
          }
        },
        {
          "model": "qwen2.5-coder:1.5b",
          "question_id": 25,
          "question": "What should be done if the requested information is not available in the Aadhaar Handbook?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": 0.2724113299991586,
            "pages": [
              16,
              20,
              21
            ],
            "distances": [
              0.4864501953125,
              0.49763184785842896,
              0.5259160995483398
            ],
            "results": [
              {
                "source": "UIAI_1.pdf",
                "page": 16,
                "chunk": "should check details of your Aadhaar for any other required update. 3.1 Documen ts Required for Update Y ou need t o submit a v alid supporting documen t f or v erification f or upda ting f ollowing de tails in y our Aadhaar: \u2022 Name \u2022 Addr ess \u2022 Da te of Birth When you update your Aadhaar, only your Aadhaar details get updated, the Aadhaar number shall remain same.",
                "distance": 0.4864501953125
              },
              {
                "source": "UIAI_1.pdf",
                "page": 20,
                "chunk": "lds (name, gender and date of birth) in y our Aadhaar again (beyond the permissible limit), you need to: 1. Visit an y Aadhaar Enr olment Cen tre (with v alid supporting docume nt f or N ame & Da te of Birth upda te) 2. Place an up date request 3. Send the latest URN (Update Request Number) to Aadhaar help centre by calling 1947 or via email to help@uidai.gov.in and request for \u2018exception update\u2019 The c ase is then assigne d t o the UID AI\u2019s R egional Office tha t handles y our r egion f or due dilig ence. Once verified, your update request will be processed and the outcome communicated to you. 3.7 Upda te in case of Aadhaar Deactivation Y our Aadhaar data is subject to periodic quality checks. During such quality checks by UIDAI, if any discr epancy is f ound in the supporting documen ts or c aptured biome tric da ta of a r esident, his/her Aadhaar is deactiv ated t emporarily and the Aadhaar holder is duly notified of this. If y our Aadhaar gets suspended, you would not be able to ava",
                "distance": 0.49763184785842896
              },
              {
                "source": "UIAI_1.pdf",
                "page": 21,
                "chunk": "Update Request Number, follow the process to retrieve EID as described in Sec. 2.5.1 5. If your update request gets rejected, you can call 1947 and get the reason for rejection and take corrective measure before you place another update request. 6. If your Aadhaar shows \u2018Invalid\u2019 , call 1947 to get further guidance. 7. If your Aadhaar letter has only \u2018Year of Birth\u2019 printed, DO NOT UPDATE. Just download your latest Aadhaar or Order Aadhaar Reprint from uidai.gov.in to get your Aadhaar showing complete Date of Birth. 3.10 P oints to remember for Aadhaar Update A r esident who is an Aadhaar number hold er ma y, upon a ttaining the ag e of eigh teen y ears, mak e an applic ation f or c ancellation of his/her Aadhaar number t o R egional Office of UID AI within a period of six months from the date of attaining the age of eighteen years. Th e r esident will be r equired t o visit the R egional Office a t a s tipulated da te and time f or es tablishing his/her iden tity thr ough Aadhaar auth",
                "distance": 0.5259160995483398
              }
            ],
            "error": null
          },
          "context": "\nSource: UIAI_1.pdf\nPage: 16\n\nshould check details of your Aadhaar for any other required update. 3.1 Documen ts Required for Update Y ou need t o submit a v alid supporting documen t f or v erification f or upda ting f ollowing de tails in y our Aadhaar: \u2022 Name \u2022 Addr ess \u2022 Da te of Birth When you update your Aadhaar, only your Aadhaar details get updated, the Aadhaar number shall remain same.\n\n\nSource: UIAI_1.pdf\nPage: 20\n\nlds (name, gender and date of birth) in y our Aadhaar again (beyond the permissible limit), you need to: 1. Visit an y Aadhaar Enr olment Cen tre (with v alid supporting docume nt f or N ame & Da te of Birth upda te) 2. Place an up date request 3. Send the latest URN (Update Request Number) to Aadhaar help centre by calling 1947 or via email to help@uidai.gov.in and request for \u2018exception update\u2019 The c ase is then assigne d t o the UID AI\u2019s R egional Office tha t handles y our r egion f or due dilig ence. Once verified, your update request will be processed and the outcome communicated to you. 3.7 Upda te in case of Aadhaar Deactivation Y our Aadhaar data is subject to periodic quality checks. During such quality checks by UIDAI, if any discr epancy is f ound in the supporting documen ts or c aptured biome tric da ta of a r esident, his/her Aadhaar is deactiv ated t emporarily and the Aadhaar holder is duly notified of this. If y our Aadhaar gets suspended, you would not be able to ava\n\n\nSource: UIAI_1.pdf\nPage: 21\n\nUpdate Request Number, follow the process to retrieve EID as described in Sec. 2.5.1 5. If your update request gets rejected, you can call 1947 and get the reason for rejection and take corrective measure before you place another update request. 6. If your Aadhaar shows \u2018Invalid\u2019 , call 1947 to get further guidance. 7. If your Aadhaar letter has only \u2018Year of Birth\u2019 printed, DO NOT UPDATE. Just download your latest Aadhaar or Order Aadhaar Reprint from uidai.gov.in to get your Aadhaar showing complete Date of Birth. 3.10 P oints to remember for Aadhaar Update A r esident who is an Aadhaar number hold er ma y, upon a ttaining the ag e of eigh teen y ears, mak e an applic ation f or c ancellation of his/her Aadhaar number t o R egional Office of UID AI within a period of six months from the date of attaining the age of eighteen years. Th e r esident will be r equired t o visit the R egional Office a t a s tipulated da te and time f or es tablishing his/her iden tity thr ough Aadhaar auth\n",
          "generation": {
            "answer": "The information was not found in the provided Aadhaar Handbook.",
            "latency_seconds": 18.495663177000097,
            "prompt_tokens": 817,
            "output_tokens": 13,
            "total_tokens": 830,
            "total_duration_ns": 18466652021,
            "load_duration_ns": 617716016,
            "prompt_eval_duration_ns": 67986000,
            "eval_duration_ns": 4576667000,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 100.0,
            "cpu_after_percent": 100.0,
            "memory_before_mb": 28.08984375,
            "memory_after_mb": 26.2890625,
            "memory_delta_mb": 0
          }
        }
      ]
    },
    {
      "model": "llama3.2:3b",
      "questions_expected": 25,
      "questions_recorded": 25,
      "results": [
        {
          "model": "llama3.2:3b",
          "question_id": 1,
          "question": "What documents are required for Aadhaar enrolment?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": 0.16673332000027585,
            "pages": [
              9,
              1,
              2
            ],
            "distances": [
              0.28995370864868164,
              0.30845996737480164,
              0.3144756555557251
            ],
            "results": [
              {
                "source": "UIAI_1.pdf",
                "page": 9,
                "chunk": "a valid document, you have to produce that for Aadhaar enrolment. In case you do not ha ve docu ments in y our name, y ou c an also use a certific ate issued b y authoriz ed official (r efer t o Anne x. II). UID AI has de fined a s tandard f ormat f or this certific ate. R efer t o the Lis t of Accep table Supporting Documen ts f or V erification a vailable a t: h ttps://uidai.gov.in/images/ commdoc/valid_documents_list.pdf To download Aadhaar Enrolment Form: SCAN To get details of nearby Aadhaar Enrolment Centre: SCAN Carry original documents to Aadhaar centre. These are scanned and given back to you. The document for Aadhaar enrolment should have your name. For List of Valid Supporting Documents SCAN",
                "distance": 0.28995370864868164
              },
              {
                "source": "UIAI_2.pdf",
                "page": 1,
                "chunk": "List of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan LIST OF ACCEPTABLE DOCUMENTS FOR ENROLMENT AND UPDATE List I - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar of individual up to five years of age List II - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar of individual five years and above and less than eighteen years of age List III - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar Number of individual eighteen years and above of age List IV - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for update of information in respect of Aadhaar Number Holder of any age",
                "distance": 0.30845996737480164
              },
              {
                "source": "UIAI_2.pdf",
                "page": 2,
                "chunk": "List of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan Enrolment Type I: Head of the Family (HoF) based enrolment Sl. No. List of documents (see note below this tabular statement) Proof of Relationship (PoR) document, containing name of child and name of Head of Family (HoF) Proof of Date of Birth (PDB) document, containing name and date of birth 1. Birth certificate issued under the Registration of Births and Deaths Act, 1969 and the rules made thereunder \uf0fe \uf0fe 2. Valid Indian Passport (only applicable for NRIs) \uf0fe \uf0fe 3. Document to prove legal guardianship issued by the Central government or a State Government authority or a court of law under the relevant Acts (the Guardians and Wards Act, 1890 / the National Trust Act, 1999 / the Rights of Persons with Disabilities Act, 2016) and the rules made under these Acts \uf0fe \uf0fd Enrolment Type II: Document based enrolment Sl. No. List of documents (see note below this tabular statement) Proof of Identity (PoI) document, c",
                "distance": 0.3144756555557251
              }
            ],
            "error": null
          },
          "context": "\nSource: UIAI_1.pdf\nPage: 9\n\na valid document, you have to produce that for Aadhaar enrolment. In case you do not ha ve docu ments in y our name, y ou c an also use a certific ate issued b y authoriz ed official (r efer t o Anne x. II). UID AI has de fined a s tandard f ormat f or this certific ate. R efer t o the Lis t of Accep table Supporting Documen ts f or V erification a vailable a t: h ttps://uidai.gov.in/images/ commdoc/valid_documents_list.pdf To download Aadhaar Enrolment Form: SCAN To get details of nearby Aadhaar Enrolment Centre: SCAN Carry original documents to Aadhaar centre. These are scanned and given back to you. The document for Aadhaar enrolment should have your name. For List of Valid Supporting Documents SCAN\n\n\nSource: UIAI_2.pdf\nPage: 1\n\nList of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan LIST OF ACCEPTABLE DOCUMENTS FOR ENROLMENT AND UPDATE List I - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar of individual up to five years of age List II - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar of individual five years and above and less than eighteen years of age List III - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar Number of individual eighteen years and above of age List IV - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for update of information in respect of Aadhaar Number Holder of any age\n\n\nSource: UIAI_2.pdf\nPage: 2\n\nList of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan Enrolment Type I: Head of the Family (HoF) based enrolment Sl. No. List of documents (see note below this tabular statement) Proof of Relationship (PoR) document, containing name of child and name of Head of Family (HoF) Proof of Date of Birth (PDB) document, containing name and date of birth 1. Birth certificate issued under the Registration of Births and Deaths Act, 1969 and the rules made thereunder \uf0fe \uf0fe 2. Valid Indian Passport (only applicable for NRIs) \uf0fe \uf0fe 3. Document to prove legal guardianship issued by the Central government or a State Government authority or a court of law under the relevant Acts (the Guardians and Wards Act, 1890 / the National Trust Act, 1999 / the Rights of Persons with Disabilities Act, 2016) and the rules made under these Acts \uf0fe \uf0fd Enrolment Type II: Document based enrolment Sl. No. List of documents (see note below this tabular statement) Proof of Identity (PoI) document, c\n",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": "('Connection aborted.', RemoteDisconnected('Remote end closed connection without response'))"
          },
          "resources": {
            "cpu_before_percent": 20.7,
            "cpu_after_percent": 26.7,
            "memory_before_mb": 26.30078125,
            "memory_after_mb": 22.859375,
            "memory_delta_mb": 0
          }
        },
        {
          "model": "llama3.2:3b",
          "question_id": 2,
          "question": "What is Aadhaar enrolment?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "500 Server Error: Internal Server Error for url: http://localhost:8001/retrieve"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 23.3,
            "cpu_after_percent": 42.9,
            "memory_before_mb": 23.59375,
            "memory_after_mb": 24.875,
            "memory_delta_mb": 1.28125
          }
        },
        {
          "model": "llama3.2:3b",
          "question_id": 3,
          "question": "What is the purpose of Aadhaar?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "500 Server Error: Internal Server Error for url: http://localhost:8001/retrieve"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 60.0,
            "cpu_after_percent": 21.4,
            "memory_before_mb": 24.875,
            "memory_after_mb": 24.875,
            "memory_delta_mb": 0
          }
        },
        {
          "model": "llama3.2:3b",
          "question_id": 4,
          "question": "What is Proof of Identity?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "500 Server Error: Internal Server Error for url: http://localhost:8001/retrieve"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 0.0,
            "cpu_after_percent": 10.0,
            "memory_before_mb": 24.875,
            "memory_after_mb": 24.875,
            "memory_delta_mb": 0
          }
        },
        {
          "model": "llama3.2:3b",
          "question_id": 5,
          "question": "What is Proof of Address?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "500 Server Error: Internal Server Error for url: http://localhost:8001/retrieve"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 0.0,
            "cpu_after_percent": 10.0,
            "memory_before_mb": 24.875,
            "memory_after_mb": 24.87890625,
            "memory_delta_mb": 0.00390625
          }
        },
        {
          "model": "llama3.2:3b",
          "question_id": 6,
          "question": "What is Proof of Date of Birth?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "500 Server Error: Internal Server Error for url: http://localhost:8001/retrieve"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 0.0,
            "cpu_after_percent": 9.7,
            "memory_before_mb": 24.87890625,
            "memory_after_mb": 24.88671875,
            "memory_delta_mb": 0.0078125
          }
        },
        {
          "model": "llama3.2:3b",
          "question_id": 7,
          "question": "What is Proof of Relationship?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "500 Server Error: Internal Server Error for url: http://localhost:8001/retrieve"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 3.4,
            "cpu_after_percent": 6.9,
            "memory_before_mb": 24.88671875,
            "memory_after_mb": 24.890625,
            "memory_delta_mb": 0.00390625
          }
        },
        {
          "model": "llama3.2:3b",
          "question_id": 8,
          "question": "Can Aadhaar enrolment be done without supporting documents?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "500 Server Error: Internal Server Error for url: http://localhost:8001/retrieve"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 3.1,
            "cpu_after_percent": 3.4,
            "memory_before_mb": 24.890625,
            "memory_after_mb": 24.890625,
            "memory_delta_mb": 0
          }
        },
        {
          "model": "llama3.2:3b",
          "question_id": 9,
          "question": "What information is collected during Aadhaar enrolment?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "500 Server Error: Internal Server Error for url: http://localhost:8001/retrieve"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 10.0,
            "cpu_after_percent": 12.5,
            "memory_before_mb": 24.890625,
            "memory_after_mb": 24.89453125,
            "memory_delta_mb": 0.00390625
          }
        },
        {
          "model": "llama3.2:3b",
          "question_id": 10,
          "question": "What biometric information is collected for Aadhaar?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "500 Server Error: Internal Server Error for url: http://localhost:8001/retrieve"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 0.0,
            "cpu_after_percent": 6.7,
            "memory_before_mb": 24.89453125,
            "memory_after_mb": 24.8984375,
            "memory_delta_mb": 0.00390625
          }
        },
        {
          "model": "llama3.2:3b",
          "question_id": 11,
          "question": "What demographic information is collected during enrolment?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "500 Server Error: Internal Server Error for url: http://localhost:8001/retrieve"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 6.5,
            "cpu_after_percent": 3.4,
            "memory_before_mb": 24.8984375,
            "memory_after_mb": 24.8984375,
            "memory_delta_mb": 0
          }
        },
        {
          "model": "llama3.2:3b",
          "question_id": 12,
          "question": "What happens after Aadhaar enrolment?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "500 Server Error: Internal Server Error for url: http://localhost:8001/retrieve"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 12.5,
            "cpu_after_percent": 3.4,
            "memory_before_mb": 24.90625,
            "memory_after_mb": 24.90625,
            "memory_delta_mb": 0
          }
        },
        {
          "model": "llama3.2:3b",
          "question_id": 13,
          "question": "What documents can be used as proof of identity?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "500 Server Error: Internal Server Error for url: http://localhost:8001/retrieve"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 6.9,
            "cpu_after_percent": 10.0,
            "memory_before_mb": 24.90625,
            "memory_after_mb": 24.91015625,
            "memory_delta_mb": 0.00390625
          }
        },
        {
          "model": "llama3.2:3b",
          "question_id": 14,
          "question": "What documents can be used as proof of address?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "500 Server Error: Internal Server Error for url: http://localhost:8001/retrieve"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 3.3,
            "cpu_after_percent": 9.7,
            "memory_before_mb": 24.91015625,
            "memory_after_mb": 24.9140625,
            "memory_delta_mb": 0.00390625
          }
        },
        {
          "model": "llama3.2:3b",
          "question_id": 15,
          "question": "What documents can be used as proof of date of birth?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "500 Server Error: Internal Server Error for url: http://localhost:8001/retrieve"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 0.0,
            "cpu_after_percent": 7.1,
            "memory_before_mb": 24.9140625,
            "memory_after_mb": 24.9140625,
            "memory_delta_mb": 0
          }
        },
        {
          "model": "llama3.2:3b",
          "question_id": 16,
          "question": "What is the role of the enrolment operator?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": 1.4232038390000525,
            "pages": [
              10,
              52,
              50
            ],
            "distances": [
              0.7259753942489624,
              0.7478420734405518,
              0.7597264051437378
            ],
            "results": [
              {
                "source": "UIAI_1.pdf",
                "page": 10,
                "chunk": "trars\u2019 own employees \u2022 Elect ed local body members \u2022 Members of local administrative bodies \u2022 P ostman \u2022 Influencers such as teachers \u2022 Health w orkers \u2022 Doct ors \u2022 Ang anwadis/Asha workers \u2022 Representatives of local NGOs The information captured during Introducer-based Enrolment is: \u2022 Introducer\u2019s name \u2022 Introducer\u2019s Aadhaar number \u2022 One modality of biometric information of the Introducer 2.1.4 Enr olment of Children For HoF based enrolment, the Head of Family has to give biometric confirmation at the time of enrolment.",
                "distance": 0.7259753942489624
              },
              {
                "source": "UIAI_1.pdf",
                "page": 52,
                "chunk": "vide f or han dling of such e xceptions in the enrolment and upda te software, and such enr olment shall be carried out as per the procedure as may be specified by the Authority for this purpose. 12.2 CHAP TER IV - Update of Resident Information 16. R equest for update of identity information. \u2014 An Aadhaar number holder ma y seek alt eration of his demogr aphic in formation or biome tric in formation in c ases specified under Section 31 of the Act in acc ordance with update procedure specified in this Chapter . 17. Mand atory update for children. \u2014 The Authority shall r equire the bio metric in formation of childr en t o be upda ted upon a ttaining fiv e y ears of ag e and fift een y ears of ag e in acc ordance with the pr ocedure specified by the Authority. 19. Mode of upda ting residents\u2019 information. \u2014 The pr ocess of upda ting r esidents\u2019 in formation in the CIDR ma y be c arried out thr ough the following modes:\u2014 (a) A t any enrolment centre with the assistance of the operator and",
                "distance": 0.7478420734405518
              },
              {
                "source": "UIAI_1.pdf",
                "page": 50,
                "chunk": "ose. 4. Demo graphic information required for enrolment. \u2014 (1) The f ollowing demogr aphic in formation shall be c ollected fr om all individuals under going enrolment (other than children below five years of age):",
                "distance": 0.7597264051437378
              }
            ],
            "error": null
          },
          "context": "\nSource: UIAI_1.pdf\nPage: 10\n\ntrars\u2019 own employees \u2022 Elect ed local body members \u2022 Members of local administrative bodies \u2022 P ostman \u2022 Influencers such as teachers \u2022 Health w orkers \u2022 Doct ors \u2022 Ang anwadis/Asha workers \u2022 Representatives of local NGOs The information captured during Introducer-based Enrolment is: \u2022 Introducer\u2019s name \u2022 Introducer\u2019s Aadhaar number \u2022 One modality of biometric information of the Introducer 2.1.4 Enr olment of Children For HoF based enrolment, the Head of Family has to give biometric confirmation at the time of enrolment.\n\n\nSource: UIAI_1.pdf\nPage: 52\n\nvide f or han dling of such e xceptions in the enrolment and upda te software, and such enr olment shall be carried out as per the procedure as may be specified by the Authority for this purpose. 12.2 CHAP TER IV - Update of Resident Information 16. R equest for update of identity information. \u2014 An Aadhaar number holder ma y seek alt eration of his demogr aphic in formation or biome tric in formation in c ases specified under Section 31 of the Act in acc ordance with update procedure specified in this Chapter . 17. Mand atory update for children. \u2014 The Authority shall r equire the bio metric in formation of childr en t o be upda ted upon a ttaining fiv e y ears of ag e and fift een y ears of ag e in acc ordance with the pr ocedure specified by the Authority. 19. Mode of upda ting residents\u2019 information. \u2014 The pr ocess of upda ting r esidents\u2019 in formation in the CIDR ma y be c arried out thr ough the following modes:\u2014 (a) A t any enrolment centre with the assistance of the operator and\n\n\nSource: UIAI_1.pdf\nPage: 50\n\nose. 4. Demo graphic information required for enrolment. \u2014 (1) The f ollowing demogr aphic in formation shall be c ollected fr om all individuals under going enrolment (other than children below five years of age):\n",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": "('Connection aborted.', RemoteDisconnected('Remote end closed connection without response'))"
          },
          "resources": {
            "cpu_before_percent": 24.1,
            "cpu_after_percent": 56.5,
            "memory_before_mb": 24.9140625,
            "memory_after_mb": 22.9140625,
            "memory_delta_mb": 0
          }
        },
        {
          "model": "llama3.2:3b",
          "question_id": 17,
          "question": "What is the role of the verifier?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "500 Server Error: Internal Server Error for url: http://localhost:8001/retrieve"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 66.7,
            "cpu_after_percent": 97.1,
            "memory_before_mb": 23.6875,
            "memory_after_mb": 24.97265625,
            "memory_delta_mb": 1.28515625
          }
        },
        {
          "model": "llama3.2:3b",
          "question_id": 18,
          "question": "How is an Aadhaar number generated?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "500 Server Error: Internal Server Error for url: http://localhost:8001/retrieve"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 93.1,
            "cpu_after_percent": 96.6,
            "memory_before_mb": 24.97265625,
            "memory_after_mb": 24.98046875,
            "memory_delta_mb": 0.0078125
          }
        },
        {
          "model": "llama3.2:3b",
          "question_id": 19,
          "question": "What should a resident do if there is an error in their Aadhaar information?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "500 Server Error: Internal Server Error for url: http://localhost:8001/retrieve"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 96.9,
            "cpu_after_percent": 100.0,
            "memory_before_mb": 24.98046875,
            "memory_after_mb": 24.98046875,
            "memory_delta_mb": 0
          }
        },
        {
          "model": "llama3.2:3b",
          "question_id": 20,
          "question": "What is demographic authentication?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "500 Server Error: Internal Server Error for url: http://localhost:8001/retrieve"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 83.3,
            "cpu_after_percent": 77.4,
            "memory_before_mb": 24.98046875,
            "memory_after_mb": 24.984375,
            "memory_delta_mb": 0.00390625
          }
        },
        {
          "model": "llama3.2:3b",
          "question_id": 21,
          "question": "What is biometric authentication?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "500 Server Error: Internal Server Error for url: http://localhost:8001/retrieve"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 93.3,
            "cpu_after_percent": 90.0,
            "memory_before_mb": 24.984375,
            "memory_after_mb": 24.984375,
            "memory_delta_mb": 0
          }
        },
        {
          "model": "llama3.2:3b",
          "question_id": 22,
          "question": "What is Aadhaar authentication?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "500 Server Error: Internal Server Error for url: http://localhost:8001/retrieve"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 84.0,
            "cpu_after_percent": 92.9,
            "memory_before_mb": 24.984375,
            "memory_after_mb": 24.984375,
            "memory_delta_mb": 0
          }
        },
        {
          "model": "llama3.2:3b",
          "question_id": 23,
          "question": "Can a resident update Aadhaar information?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "500 Server Error: Internal Server Error for url: http://localhost:8001/retrieve"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 65.5,
            "cpu_after_percent": 53.3,
            "memory_before_mb": 24.984375,
            "memory_after_mb": 24.984375,
            "memory_delta_mb": 0
          }
        },
        {
          "model": "llama3.2:3b",
          "question_id": 24,
          "question": "What types of information can be updated in Aadhaar?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "500 Server Error: Internal Server Error for url: http://localhost:8001/retrieve"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 42.9,
            "cpu_after_percent": 26.7,
            "memory_before_mb": 24.984375,
            "memory_after_mb": 24.98828125,
            "memory_delta_mb": 0.00390625
          }
        },
        {
          "model": "llama3.2:3b",
          "question_id": 25,
          "question": "What should be done if the requested information is not available in the Aadhaar Handbook?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "500 Server Error: Internal Server Error for url: http://localhost:8001/retrieve"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 10.3,
            "cpu_after_percent": 10.0,
            "memory_before_mb": 24.98828125,
            "memory_after_mb": 24.98828125,
            "memory_delta_mb": 0
          }
        }
      ]
    },
    {
      "model": "deepseek-coder:1.3b",
      "questions_expected": 25,
      "questions_recorded": 25,
      "results": [
        {
          "model": "deepseek-coder:1.3b",
          "question_id": 1,
          "question": "What documents are required for Aadhaar enrolment?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "500 Server Error: Internal Server Error for url: http://localhost:8001/retrieve"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 6.9,
            "cpu_after_percent": 6.5,
            "memory_before_mb": 24.98828125,
            "memory_after_mb": 25.33203125,
            "memory_delta_mb": 0.34375
          }
        },
        {
          "model": "deepseek-coder:1.3b",
          "question_id": 2,
          "question": "What is Aadhaar enrolment?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "500 Server Error: Internal Server Error for url: http://localhost:8001/retrieve"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 9.7,
            "cpu_after_percent": 13.8,
            "memory_before_mb": 25.33203125,
            "memory_after_mb": 25.3359375,
            "memory_delta_mb": 0.00390625
          }
        },
        {
          "model": "deepseek-coder:1.3b",
          "question_id": 3,
          "question": "What is the purpose of Aadhaar?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "500 Server Error: Internal Server Error for url: http://localhost:8001/retrieve"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 26.7,
            "cpu_after_percent": 60.7,
            "memory_before_mb": 25.3359375,
            "memory_after_mb": 25.3359375,
            "memory_delta_mb": 0
          }
        },
        {
          "model": "deepseek-coder:1.3b",
          "question_id": 4,
          "question": "What is Proof of Identity?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": 1.4067218999989564,
            "pages": [
              7,
              5,
              8
            ],
            "distances": [
              0.6297215223312378,
              0.6307013034820557,
              0.6621238589286804
            ],
            "results": [
              {
                "source": "UIAI_1.pdf",
                "page": 7,
                "chunk": "ffline v erification, as the c ase ma y be. It elimina tes the need f or pr oviding iden tity documen ts each time y ou wish t o access ser vices, benefits and subsidies. Aadhaar provides a portable proof of identity that can be verified through Aadhaar Authentication online anytime, anywhere. Indian Passport is mandatory Identity proof for Aadhaar Enrolment of NRIs.",
                "distance": 0.6297215223312378
              },
              {
                "source": "UIAI_2.pdf",
                "page": 5,
                "chunk": "s Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Criteria for Head of Family and Proof of Relationship based enrolment: (i) HoF must have a valid Aadhaar before performing HoF based enrolment (ii) Any one of the parents or the legal guardian can be HoF (iii) Aadhaar number of both the parents is required for HoF based enrolment. In case the child",
                "distance": 0.6307013034820557
              },
              {
                "source": "UIAI_2.pdf",
                "page": 8,
                "chunk": "such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Validity period of the Aadhaar",
                "distance": 0.6621238589286804
              }
            ],
            "error": null
          },
          "context": "\nSource: UIAI_1.pdf\nPage: 7\n\nffline v erification, as the c ase ma y be. It elimina tes the need f or pr oviding iden tity documen ts each time y ou wish t o access ser vices, benefits and subsidies. Aadhaar provides a portable proof of identity that can be verified through Aadhaar Authentication online anytime, anywhere. Indian Passport is mandatory Identity proof for Aadhaar Enrolment of NRIs.\n\n\nSource: UIAI_2.pdf\nPage: 5\n\ns Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Criteria for Head of Family and Proof of Relationship based enrolment: (i) HoF must have a valid Aadhaar before performing HoF based enrolment (ii) Any one of the parents or the legal guardian can be HoF (iii) Aadhaar number of both the parents is required for HoF based enrolment. In case the child\n\n\nSource: UIAI_2.pdf\nPage: 8\n\nsuch document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Validity period of the Aadhaar\n",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": "500 Server Error: Internal Server Error for url: http://localhost:11434/api/chat"
          },
          "resources": {
            "cpu_before_percent": 60.7,
            "cpu_after_percent": 96.6,
            "memory_before_mb": 25.3359375,
            "memory_after_mb": 25.34375,
            "memory_delta_mb": 0.0078125
          }
        },
        {
          "model": "deepseek-coder:1.3b",
          "question_id": 5,
          "question": "What is Proof of Address?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": 0.8615701980015729,
            "pages": [
              63,
              63,
              3
            ],
            "distances": [
              0.5735834240913391,
              0.6217241287231445,
              0.6342085599899292
            ],
            "results": [
              {
                "source": "UIAI_1.pdf",
                "page": 63,
                "chunk": "Proof of Address) documents containing Name & Address 1. Passport 2. Bank Statement/ Passbook 3. Post Office Account Statement/ Passbook 4. Ration Card 5. Voter ID 6. Driving License 7. Government Photo ID cards/ service photo identity card issued by PSU 8. Electricity Bill (not older than 3 months) 9. Water Bill (not older than 3 months) 10. Telephone Landline Bill (not older than 3 months) 11. Property Tax Receipt (not older than 1 year) 12. Credit Card Statement (not older than 3 months) 13. Insurance Policy 14. Signed Letter having Photo from Bank on letterhead 15. Signed Letter having Photo issued by registered Company on letterhead 16. Signed Letter having Photo issued by Recognized Educational Institution on letterhead or Photo ID having address issued by Recognized Educational Institution 17. NREGS Job Card 18. Arms License 19. Pensioner Card 20. Freedom Fighter Card 21. Kissan Passbook 22. CGHS/ ECHS Card 23. Certificate of Address having photo issued by MP or MLA or MLC or Ga",
                "distance": 0.5735834240913391
              },
              {
                "source": "UIAI_1.pdf",
                "page": 63,
                "chunk": "low). Declared checkbox may be selected if Resident does not have a valid proof of Date of Birth document. Verified checkbox is selected where Resident has provided documents as proof of Date of birth. Field 6: ADDRESS Write complete address. Please bring the original Proof of Address (POA) document. (See list B below). Please note that the Aadhaar letter will be delivered at the given address only. \u2022 To include name of Parent / Guardian / Spouse as part of the ad dress, enter the name of person in the c/o field. \u2022 Minor Corrections / Enhancements are permissible to make the address complete without altering the base address as mentioned in POA document. Field 7: RELATIONSHIP In case of children below 5 years, it is mandatory to provide father/mother/guardian details with their Aadhaar or EID number. If the resident is not holding a Proof of Identity & using the Head of the Family identity for enrolment, it is mandatory to provide Head of the family\u2019s details with his/her Aadhaar or EI",
                "distance": 0.6217241287231445
              },
              {
                "source": "UIAI_2.pdf",
                "page": 3,
                "chunk": "List of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan * Proof of Address documents as in the \u201cList III - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar Number of individual eighteen years and above of age\u201d will also be applicable Note: (a) Any document listed in the above tabular statement shall be acceptable only if it meets the following conditions, namely:\u2014 (i) It is currently valid; (ii) The person in respect of whom such document is issued is entitled for the same; (iii) The information contained in the document is verifiable from the source; and (iv) The authority issuing the document has not made any declaration that such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is",
                "distance": 0.6342085599899292
              }
            ],
            "error": null
          },
          "context": "\nSource: UIAI_1.pdf\nPage: 63\n\nProof of Address) documents containing Name & Address 1. Passport 2. Bank Statement/ Passbook 3. Post Office Account Statement/ Passbook 4. Ration Card 5. Voter ID 6. Driving License 7. Government Photo ID cards/ service photo identity card issued by PSU 8. Electricity Bill (not older than 3 months) 9. Water Bill (not older than 3 months) 10. Telephone Landline Bill (not older than 3 months) 11. Property Tax Receipt (not older than 1 year) 12. Credit Card Statement (not older than 3 months) 13. Insurance Policy 14. Signed Letter having Photo from Bank on letterhead 15. Signed Letter having Photo issued by registered Company on letterhead 16. Signed Letter having Photo issued by Recognized Educational Institution on letterhead or Photo ID having address issued by Recognized Educational Institution 17. NREGS Job Card 18. Arms License 19. Pensioner Card 20. Freedom Fighter Card 21. Kissan Passbook 22. CGHS/ ECHS Card 23. Certificate of Address having photo issued by MP or MLA or MLC or Ga\n\n\nSource: UIAI_1.pdf\nPage: 63\n\nlow). Declared checkbox may be selected if Resident does not have a valid proof of Date of Birth document. Verified checkbox is selected where Resident has provided documents as proof of Date of birth. Field 6: ADDRESS Write complete address. Please bring the original Proof of Address (POA) document. (See list B below). Please note that the Aadhaar letter will be delivered at the given address only. \u2022 To include name of Parent / Guardian / Spouse as part of the ad dress, enter the name of person in the c/o field. \u2022 Minor Corrections / Enhancements are permissible to make the address complete without altering the base address as mentioned in POA document. Field 7: RELATIONSHIP In case of children below 5 years, it is mandatory to provide father/mother/guardian details with their Aadhaar or EID number. If the resident is not holding a Proof of Identity & using the Head of the Family identity for enrolment, it is mandatory to provide Head of the family\u2019s details with his/her Aadhaar or EI\n\n\nSource: UIAI_2.pdf\nPage: 3\n\nList of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan * Proof of Address documents as in the \u201cList III - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar Number of individual eighteen years and above of age\u201d will also be applicable Note: (a) Any document listed in the above tabular statement shall be acceptable only if it meets the following conditions, namely:\u2014 (i) It is currently valid; (ii) The person in respect of whom such document is issued is entitled for the same; (iii) The information contained in the document is verifiable from the source; and (iv) The authority issuing the document has not made any declaration that such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is\n",
          "generation": {
            "answer": "Proof of Birth or Residency (POB/Residence), also known as Passport, Bank Statement /Passbook , Post Office Account statement and Ration Card. It's a document that contains personal details such as name, address etc., which is issued by the government to verify identity in India for permanent residents only upto 18 years of age or above who have been living with us since their last known date (known as 'last seen'). This proof can be used at various places like post offices and banks.\n",
            "latency_seconds": 129.43425609099904,
            "prompt_tokens": 1052,
            "output_tokens": 111,
            "total_tokens": 1163,
            "total_duration_ns": 129390262693,
            "load_duration_ns": 3943134888,
            "prompt_eval_duration_ns": 953365000,
            "eval_duration_ns": 11419606000,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 82.8,
            "cpu_after_percent": 28.0,
            "memory_before_mb": 25.34375,
            "memory_after_mb": 22.80078125,
            "memory_delta_mb": 0
          }
        },
        {
          "model": "deepseek-coder:1.3b",
          "question_id": 6,
          "question": "What is Proof of Date of Birth?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": 1.739949858001637,
            "pages": [
              13,
              3,
              63
            ],
            "distances": [
              0.4825599193572998,
              0.557792067527771,
              0.6019162535667419
            ],
            "results": [
              {
                "source": "UIAI_2.pdf",
                "page": 13,
                "chunk": "irth certificate as proof of date of birth b. For Non-Resident Indian (NRI) below 18 years of age: - Aadhaar number holder shall submit birth certificate or Indian Passport as proof of date of birth c. For resident Indians and Non-Resident Indian (NRI) of 18 years and above of age: - Aadhaar number holder shall submit any of the acceptable proof of date of birth documents as specified in the above list (ii) If the Aadhaar number holder had earlier submitted birth certificate as proof of date of birth, the Aadhaar number holder shall submit corrected birth certificate bearing same Birth Registration Number (BRN) (iii) If the Aadhaar number holder had earlier submitted any proof of date of birth document except birth certificate (for e.g. Marksheet, Passport etc.), the Aadhaar number holder shall submit corrected version of the same document or submit a birth certificate (iv) In case of date of birth update of woman who has changed her name post-marriage, proof of date of birth documents",
                "distance": 0.4825599193572998
              },
              {
                "source": "UIAI_2.pdf",
                "page": 3,
                "chunk": "birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Head of Family (HoF) based enrolment is mandatory for children below five years of age ex",
                "distance": 0.557792067527771
              },
              {
                "source": "UIAI_1.pdf",
                "page": 63,
                "chunk": "low). Declared checkbox may be selected if Resident does not have a valid proof of Date of Birth document. Verified checkbox is selected where Resident has provided documents as proof of Date of birth. Field 6: ADDRESS Write complete address. Please bring the original Proof of Address (POA) document. (See list B below). Please note that the Aadhaar letter will be delivered at the given address only. \u2022 To include name of Parent / Guardian / Spouse as part of the ad dress, enter the name of person in the c/o field. \u2022 Minor Corrections / Enhancements are permissible to make the address complete without altering the base address as mentioned in POA document. Field 7: RELATIONSHIP In case of children below 5 years, it is mandatory to provide father/mother/guardian details with their Aadhaar or EID number. If the resident is not holding a Proof of Identity & using the Head of the Family identity for enrolment, it is mandatory to provide Head of the family\u2019s details with his/her Aadhaar or EI",
                "distance": 0.6019162535667419
              }
            ],
            "error": null
          },
          "context": "\nSource: UIAI_2.pdf\nPage: 13\n\nirth certificate as proof of date of birth b. For Non-Resident Indian (NRI) below 18 years of age: - Aadhaar number holder shall submit birth certificate or Indian Passport as proof of date of birth c. For resident Indians and Non-Resident Indian (NRI) of 18 years and above of age: - Aadhaar number holder shall submit any of the acceptable proof of date of birth documents as specified in the above list (ii) If the Aadhaar number holder had earlier submitted birth certificate as proof of date of birth, the Aadhaar number holder shall submit corrected birth certificate bearing same Birth Registration Number (BRN) (iii) If the Aadhaar number holder had earlier submitted any proof of date of birth document except birth certificate (for e.g. Marksheet, Passport etc.), the Aadhaar number holder shall submit corrected version of the same document or submit a birth certificate (iv) In case of date of birth update of woman who has changed her name post-marriage, proof of date of birth documents\n\n\nSource: UIAI_2.pdf\nPage: 3\n\nbirth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Head of Family (HoF) based enrolment is mandatory for children below five years of age ex\n\n\nSource: UIAI_1.pdf\nPage: 63\n\nlow). Declared checkbox may be selected if Resident does not have a valid proof of Date of Birth document. Verified checkbox is selected where Resident has provided documents as proof of Date of birth. Field 6: ADDRESS Write complete address. Please bring the original Proof of Address (POA) document. (See list B below). Please note that the Aadhaar letter will be delivered at the given address only. \u2022 To include name of Parent / Guardian / Spouse as part of the ad dress, enter the name of person in the c/o field. \u2022 Minor Corrections / Enhancements are permissible to make the address complete without altering the base address as mentioned in POA document. Field 7: RELATIONSHIP In case of children below 5 years, it is mandatory to provide father/mother/guardian details with their Aadhaar or EID number. If the resident is not holding a Proof of Identity & using the Head of the Family identity for enrolment, it is mandatory to provide Head of the family\u2019s details with his/her Aadhaar or EI\n",
          "generation": {
            "answer": "Proof of date of birth (POB) documents are used as proof that an individual has a valid, accurate and current date of birth. These documents include the Aadhaar card or Indian Passport which contains information about the person's name, gender identity etc., along with their Date of Birth details in form like 'DD MMM YYYY'.\n",
            "latency_seconds": 63.87213239899938,
            "prompt_tokens": 1004,
            "output_tokens": 75,
            "total_tokens": 1079,
            "total_duration_ns": 63864807751,
            "load_duration_ns": 231962806,
            "prompt_eval_duration_ns": 200972000,
            "eval_duration_ns": 8097741000,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 41.4,
            "cpu_after_percent": 58.1,
            "memory_before_mb": 22.82421875,
            "memory_after_mb": 23.05859375,
            "memory_delta_mb": 0.234375
          }
        },
        {
          "model": "deepseek-coder:1.3b",
          "question_id": 7,
          "question": "What is Proof of Relationship?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": 2.1750034950018744,
            "pages": [
              5,
              3,
              8
            ],
            "distances": [
              0.6588935852050781,
              0.6885577440261841,
              0.6998454332351685
            ],
            "results": [
              {
                "source": "UIAI_2.pdf",
                "page": 5,
                "chunk": "s Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Criteria for Head of Family and Proof of Relationship based enrolment: (i) HoF must have a valid Aadhaar before performing HoF based enrolment (ii) Any one of the parents or the legal guardian can be HoF (iii) Aadhaar number of both the parents is required for HoF based enrolment. In case the child",
                "distance": 0.6588935852050781
              },
              {
                "source": "UIAI_2.pdf",
                "page": 3,
                "chunk": "birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Head of Family (HoF) based enrolment is mandatory for children below five years of age ex",
                "distance": 0.6885577440261841
              },
              {
                "source": "UIAI_2.pdf",
                "page": 8,
                "chunk": "such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Validity period of the Aadhaar",
                "distance": 0.6998454332351685
              }
            ],
            "error": null
          },
          "context": "\nSource: UIAI_2.pdf\nPage: 5\n\ns Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Criteria for Head of Family and Proof of Relationship based enrolment: (i) HoF must have a valid Aadhaar before performing HoF based enrolment (ii) Any one of the parents or the legal guardian can be HoF (iii) Aadhaar number of both the parents is required for HoF based enrolment. In case the child\n\n\nSource: UIAI_2.pdf\nPage: 3\n\nbirth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Head of Family (HoF) based enrolment is mandatory for children below five years of age ex\n\n\nSource: UIAI_2.pdf\nPage: 8\n\nsuch document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Validity period of the Aadhaar\n",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": "HTTPConnectionPool(host='localhost', port=11434): Read timed out. (read timeout=300)"
          },
          "resources": {
            "cpu_before_percent": 44.8,
            "cpu_after_percent": 76.7,
            "memory_before_mb": 22.8359375,
            "memory_after_mb": 22.08984375,
            "memory_delta_mb": 0
          }
        },
        {
          "model": "deepseek-coder:1.3b",
          "question_id": 8,
          "question": "Can Aadhaar enrolment be done without supporting documents?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "HTTPConnectionPool(host='localhost', port=8001): Read timed out. (read timeout=120)"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 44.8,
            "cpu_after_percent": 44.7,
            "memory_before_mb": 23.01953125,
            "memory_after_mb": 22.73046875,
            "memory_delta_mb": 0
          }
        },
        {
          "model": "deepseek-coder:1.3b",
          "question_id": 9,
          "question": "What information is collected during Aadhaar enrolment?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "HTTPConnectionPool(host='localhost', port=8001): Read timed out. (read timeout=120)"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 48.3,
            "cpu_after_percent": 78.0,
            "memory_before_mb": 21.6796875,
            "memory_after_mb": 22.19921875,
            "memory_delta_mb": 0.51953125
          }
        },
        {
          "model": "deepseek-coder:1.3b",
          "question_id": 10,
          "question": "What biometric information is collected for Aadhaar?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "500 Server Error: Internal Server Error for url: http://localhost:8001/retrieve"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 56.7,
            "cpu_after_percent": 96.6,
            "memory_before_mb": 23.20703125,
            "memory_after_mb": 25.06640625,
            "memory_delta_mb": 1.859375
          }
        },
        {
          "model": "deepseek-coder:1.3b",
          "question_id": 11,
          "question": "What demographic information is collected during enrolment?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "500 Server Error: Internal Server Error for url: http://localhost:8001/retrieve"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 100.0,
            "cpu_after_percent": 100.0,
            "memory_before_mb": 25.06640625,
            "memory_after_mb": 25.06640625,
            "memory_delta_mb": 0
          }
        },
        {
          "model": "deepseek-coder:1.3b",
          "question_id": 12,
          "question": "What happens after Aadhaar enrolment?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "500 Server Error: Internal Server Error for url: http://localhost:8001/retrieve"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 97.8,
            "cpu_after_percent": 100.0,
            "memory_before_mb": 25.06640625,
            "memory_after_mb": 25.07421875,
            "memory_delta_mb": 0.0078125
          }
        },
        {
          "model": "deepseek-coder:1.3b",
          "question_id": 13,
          "question": "What documents can be used as proof of identity?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "500 Server Error: Internal Server Error for url: http://localhost:8001/retrieve"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 100.0,
            "cpu_after_percent": 100.0,
            "memory_before_mb": 25.07421875,
            "memory_after_mb": 25.07421875,
            "memory_delta_mb": 0
          }
        },
        {
          "model": "deepseek-coder:1.3b",
          "question_id": 14,
          "question": "What documents can be used as proof of address?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "500 Server Error: Internal Server Error for url: http://localhost:8001/retrieve"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 100.0,
            "cpu_after_percent": 100.0,
            "memory_before_mb": 25.07421875,
            "memory_after_mb": 25.078125,
            "memory_delta_mb": 0.00390625
          }
        },
        {
          "model": "deepseek-coder:1.3b",
          "question_id": 15,
          "question": "What documents can be used as proof of date of birth?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "500 Server Error: Internal Server Error for url: http://localhost:8001/retrieve"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 100.0,
            "cpu_after_percent": 96.4,
            "memory_before_mb": 25.08203125,
            "memory_after_mb": 25.0859375,
            "memory_delta_mb": 0.00390625
          }
        },
        {
          "model": "deepseek-coder:1.3b",
          "question_id": 16,
          "question": "What is the role of the enrolment operator?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "500 Server Error: Internal Server Error for url: http://localhost:8001/retrieve"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 100.0,
            "cpu_after_percent": 100.0,
            "memory_before_mb": 25.0859375,
            "memory_after_mb": 25.08984375,
            "memory_delta_mb": 0.00390625
          }
        },
        {
          "model": "deepseek-coder:1.3b",
          "question_id": 17,
          "question": "What is the role of the verifier?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "500 Server Error: Internal Server Error for url: http://localhost:8001/retrieve"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 100.0,
            "cpu_after_percent": 96.2,
            "memory_before_mb": 25.08984375,
            "memory_after_mb": 25.09375,
            "memory_delta_mb": 0.00390625
          }
        },
        {
          "model": "deepseek-coder:1.3b",
          "question_id": 18,
          "question": "How is an Aadhaar number generated?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "500 Server Error: Internal Server Error for url: http://localhost:8001/retrieve"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 100.0,
            "cpu_after_percent": 100.0,
            "memory_before_mb": 25.09375,
            "memory_after_mb": 25.15625,
            "memory_delta_mb": 0.0625
          }
        },
        {
          "model": "deepseek-coder:1.3b",
          "question_id": 19,
          "question": "What should a resident do if there is an error in their Aadhaar information?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "500 Server Error: Internal Server Error for url: http://localhost:8001/retrieve"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 100.0,
            "cpu_after_percent": 100.0,
            "memory_before_mb": 25.15625,
            "memory_after_mb": 25.1640625,
            "memory_delta_mb": 0.0078125
          }
        },
        {
          "model": "deepseek-coder:1.3b",
          "question_id": 20,
          "question": "What is demographic authentication?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "500 Server Error: Internal Server Error for url: http://localhost:8001/retrieve"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 57.1,
            "cpu_after_percent": 100.0,
            "memory_before_mb": 25.1640625,
            "memory_after_mb": 25.1640625,
            "memory_delta_mb": 0
          }
        },
        {
          "model": "deepseek-coder:1.3b",
          "question_id": 21,
          "question": "What is biometric authentication?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": 3.855437895999785,
            "pages": [
              20,
              64,
              52
            ],
            "distances": [
              0.6603267192840576,
              0.6823380589485168,
              0.6998177766799927
            ],
            "results": [
              {
                "source": "UIAI_1.pdf",
                "page": 20,
                "chunk": "r c aptured biome tric da ta of a r esident, his/her Aadhaar is deactiv ated t emporarily and the Aadhaar holder is duly notified of this. If y our Aadhaar gets suspended, you would not be able to avail any service based on Aadhaar OTP/ biometric authentication. In such c ases, the Aadhaar holder needs to follow the below steps: 1. R efer t o the e mail/ SMS/ le tter b y UID AI or c all 1947 t o kno w sub sequent c ourse of action. 2. If the deactiv ation is due t o biome trics r elated r eason, visit an y Aadhaar Enr olment Cen tre and update your biometrics. Name can be updated TWICE Gender can be updated only ONCE Want to update Date of Birth, Name and Gender in Aadhaar? Date of birth can be updated only ONCE NOTE THE FOLLOWING",
                "distance": 0.6603267192840576
              },
              {
                "source": "UIAI_1.pdf",
                "page": 64,
                "chunk": "Unique Identification Authority of India Government of India 64Aadhaar Handbook for Residents 2021-Ver.2.0 Verify Aadhaar SCAN Lock/ Unlock Aadhaar SCAN Check your Aadhaar Update History SCAN Update Address Without Documents SCAN Secure QR Code SCAN Locate Aadhaar Enrolment Centre SCAN Verify Digital Signature SCAN Get back your lost Aadhaar number or Enrolment ID SCAN Check status of your Aadhaar enrolment or update request SCAN mAadhaar App SCAN Download Aadhaar SCAN Generate/ Retrieve VID SCAN Check your Aadhaar Authentication History SCAN Check Status of your online update request SCAN Online Appointment Booking SCAN Update Address Online SCAN What is EID SCAN Lock/ Unlock Biometrics SCAN Order Aadhaar Reprint SCAN Aadhaar Chatbot SCAN 13.5 Aadhaar T utorial Videos",
                "distance": 0.6823380589485168
              },
              {
                "source": "UIAI_1.pdf",
                "page": 52,
                "chunk": "Unique Identification Authority of India Government of India 52Aadhaar Handbook for Residents 2021-Ver.2.0 the r elationship be tween the link ed par ent/guardian and the child shall be c ollected a t the time of enr olment. Only those childr en c an be enr olled based on the r elationship documen t (P oR), whose names ar e r ecorded in the r elationship documen t. 6. Enr olment of residents with biometric exceptions. \u2014 (1) F or r esidents who ar e unable t o pr ovide fing erprints, o wing t o r easons such as injur y, de formities, amput ation of the fing ers/ hands or an y other r elevant r eason, only iris scans of such residents will be collected. (2) F or r esidents who ar e unable t o pr ovide an y biome tric in formation c ontemplated b y these r egulations, the Authority shall pr ovide f or han dling of such e xceptions in the enrolment and upda te software, and such enr olment shall be carried out as per the procedure as may be specified by the Authority for this purpose. 12.2",
                "distance": 0.6998177766799927
              }
            ],
            "error": null
          },
          "context": "\nSource: UIAI_1.pdf\nPage: 20\n\nr c aptured biome tric da ta of a r esident, his/her Aadhaar is deactiv ated t emporarily and the Aadhaar holder is duly notified of this. If y our Aadhaar gets suspended, you would not be able to avail any service based on Aadhaar OTP/ biometric authentication. In such c ases, the Aadhaar holder needs to follow the below steps: 1. R efer t o the e mail/ SMS/ le tter b y UID AI or c all 1947 t o kno w sub sequent c ourse of action. 2. If the deactiv ation is due t o biome trics r elated r eason, visit an y Aadhaar Enr olment Cen tre and update your biometrics. Name can be updated TWICE Gender can be updated only ONCE Want to update Date of Birth, Name and Gender in Aadhaar? Date of birth can be updated only ONCE NOTE THE FOLLOWING\n\n\nSource: UIAI_1.pdf\nPage: 64\n\nUnique Identification Authority of India Government of India 64Aadhaar Handbook for Residents 2021-Ver.2.0 Verify Aadhaar SCAN Lock/ Unlock Aadhaar SCAN Check your Aadhaar Update History SCAN Update Address Without Documents SCAN Secure QR Code SCAN Locate Aadhaar Enrolment Centre SCAN Verify Digital Signature SCAN Get back your lost Aadhaar number or Enrolment ID SCAN Check status of your Aadhaar enrolment or update request SCAN mAadhaar App SCAN Download Aadhaar SCAN Generate/ Retrieve VID SCAN Check your Aadhaar Authentication History SCAN Check Status of your online update request SCAN Online Appointment Booking SCAN Update Address Online SCAN What is EID SCAN Lock/ Unlock Biometrics SCAN Order Aadhaar Reprint SCAN Aadhaar Chatbot SCAN 13.5 Aadhaar T utorial Videos\n\n\nSource: UIAI_1.pdf\nPage: 52\n\nUnique Identification Authority of India Government of India 52Aadhaar Handbook for Residents 2021-Ver.2.0 the r elationship be tween the link ed par ent/guardian and the child shall be c ollected a t the time of enr olment. Only those childr en c an be enr olled based on the r elationship documen t (P oR), whose names ar e r ecorded in the r elationship documen t. 6. Enr olment of residents with biometric exceptions. \u2014 (1) F or r esidents who ar e unable t o pr ovide fing erprints, o wing t o r easons such as injur y, de formities, amput ation of the fing ers/ hands or an y other r elevant r eason, only iris scans of such residents will be collected. (2) F or r esidents who ar e unable t o pr ovide an y biome tric in formation c ontemplated b y these r egulations, the Authority shall pr ovide f or han dling of such e xceptions in the enrolment and upda te software, and such enr olment shall be carried out as per the procedure as may be specified by the Authority for this purpose. 12.2\n",
          "generation": {
            "answer": "Biometrics refers to a method of identification that uses physical attributes, such as fingerprints or facial recognition technology in combination with other data points (like date of birth and gender). It's used for various purposes like user verification during login attempts. The main advantage is it can be more secure than traditional methods because the biometric information isn\u2019t stored on a person but rather generated by their physical attributes, which are less likely to change or get lost due to exposure to environmental factors such as light and temperature changes in an environmentally friendly manner (like home).\n",
            "latency_seconds": 83.8727302849984,
            "prompt_tokens": 1041,
            "output_tokens": 116,
            "total_tokens": 1157,
            "total_duration_ns": 83847730598,
            "load_duration_ns": 6179215186,
            "prompt_eval_duration_ns": 23961486000,
            "eval_duration_ns": 12846186000,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 96.8,
            "cpu_after_percent": 13.0,
            "memory_before_mb": 25.1640625,
            "memory_after_mb": 25.1015625,
            "memory_delta_mb": 0
          }
        },
        {
          "model": "deepseek-coder:1.3b",
          "question_id": 22,
          "question": "What is Aadhaar authentication?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": 1.0985108989989385,
            "pages": [
              33,
              37,
              4
            ],
            "distances": [
              0.342551589012146,
              0.3674051761627197,
              0.38354194164276123
            ],
            "results": [
              {
                "source": "UIAI_1.pdf",
                "page": 33,
                "chunk": "Unique Identification Authority of India Government of India 33 Aadhaar Handbook for Residents 2021-Ver.2.0 7.2 Secur e QR Code on Aadhaar Th e Aadhaar letter, Aadhaar PVC Card and eAadhaar contain a digit ally signed secure QR code that has demographic details of the Aadhaar holder with photograph. This QR Code can be used to verify the identity of the Aadhaar holder . Th e service provider needs to use Aadhaar QR Code Scanner App (also available in mAadhaar) to scan the Secure QR Code on the presented Aadhaar. Aadhaar Offline Verification made easy using Secure QR Code To read more about Secure QR Code SCAN To watch tutorial on the Secure QR Code SCAN",
                "distance": 0.342551589012146
              },
              {
                "source": "UIAI_1.pdf",
                "page": 37,
                "chunk": "Unique Identification Authority of India Government of India 37 Aadhaar Handbook for Residents 2021-Ver.2.0 To read FAQs SCAN \u2022 Aadhaar Authentication History: Using this service, you can g et de tails of authen tication perf ormed b y y ou in pas t 6 mon ths. The OTP for this service will be sent to your registered mobile number. \u2022 Offline eKYC Service: Using this service, you can generate your digitally signed Aadhaar details that you may use for KYC purposes. To know more about Aadhaar Authentication History SCAN To know more about Aadhaar Paperless Offline eKYC: SCAN 8.3 Fr equently Asked Questions UID AI also has e xtensive F AQs section on the w ebsite and mAadhaar app to help residents understand Aadhaar process, services and products.",
                "distance": 0.3674051761627197
              },
              {
                "source": "UIAI_1.pdf",
                "page": 4,
                "chunk": "eration 26 6.2 Aadhaar Letter 26 6.3 Do wnload eAadhaar 27 6.3.1 O TP to download Aadhaar & Password 28 6.3.2 Validating the digital signature on eAadhaar 28 6.3.3 Do wnloaded Aadhaar is legally valid 28 6.3.4 F eatures of eAadhaar 29 6.4 Aadhaar P VC Card 29 6.5 mAadhaar Mob ile App 30 SE CTION 7: VERIFICATION OF AADHAAR 3 2 7.1 V erify any Aadhaar Online 32 7.2 Secur e QR Code on Aadhaar 33 SE CTION 8: AADHAAR ONLINE SERVICES 34 8.1 Aadhaar Online Services (that DO NOT require Registered Mobile Number) 34 8.2 Aadhaar Online Services (that require Registered Mobile Number) 35 8.3 Frequently Asked Questions 37 SE CTION 9: PRIVACY AND SECURITY OF YOUR AADHAAR DATA 38 9.1 UIDAI Protecting privacy and information 38 9.2 Da ta Security in CIDR 39",
                "distance": 0.38354194164276123
              }
            ],
            "error": null
          },
          "context": "\nSource: UIAI_1.pdf\nPage: 33\n\nUnique Identification Authority of India Government of India 33 Aadhaar Handbook for Residents 2021-Ver.2.0 7.2 Secur e QR Code on Aadhaar Th e Aadhaar letter, Aadhaar PVC Card and eAadhaar contain a digit ally signed secure QR code that has demographic details of the Aadhaar holder with photograph. This QR Code can be used to verify the identity of the Aadhaar holder . Th e service provider needs to use Aadhaar QR Code Scanner App (also available in mAadhaar) to scan the Secure QR Code on the presented Aadhaar. Aadhaar Offline Verification made easy using Secure QR Code To read more about Secure QR Code SCAN To watch tutorial on the Secure QR Code SCAN\n\n\nSource: UIAI_1.pdf\nPage: 37\n\nUnique Identification Authority of India Government of India 37 Aadhaar Handbook for Residents 2021-Ver.2.0 To read FAQs SCAN \u2022 Aadhaar Authentication History: Using this service, you can g et de tails of authen tication perf ormed b y y ou in pas t 6 mon ths. The OTP for this service will be sent to your registered mobile number. \u2022 Offline eKYC Service: Using this service, you can generate your digitally signed Aadhaar details that you may use for KYC purposes. To know more about Aadhaar Authentication History SCAN To know more about Aadhaar Paperless Offline eKYC: SCAN 8.3 Fr equently Asked Questions UID AI also has e xtensive F AQs section on the w ebsite and mAadhaar app to help residents understand Aadhaar process, services and products.\n\n\nSource: UIAI_1.pdf\nPage: 4\n\neration 26 6.2 Aadhaar Letter 26 6.3 Do wnload eAadhaar 27 6.3.1 O TP to download Aadhaar & Password 28 6.3.2 Validating the digital signature on eAadhaar 28 6.3.3 Do wnloaded Aadhaar is legally valid 28 6.3.4 F eatures of eAadhaar 29 6.4 Aadhaar P VC Card 29 6.5 mAadhaar Mob ile App 30 SE CTION 7: VERIFICATION OF AADHAAR 3 2 7.1 V erify any Aadhaar Online 32 7.2 Secur e QR Code on Aadhaar 33 SE CTION 8: AADHAAR ONLINE SERVICES 34 8.1 Aadhaar Online Services (that DO NOT require Registered Mobile Number) 34 8.2 Aadhaar Online Services (that require Registered Mobile Number) 35 8.3 Frequently Asked Questions 37 SE CTION 9: PRIVACY AND SECURITY OF YOUR AADHAAR DATA 38 9.1 UIDAI Protecting privacy and information 38 9.2 Da ta Security in CIDR 39\n",
          "generation": {
            "answer": "Aadhaar Authentication refers to the process of verifying a person's identity using their digital signature on an individual\u2019s personal card (aadhaar). This method ensures that only individuals who possess valid credentials can access and use services provided by AIDP. The verification is done through QR codes or paper forms, which are digitally signed with the holder's name, date of birth etc., along with a unique identifier issued by an authority in India (Aadhaar Unique Identification Authority).\n",
            "latency_seconds": 126.48119086699808,
            "prompt_tokens": 1017,
            "output_tokens": 109,
            "total_tokens": 1126,
            "total_duration_ns": 126461655262,
            "load_duration_ns": 197635778,
            "prompt_eval_duration_ns": 137565000,
            "eval_duration_ns": 12294282000,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 13.0,
            "cpu_after_percent": 48.1,
            "memory_before_mb": 25.10546875,
            "memory_after_mb": 23.3984375,
            "memory_delta_mb": 0
          }
        },
        {
          "model": "deepseek-coder:1.3b",
          "question_id": 23,
          "question": "Can a resident update Aadhaar information?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": 0.523309780001,
            "pages": [
              16,
              16,
              21
            ],
            "distances": [
              0.415986031293869,
              0.4215809404850006,
              0.42346474528312683
            ],
            "results": [
              {
                "source": "UIAI_1.pdf",
                "page": 16,
                "chunk": "should check details of your Aadhaar for any other required update. 3.1 Documen ts Required for Update Y ou need t o submit a v alid supporting documen t f or v erification f or upda ting f ollowing de tails in y our Aadhaar: \u2022 Name \u2022 Addr ess \u2022 Da te of Birth When you update your Aadhaar, only your Aadhaar details get updated, the Aadhaar number shall remain same.",
                "distance": 0.415986031293869
              },
              {
                "source": "UIAI_1.pdf",
                "page": 16,
                "chunk": "Unique Identification Authority of India Government of India 16Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 3: AADHAAR UPDATE You can update any demographic details (name, address, date of birth, gender, mobile number or email ID), or biometric details (photograph, fingerprints, iris scan) in your Aadhaar from any Aadhaar Enrolment Centre across the country. You can get more than one entry updated in Aadhaar Enrolment Centre at the same time . The fee for update of single entry (such as address) and multiple entries (such as address, mobile phone number, email address etc.) is the same. So upda ting all those en tries t ogether which need t o be upda ted is both c onvenient and c ost e ffective f or y ou. Ther efore, be fore visiting Aadhaar Enr olment Cen tre f or an upda te, y ou should check details of your Aadhaar for any other required update. 3.1 Documen ts Required for Update Y ou need t o submit a v alid supporting documen t f or v erification f or upda ting f ollowing d",
                "distance": 0.4215809404850006
              },
              {
                "source": "UIAI_1.pdf",
                "page": 21,
                "chunk": "Unique Identification Authority of India Government of India 21 Aadhaar Handbook for Residents 2021-Ver.2.0 3. If the deactiv ation is due t o docu ments r elated r eason, c ontact/visit the c oncerned Aadhaar Regional Office for update after due diligence. 3.8 Aadhaar Upd ate Status Check Y ou can use the 8 digit Update Request Number (URN) mentioned on the upda te ackno wledgement slip t o check the s tatus of your Aadhaar update request from: \u2022 Calling Aadhaar helpline \u2013 1947 \u2022 Sending email t o help@uidai.gov.in \u2022 Visiting uidai.gov.in \u2022 Thr ough mAadhaar App On success ful submission of an online address update request via SSUP , you receive a URN (Update Request Number). This is shown on screen and also sent via SMS to your registered mobile number. Use this URN and your Aadhaar number to track s tatus of y our Aadhaar upda te fr om: h ttps://ssup.uidai. gov.in/checkSSUPStatus/checkupdatestatus. 3.9 P oints to remember for Aadhaar Update at Aadhaar Enrolment Centre 1. An y Aadhaa",
                "distance": 0.42346474528312683
              }
            ],
            "error": null
          },
          "context": "\nSource: UIAI_1.pdf\nPage: 16\n\nshould check details of your Aadhaar for any other required update. 3.1 Documen ts Required for Update Y ou need t o submit a v alid supporting documen t f or v erification f or upda ting f ollowing de tails in y our Aadhaar: \u2022 Name \u2022 Addr ess \u2022 Da te of Birth When you update your Aadhaar, only your Aadhaar details get updated, the Aadhaar number shall remain same.\n\n\nSource: UIAI_1.pdf\nPage: 16\n\nUnique Identification Authority of India Government of India 16Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 3: AADHAAR UPDATE You can update any demographic details (name, address, date of birth, gender, mobile number or email ID), or biometric details (photograph, fingerprints, iris scan) in your Aadhaar from any Aadhaar Enrolment Centre across the country. You can get more than one entry updated in Aadhaar Enrolment Centre at the same time . The fee for update of single entry (such as address) and multiple entries (such as address, mobile phone number, email address etc.) is the same. So upda ting all those en tries t ogether which need t o be upda ted is both c onvenient and c ost e ffective f or y ou. Ther efore, be fore visiting Aadhaar Enr olment Cen tre f or an upda te, y ou should check details of your Aadhaar for any other required update. 3.1 Documen ts Required for Update Y ou need t o submit a v alid supporting documen t f or v erification f or upda ting f ollowing d\n\n\nSource: UIAI_1.pdf\nPage: 21\n\nUnique Identification Authority of India Government of India 21 Aadhaar Handbook for Residents 2021-Ver.2.0 3. If the deactiv ation is due t o docu ments r elated r eason, c ontact/visit the c oncerned Aadhaar Regional Office for update after due diligence. 3.8 Aadhaar Upd ate Status Check Y ou can use the 8 digit Update Request Number (URN) mentioned on the upda te ackno wledgement slip t o check the s tatus of your Aadhaar update request from: \u2022 Calling Aadhaar helpline \u2013 1947 \u2022 Sending email t o help@uidai.gov.in \u2022 Visiting uidai.gov.in \u2022 Thr ough mAadhaar App On success ful submission of an online address update request via SSUP , you receive a URN (Update Request Number). This is shown on screen and also sent via SMS to your registered mobile number. Use this URN and your Aadhaar number to track s tatus of y our Aadhaar upda te fr om: h ttps://ssup.uidai. gov.in/checkSSUPStatus/checkupdatestatus. 3.9 P oints to remember for Aadhaar Update at Aadhaar Enrolment Centre 1. An y Aadhaa\n",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": "HTTPConnectionPool(host='localhost', port=11434): Read timed out. (read timeout=300)"
          },
          "resources": {
            "cpu_before_percent": 34.6,
            "cpu_after_percent": 89.3,
            "memory_before_mb": 23.44140625,
            "memory_after_mb": 22.6640625,
            "memory_delta_mb": 0
          }
        },
        {
          "model": "deepseek-coder:1.3b",
          "question_id": 24,
          "question": "What types of information can be updated in Aadhaar?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": null,
            "pages": [],
            "distances": [],
            "results": [],
            "error": "HTTPConnectionPool(host='localhost', port=8001): Read timed out. (read timeout=120)"
          },
          "context": "",
          "generation": {
            "answer": null,
            "latency_seconds": null,
            "prompt_tokens": 0,
            "output_tokens": 0,
            "total_tokens": 0,
            "total_duration_ns": 0,
            "load_duration_ns": 0,
            "prompt_eval_duration_ns": 0,
            "eval_duration_ns": 0,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 69.5,
            "cpu_after_percent": 64.3,
            "memory_before_mb": 21.0703125,
            "memory_after_mb": 22.8984375,
            "memory_delta_mb": 1.828125
          }
        },
        {
          "model": "deepseek-coder:1.3b",
          "question_id": 25,
          "question": "What should be done if the requested information is not available in the Aadhaar Handbook?",
          "retrieval": {
            "top_k": 3,
            "latency_seconds": 57.540396034997684,
            "pages": [
              16,
              20,
              21
            ],
            "distances": [
              0.4864501953125,
              0.49763184785842896,
              0.5259160995483398
            ],
            "results": [
              {
                "source": "UIAI_1.pdf",
                "page": 16,
                "chunk": "should check details of your Aadhaar for any other required update. 3.1 Documen ts Required for Update Y ou need t o submit a v alid supporting documen t f or v erification f or upda ting f ollowing de tails in y our Aadhaar: \u2022 Name \u2022 Addr ess \u2022 Da te of Birth When you update your Aadhaar, only your Aadhaar details get updated, the Aadhaar number shall remain same.",
                "distance": 0.4864501953125
              },
              {
                "source": "UIAI_1.pdf",
                "page": 20,
                "chunk": "lds (name, gender and date of birth) in y our Aadhaar again (beyond the permissible limit), you need to: 1. Visit an y Aadhaar Enr olment Cen tre (with v alid supporting docume nt f or N ame & Da te of Birth upda te) 2. Place an up date request 3. Send the latest URN (Update Request Number) to Aadhaar help centre by calling 1947 or via email to help@uidai.gov.in and request for \u2018exception update\u2019 The c ase is then assigne d t o the UID AI\u2019s R egional Office tha t handles y our r egion f or due dilig ence. Once verified, your update request will be processed and the outcome communicated to you. 3.7 Upda te in case of Aadhaar Deactivation Y our Aadhaar data is subject to periodic quality checks. During such quality checks by UIDAI, if any discr epancy is f ound in the supporting documen ts or c aptured biome tric da ta of a r esident, his/her Aadhaar is deactiv ated t emporarily and the Aadhaar holder is duly notified of this. If y our Aadhaar gets suspended, you would not be able to ava",
                "distance": 0.49763184785842896
              },
              {
                "source": "UIAI_1.pdf",
                "page": 21,
                "chunk": "Update Request Number, follow the process to retrieve EID as described in Sec. 2.5.1 5. If your update request gets rejected, you can call 1947 and get the reason for rejection and take corrective measure before you place another update request. 6. If your Aadhaar shows \u2018Invalid\u2019 , call 1947 to get further guidance. 7. If your Aadhaar letter has only \u2018Year of Birth\u2019 printed, DO NOT UPDATE. Just download your latest Aadhaar or Order Aadhaar Reprint from uidai.gov.in to get your Aadhaar showing complete Date of Birth. 3.10 P oints to remember for Aadhaar Update A r esident who is an Aadhaar number hold er ma y, upon a ttaining the ag e of eigh teen y ears, mak e an applic ation f or c ancellation of his/her Aadhaar number t o R egional Office of UID AI within a period of six months from the date of attaining the age of eighteen years. Th e r esident will be r equired t o visit the R egional Office a t a s tipulated da te and time f or es tablishing his/her iden tity thr ough Aadhaar auth",
                "distance": 0.5259160995483398
              }
            ],
            "error": null
          },
          "context": "\nSource: UIAI_1.pdf\nPage: 16\n\nshould check details of your Aadhaar for any other required update. 3.1 Documen ts Required for Update Y ou need t o submit a v alid supporting documen t f or v erification f or upda ting f ollowing de tails in y our Aadhaar: \u2022 Name \u2022 Addr ess \u2022 Da te of Birth When you update your Aadhaar, only your Aadhaar details get updated, the Aadhaar number shall remain same.\n\n\nSource: UIAI_1.pdf\nPage: 20\n\nlds (name, gender and date of birth) in y our Aadhaar again (beyond the permissible limit), you need to: 1. Visit an y Aadhaar Enr olment Cen tre (with v alid supporting docume nt f or N ame & Da te of Birth upda te) 2. Place an up date request 3. Send the latest URN (Update Request Number) to Aadhaar help centre by calling 1947 or via email to help@uidai.gov.in and request for \u2018exception update\u2019 The c ase is then assigne d t o the UID AI\u2019s R egional Office tha t handles y our r egion f or due dilig ence. Once verified, your update request will be processed and the outcome communicated to you. 3.7 Upda te in case of Aadhaar Deactivation Y our Aadhaar data is subject to periodic quality checks. During such quality checks by UIDAI, if any discr epancy is f ound in the supporting documen ts or c aptured biome tric da ta of a r esident, his/her Aadhaar is deactiv ated t emporarily and the Aadhaar holder is duly notified of this. If y our Aadhaar gets suspended, you would not be able to ava\n\n\nSource: UIAI_1.pdf\nPage: 21\n\nUpdate Request Number, follow the process to retrieve EID as described in Sec. 2.5.1 5. If your update request gets rejected, you can call 1947 and get the reason for rejection and take corrective measure before you place another update request. 6. If your Aadhaar shows \u2018Invalid\u2019 , call 1947 to get further guidance. 7. If your Aadhaar letter has only \u2018Year of Birth\u2019 printed, DO NOT UPDATE. Just download your latest Aadhaar or Order Aadhaar Reprint from uidai.gov.in to get your Aadhaar showing complete Date of Birth. 3.10 P oints to remember for Aadhaar Update A r esident who is an Aadhaar number hold er ma y, upon a ttaining the ag e of eigh teen y ears, mak e an applic ation f or c ancellation of his/her Aadhaar number t o R egional Office of UID AI within a period of six months from the date of attaining the age of eighteen years. Th e r esident will be r equired t o visit the R egional Office a t a s tipulated da te and time f or es tablishing his/her iden tity thr ough Aadhaar auth\n",
          "generation": {
            "answer": "The user's question seems to relate more towards personal data protection and privacy issues rather than computer science. However, I can provide a general advice on how you might handle such situations when accessing or updating an individual\u2019s information in the context of Aadhaar (UIAI_1). \n\nIf requested details are not available within your own system's database but still accessible through other sources like UIDAI portal, then:\n- You should contact their support team for further assistance. They can provide you with more specific instructions or even guide on how to update the Aadhaar information yourself if they have access rights and permissions set up in place by your organization's IT department/security administration system (like Active Directory). \n  \nIf requested details are not available at all, then:\n- You should request for a new document or provide an alternative method of updating the Aadhaar information. This could be through emailing them with instructions on how to update their personal data and providing it in PDF format if possible (to avoid issues related to file size). \n  \nRemember that these are general advice, so you should consult your organization's IT department or security administration system for specific details about accessing Aadhaar information. Also note the legal implications of updating an individual\u2019s personal data and how it may affect their right to access this kind of sensitive info in future if they don't have permission from a trusted source (like UIDAI).\n",
            "latency_seconds": 52.35936282599869,
            "prompt_tokens": 1001,
            "output_tokens": 306,
            "total_tokens": 1307,
            "total_duration_ns": 52337293173,
            "load_duration_ns": 2480137441,
            "prompt_eval_duration_ns": 23275078000,
            "eval_duration_ns": 26547686000,
            "error": null
          },
          "resources": {
            "cpu_before_percent": 77.5,
            "cpu_after_percent": 0.0,
            "memory_before_mb": 21.94921875,
            "memory_after_mb": 25.0703125,
            "memory_delta_mb": 3.12109375
          }
        }
      ]
    }
  ]
};
