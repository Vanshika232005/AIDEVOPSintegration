export const ragAnalysisData = {
  "evaluation_version": "week4_rag_analysis_25_newmodels",
  "record_count": 75,
  "methodology": {
    "retrieved_context": "The exact context retrieved by the Week 3 retrieval service and passed to the LLM.",
    "context_support": "A retrieved chunk is considered to provide lexical support for an expected fact when normalized token overlap with that fact is at least 0.25. This is an automated proxy, not human semantic judgment.",
    "gold_location": "A retrieved source/page pair is a gold location when it matches a source/page specified by quality_rubric.json.",
    "unsupported_claim_signal": "Conservative screening patterns only. A signal does not prove hallucination.",
    "assessment": "Qualitative automated classification of the retrieval-context-response relationship."
  },
  "records": [
    {
      "question_id": 1,
      "question": "What documents are required for Aadhaar enrolment?",
      "model": "qwen2.5-coder:1.5b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.073206042000038,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 9
          },
          {
            "source": "UIAI_1.pdf",
            "page": 10
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63
          },
          {
            "source": "UIAI_2.pdf",
            "page": 1
          },
          {
            "source": "UIAI_2.pdf",
            "page": 9
          },
          {
            "source": "UIAI_2.pdf",
            "page": 13
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 9,
            "distance": 0.28995370864868164,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "A valid Date of Birth (DoB) document is required when available.",
                "overlap": 0.2857
              },
              {
                "fact": "Introducer based enrolment is possible when the required documents are unavailable.",
                "overlap": 0.2857
              }
            ],
            "chunk": "a valid document, you have to produce that for Aadhaar enrolment. In case you do not ha ve docu ments in y our name, y ou c an also use a certific ate issued b y authoriz ed official (r efer t o Anne x. II). UID AI has de fined a s tandard f ormat f or this certific ate. R efer t o the Lis t of Accep table Supporting Documen ts f or V erification a vailable a t: h ttps://uidai.gov.in/images/ commdoc/valid_documents_list.pdf To download Aadhaar Enrolment Form: SCAN To get details of nearby Aadhaar Enrolment Centre: SCAN Carry original documents to Aadhaar centre. These are scanned and given back to you. The document for Aadhaar enrolment should have your name. For List of Valid Supporting Documents SCAN"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 1,
            "distance": 0.30845996737480164,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Proof of Identity (POI) is required.",
                "overlap": 0.5
              },
              {
                "fact": "Proof of Address (POA) is required.",
                "overlap": 0.5
              },
              {
                "fact": "A valid Date of Birth (DoB) document is required when available.",
                "overlap": 0.2857
              },
              {
                "fact": "Head of Family (HoF) based enrolment can use Proof of Relationship (PoR), the HoF Aadhaar number, and biometric confirmation of the HoF when individual documents are unavailable.",
                "overlap": 0.4667
              },
              {
                "fact": "Introducer based enrolment is possible when the required documents are unavailable.",
                "overlap": 0.2857
              }
            ],
            "chunk": "List of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan LIST OF ACCEPTABLE DOCUMENTS FOR ENROLMENT AND UPDATE List I - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar of individual up to five years of age List II - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar of individual five years and above and less than eighteen years of age List III - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar Number of individual eighteen years and above of age List IV - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for update of information in respect of Aadhaar Number Holder of any age"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 2,
        "expected_fact_count": 5,
        "facts_with_context_support": [
          "Proof of Identity (POI) is required.",
          "Proof of Address (POA) is required.",
          "A valid Date of Birth (DoB) document is required when available.",
          "Head of Family (HoF) based enrolment can use Proof of Relationship (PoR), the HoF Aadhaar number, and biometric confirmation of the HoF when individual documents are unavailable.",
          "Introducer based enrolment is possible when the required documents are unavailable."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 9,
            "distance": 0.28995370864868164,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "A valid Date of Birth (DoB) document is required when available.",
                "overlap": 0.2857
              },
              {
                "fact": "Introducer based enrolment is possible when the required documents are unavailable.",
                "overlap": 0.2857
              }
            ],
            "chunk": "a valid document, you have to produce that for Aadhaar enrolment. In case you do not ha ve docu ments in y our name, y ou c an also use a certific ate issued b y authoriz ed official (r efer t o Anne x. II). UID AI has de fined a s tandard f ormat f or this certific ate. R efer t o the Lis t of Accep table Supporting Documen ts f or V erification a vailable a t: h ttps://uidai.gov.in/images/ commdoc/valid_documents_list.pdf To download Aadhaar Enrolment Form: SCAN To get details of nearby Aadhaar Enrolment Centre: SCAN Carry original documents to Aadhaar centre. These are scanned and given back to you. The document for Aadhaar enrolment should have your name. For List of Valid Supporting Documents SCAN"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 1,
            "distance": 0.30845996737480164,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Proof of Identity (POI) is required.",
                "overlap": 0.5
              },
              {
                "fact": "Proof of Address (POA) is required.",
                "overlap": 0.5
              },
              {
                "fact": "A valid Date of Birth (DoB) document is required when available.",
                "overlap": 0.2857
              },
              {
                "fact": "Head of Family (HoF) based enrolment can use Proof of Relationship (PoR), the HoF Aadhaar number, and biometric confirmation of the HoF when individual documents are unavailable.",
                "overlap": 0.4667
              },
              {
                "fact": "Introducer based enrolment is possible when the required documents are unavailable.",
                "overlap": 0.2857
              }
            ],
            "chunk": "List of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan LIST OF ACCEPTABLE DOCUMENTS FOR ENROLMENT AND UPDATE List I - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar of individual up to five years of age List II - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar of individual five years and above and less than eighteen years of age List III - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar Number of individual eighteen years and above of age List IV - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for update of information in respect of Aadhaar Number Holder of any age"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 2,
            "distance": 0.3144756555557251,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Proof of Identity (POI) is required.",
                "overlap": 0.75
              },
              {
                "fact": "Proof of Address (POA) is required.",
                "overlap": 0.25
              },
              {
                "fact": "A valid Date of Birth (DoB) document is required when available.",
                "overlap": 0.5714
              },
              {
                "fact": "Head of Family (HoF) based enrolment can use Proof of Relationship (PoR), the HoF Aadhaar number, and biometric confirmation of the HoF when individual documents are unavailable.",
                "overlap": 0.6667
              },
              {
                "fact": "Introducer based enrolment is possible when the required documents are unavailable.",
                "overlap": 0.4286
              }
            ],
            "chunk": "List of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan Enrolment Type I: Head of the Family (HoF) based enrolment Sl. No. List of documents (see note below this tabular statement) Proof of Relationship (PoR) document, containing name of child and name of Head of Family (HoF) Proof of Date of Birth (PDB) document, containing name and date of birth 1. Birth certificate issued under the Registration of Births and Deaths Act, 1969 and the rules made thereunder \uf0fe \uf0fe 2. Valid Indian Passport (only applicable for NRIs) \uf0fe \uf0fe 3. Document to prove legal guardianship issued by the Central government or a State Government authority or a court of law under the relevant Acts (the Guardians and Wards Act, 1890 / the National Trust Act, 1999 / the Rights of Persons with Disabilities Act, 2016) and the rules made under these Acts \uf0fe \uf0fd Enrolment Type II: Document based enrolment Sl. No. List of documents (see note below this tabular statement) Proof of Identity (PoI) document, c"
          }
        ]
      },
      "response": {
        "answer": "The information was not found in the provided Aadhaar Handbook.",
        "latency_seconds": 14.166685232999953,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 5,
        "facts_missing_from_context": 0,
        "model_abstained": true,
        "unsupported_claim_signal": false,
        "assessment": "Relevant evidence was retrieved, but the model abstained despite sufficient context."
      }
    },
    {
      "question_id": 2,
      "question": "What is Aadhaar enrolment?",
      "model": "qwen2.5-coder:1.5b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.2442204199999196,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 8
          },
          {
            "source": "UIAI_1.pdf",
            "page": 9
          },
          {
            "source": "UIAI_1.pdf",
            "page": 10
          },
          {
            "source": "UIAI_1.pdf",
            "page": 50
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 8,
            "distance": 0.39678889513015747,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Aadhaar enrolment is the process of registering a resident for Aadhaar.",
                "overlap": 0.8
              },
              {
                "fact": "The enrolment process captures the resident's demographic and biometric information.",
                "overlap": 0.7143
              },
              {
                "fact": "Aadhaar enrolment is free.",
                "overlap": 1.0
              },
              {
                "fact": "A resident can enrol for Aadhaar only once.",
                "overlap": 1.0
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 8Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 2: HOW TO ENROL FOR AADHAAR? Visit Aadhaar Enrolment Centre Fill Aadhaar Enrolment/ Update F orm Check & Confirm All Spellings on screen Submit Valid Give Demographic & Biometric Data You get SMS of Aadhaar generation Documents for Scanning Collect your documents & Enrolment slip To g et Aadhaar , y ou ha ve t o enr oll b y pr oviding minimal demogr aphic and biome tric in formation during the enr olment process, which is totally free of cost. Please note that you need to enroll for Aadhaar only once. 2.1 En rolment Process Please do Check & Confirm all data shown on the resident screen, before the operator submits your Packet"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 1,
        "expected_fact_count": 4,
        "facts_with_context_support": [
          "Aadhaar enrolment is the process of registering a resident for Aadhaar.",
          "The enrolment process captures the resident's demographic and biometric information.",
          "Aadhaar enrolment is free.",
          "A resident can enrol for Aadhaar only once."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 8,
            "distance": 0.39678889513015747,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Aadhaar enrolment is the process of registering a resident for Aadhaar.",
                "overlap": 0.8
              },
              {
                "fact": "The enrolment process captures the resident's demographic and biometric information.",
                "overlap": 0.7143
              },
              {
                "fact": "Aadhaar enrolment is free.",
                "overlap": 1.0
              },
              {
                "fact": "A resident can enrol for Aadhaar only once.",
                "overlap": 1.0
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 8Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 2: HOW TO ENROL FOR AADHAAR? Visit Aadhaar Enrolment Centre Fill Aadhaar Enrolment/ Update F orm Check & Confirm All Spellings on screen Submit Valid Give Demographic & Biometric Data You get SMS of Aadhaar generation Documents for Scanning Collect your documents & Enrolment slip To g et Aadhaar , y ou ha ve t o enr oll b y pr oviding minimal demogr aphic and biome tric in formation during the enr olment process, which is totally free of cost. Please note that you need to enroll for Aadhaar only once. 2.1 En rolment Process Please do Check & Confirm all data shown on the resident screen, before the operator submits your Packet"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 11,
            "distance": 0.4528173804283142,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Aadhaar enrolment is the process of registering a resident for Aadhaar.",
                "overlap": 0.4
              },
              {
                "fact": "The enrolment process captures the resident's demographic and biometric information.",
                "overlap": 0.2857
              },
              {
                "fact": "Aadhaar enrolment is free.",
                "overlap": 0.6667
              },
              {
                "fact": "A resident can enrol for Aadhaar only once.",
                "overlap": 0.25
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 11 Aadhaar Handbook for Residents 2021-Ver.2.0 Ch ildren, including new born babies, can enroll for Aadhaar. The enrolment of children follows the below two methods as per the age of the child being enrolled. F or children below 5 years of age: T o enroll a child (from a new born to one below 5 years of age), Aadhaar authen tication b y one of the par ents or guardian of the child is required. Biometric data of children below the age of 5 years is not captured during their enrolment. The child\u2019 s name, da te of birth, g ender and phot ograph are captured. Their Aadhaar is linked to that of their parent/ guardian. Th e parent/ guardian needs to take the child to any nearby Aadhaar Enrolment Centre with the following documents: \u2022 Child\u2019 s Birth Certificate issued b y R egistrar of Birth, Municipal Corpor ation or an y other notified loc al g overnment bodies like T aluk, T ehsil e tc. OR Discharge card/ slip issued by Governmen"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 7,
            "distance": 0.453491747379303,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Aadhaar enrolment is the process of registering a resident for Aadhaar.",
                "overlap": 0.6
              },
              {
                "fact": "The enrolment process captures the resident's demographic and biometric information.",
                "overlap": 0.2857
              },
              {
                "fact": "Aadhaar enrolment is free.",
                "overlap": 0.6667
              },
              {
                "fact": "A resident can enrol for Aadhaar only once.",
                "overlap": 0.5
              }
            ],
            "chunk": "haar enrolment. 1.2.2 Aadh aar for NRIs If y ou are a non-resident Indian (NRI), you can enroll for Aadhaar if you have an Indian Passport. The mandate of 182 days does not apply for NRIs. You can visit an Aadhaar Enrolment Centre and enr oll f or Aadhaar as an NRI. Indian P assport is manda tory as Pr oof of Iden tity (P oI) f or NRIs. The app licant may choose to give any other Indian Proof of Address (PoA) from amongst the documents accepted by UIDAI (see Section 13.1, Annex \u2013 I of this handbook). 1.3 F eatures of Aadhaar 1.3.1 Aadh aar is an identifier Aadhaar is a 12-digit unique ID issued to an individual. Aadhaar use s de mographic in formation (name, da te of birth, g ender and addr ess), phot ograph of the f ace, fing erprints and iris t o ide ntify a r esident. The se it ems of in formation ar e manda tory. In addition, y ou ha ve the op tion of pr oviding y our mobile phone number and email. We recommend that you provide these details also. 1.3.2 Aadh aar is an ID, nothing m"
          }
        ]
      },
      "response": {
        "answer": "Aadhaar enrolment is the process of obtaining a unique identification number (Aadhaar) for individuals in India. The process involves providing minimal demographic and biometric data during the enrollment process, which is totally free of cost. Users need to enroll for Aadhaar only once. The enrolment process can be done through an Aadhaar Enrolment Centre or by visiting a nearby location with specific documents.",
        "latency_seconds": 18.57279015999984,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 4,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 3,
      "question": "What is the purpose of Aadhaar?",
      "model": "qwen2.5-coder:1.5b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.10141480200013575,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 6
          },
          {
            "source": "UIAI_1.pdf",
            "page": 7
          },
          {
            "source": "UIAI_1.pdf",
            "page": 38
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 7,
            "distance": 0.6557984352111816,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Identity can be verified through Aadhaar Authentication online.",
                "overlap": 0.3333
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 7 Aadhaar Handbook for Residents 2021-Ver.2.0 1.2 Who c an get Aadhaar? An y individual in India, irr espective of ag e and g ender, who is a r esident of India, or a non r esident Indian (NRI), can enroll to obtain Aadhaar number. For an individual, only one Aadhaar number is generated, as the uniqueness is achieved through the process of demographic and biometric de-duplication. 1.2.1. Aadh aar for residents of India Y ou ar e eligible f or Aadhaar Enr olment if y ou ar e a r esident of India. This, b y de finition, means tha t y ou ha ve r esided in India f or a period or periods amoun ting in all t o one hundr ed and eigh ty-two days (182 days) or more in the twelve months immediately preceding the date of application for Aadhaar enrolment. 1.2.2 Aadh aar for NRIs If y ou are a non-resident Indian (NRI), you can enroll for Aadhaar if you have an Indian Passport. The mandate of 182 days does not apply for NRIs. You can vis"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 1,
        "expected_fact_count": 3,
        "facts_with_context_support": [
          "Aadhaar can be used to access services, benefits and subsidies.",
          "Identity can be verified through Aadhaar Authentication online."
        ],
        "facts_missing_from_retrieved_context": [
          "Aadhaar provides a portable proof of identity."
        ],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 13,
            "distance": 0.6429665088653564,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Aadhaar can be used to access services, benefits and subsidies.",
                "overlap": 0.4
              }
            ],
            "chunk": "trar-run Aadhaar Enrolment Centre These ar e the Aadhaar Enr olment Cen tre a vailable in Bank s, P ost Office s, BSN L cen tres, CSCs and St ate Go vernment offices acr oss the c ountry. The se ar e run b y r espective Enr olment R egistrars. 2.3.2.2 UID AI-run Aadhaar Seva Kendra Aadhaar Se va Kendras or ASKs are exclusive Aadhaar centres run by UIDAI that provide Aadhaar services to residents in a state-of-the-art environment."
          },
          {
            "source": "UIAI_1.pdf",
            "page": 45,
            "distance": 0.653586745262146,
            "gold_location": false,
            "supporting_facts": [],
            "chunk": "Unique Identification Authority of India Government of India 45 Aadhaar Handbook for Residents 2021-Ver.2.0 10.5.1.3 YouTube: The official Aadhaar channel is accessible t o all user s on Y ouTube via h ttps://www. youtube.com/user/AadhaarUID. Y ou c an also sear ch f or \u2018 Aadhaar UID \u2019 on Y ouTube and sub scribe t o our official channel. This channel has dedic ated pla ylists of all tut orial videos of our onlin e ser vices, in formational videos r elated t o Aadhaar , all our TV ads, special messages, news reports, contest videos and more. Besides being informative, the channel giv es y ou a glimp se of the amazing video c ontent cr eated b y Aadhaar holders across the country. You can also leave a comment on our videos or share feedback. 10.5.1.4 Instagram: UID AI r ecently launched the official cus tomer c are acc ount of Aadhaar on Ins tagram. Y ou c an f ollow us @aadhaar_official (h ttps://instagram.com/aadhaar_official). F or an y specific queries, you can send us a direct messa"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 7,
            "distance": 0.6557984352111816,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Identity can be verified through Aadhaar Authentication online.",
                "overlap": 0.3333
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 7 Aadhaar Handbook for Residents 2021-Ver.2.0 1.2 Who c an get Aadhaar? An y individual in India, irr espective of ag e and g ender, who is a r esident of India, or a non r esident Indian (NRI), can enroll to obtain Aadhaar number. For an individual, only one Aadhaar number is generated, as the uniqueness is achieved through the process of demographic and biometric de-duplication. 1.2.1. Aadh aar for residents of India Y ou ar e eligible f or Aadhaar Enr olment if y ou ar e a r esident of India. This, b y de finition, means tha t y ou ha ve r esided in India f or a period or periods amoun ting in all t o one hundr ed and eigh ty-two days (182 days) or more in the twelve months immediately preceding the date of application for Aadhaar enrolment. 1.2.2 Aadh aar for NRIs If y ou are a non-resident Indian (NRI), you can enroll for Aadhaar if you have an Indian Passport. The mandate of 182 days does not apply for NRIs. You can vis"
          }
        ]
      },
      "response": {
        "answer": "The purpose of Aadhaar is to provide a unique and secure identification system for individuals in India, ensuring that everyone has a single, permanent identity document. This helps in various government services, including access to healthcare, banking, education, and more.",
        "latency_seconds": 16.054974509999965,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 0.6667,
        "facts_supported_by_context": 2,
        "facts_missing_from_context": 1,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Partial context support; response should be checked against missing facts."
      }
    },
    {
      "question_id": 4,
      "question": "What is Proof of Identity?",
      "model": "qwen2.5-coder:1.5b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.12198268700012704,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 9
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63
          },
          {
            "source": "UIAI_2.pdf",
            "page": 1
          },
          {
            "source": "UIAI_2.pdf",
            "page": 9
          }
        ],
        "gold_locations_retrieved": [],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 0,
        "expected_fact_count": 2,
        "facts_with_context_support": [
          "Proof of Identity (POI) is an identity document accepted by UIDAI for establishing the resident's identity during Aadhaar enrolment or update.",
          "POI is a mandatory document for document-based enrolment."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 7,
            "distance": 0.6297215223312378,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Proof of Identity (POI) is an identity document accepted by UIDAI for establishing the resident's identity during Aadhaar enrolment or update.",
                "overlap": 0.3333
              },
              {
                "fact": "POI is a mandatory document for document-based enrolment.",
                "overlap": 0.4
              }
            ],
            "chunk": "ffline v erification, as the c ase ma y be. It elimina tes the need f or pr oviding iden tity documen ts each time y ou wish t o access ser vices, benefits and subsidies. Aadhaar provides a portable proof of identity that can be verified through Aadhaar Authentication online anytime, anywhere. Indian Passport is mandatory Identity proof for Aadhaar Enrolment of NRIs."
          },
          {
            "source": "UIAI_2.pdf",
            "page": 5,
            "distance": 0.6307013034820557,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Proof of Identity (POI) is an identity document accepted by UIDAI for establishing the resident's identity during Aadhaar enrolment or update.",
                "overlap": 0.5833
              },
              {
                "fact": "POI is a mandatory document for document-based enrolment.",
                "overlap": 0.8
              }
            ],
            "chunk": "s Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Criteria for Head of Family and Proof of Relationship based enrolment: (i) HoF must have a valid Aadhaar before performing HoF based enrolment (ii) Any one of the parents or the legal guardian can be HoF (iii) Aadhaar number of both the parents is required for HoF based enrolment. In case the child"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 8,
            "distance": 0.6621238589286804,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Proof of Identity (POI) is an identity document accepted by UIDAI for establishing the resident's identity during Aadhaar enrolment or update.",
                "overlap": 0.5833
              },
              {
                "fact": "POI is a mandatory document for document-based enrolment.",
                "overlap": 0.6
              }
            ],
            "chunk": "such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Validity period of the Aadhaar"
          }
        ]
      },
      "response": {
        "answer": "Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual.",
        "latency_seconds": 13.745676628999945,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 2,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 5,
      "question": "What is Proof of Address?",
      "model": "qwen2.5-coder:1.5b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.1470680770000854,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 9
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63
          },
          {
            "source": "UIAI_2.pdf",
            "page": 1
          },
          {
            "source": "UIAI_2.pdf",
            "page": 12
          },
          {
            "source": "UIAI_2.pdf",
            "page": 18
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 63,
            "distance": 0.5735834240913391,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Proof of Address (POA) is an accepted document used to establish the resident's address.",
                "overlap": 0.2857
              }
            ],
            "chunk": "Proof of Address) documents containing Name & Address 1. Passport 2. Bank Statement/ Passbook 3. Post Office Account Statement/ Passbook 4. Ration Card 5. Voter ID 6. Driving License 7. Government Photo ID cards/ service photo identity card issued by PSU 8. Electricity Bill (not older than 3 months) 9. Water Bill (not older than 3 months) 10. Telephone Landline Bill (not older than 3 months) 11. Property Tax Receipt (not older than 1 year) 12. Credit Card Statement (not older than 3 months) 13. Insurance Policy 14. Signed Letter having Photo from Bank on letterhead 15. Signed Letter having Photo issued by registered Company on letterhead 16. Signed Letter having Photo issued by Recognized Educational Institution on letterhead or Photo ID having address issued by Recognized Educational Institution 17. NREGS Job Card 18. Arms License 19. Pensioner Card 20. Freedom Fighter Card 21. Kissan Passbook 22. CGHS/ ECHS Card 23. Certificate of Address having photo issued by MP or MLA or MLC or Ga"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63,
            "distance": 0.6217241287231445,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Proof of Address (POA) is an accepted document used to establish the resident's address.",
                "overlap": 0.7143
              },
              {
                "fact": "POA is mandatory for document-based Aadhaar enrolment.",
                "overlap": 0.8333
              }
            ],
            "chunk": "low). Declared checkbox may be selected if Resident does not have a valid proof of Date of Birth document. Verified checkbox is selected where Resident has provided documents as proof of Date of birth. Field 6: ADDRESS Write complete address. Please bring the original Proof of Address (POA) document. (See list B below). Please note that the Aadhaar letter will be delivered at the given address only. \u2022 To include name of Parent / Guardian / Spouse as part of the ad dress, enter the name of person in the c/o field. \u2022 Minor Corrections / Enhancements are permissible to make the address complete without altering the base address as mentioned in POA document. Field 7: RELATIONSHIP In case of children below 5 years, it is mandatory to provide father/mother/guardian details with their Aadhaar or EID number. If the resident is not holding a Proof of Identity & using the Head of the Family identity for enrolment, it is mandatory to provide Head of the family\u2019s details with his/her Aadhaar or EI"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 2,
        "expected_fact_count": 2,
        "facts_with_context_support": [
          "Proof of Address (POA) is an accepted document used to establish the resident's address.",
          "POA is mandatory for document-based Aadhaar enrolment."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 63,
            "distance": 0.5735834240913391,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Proof of Address (POA) is an accepted document used to establish the resident's address.",
                "overlap": 0.2857
              }
            ],
            "chunk": "Proof of Address) documents containing Name & Address 1. Passport 2. Bank Statement/ Passbook 3. Post Office Account Statement/ Passbook 4. Ration Card 5. Voter ID 6. Driving License 7. Government Photo ID cards/ service photo identity card issued by PSU 8. Electricity Bill (not older than 3 months) 9. Water Bill (not older than 3 months) 10. Telephone Landline Bill (not older than 3 months) 11. Property Tax Receipt (not older than 1 year) 12. Credit Card Statement (not older than 3 months) 13. Insurance Policy 14. Signed Letter having Photo from Bank on letterhead 15. Signed Letter having Photo issued by registered Company on letterhead 16. Signed Letter having Photo issued by Recognized Educational Institution on letterhead or Photo ID having address issued by Recognized Educational Institution 17. NREGS Job Card 18. Arms License 19. Pensioner Card 20. Freedom Fighter Card 21. Kissan Passbook 22. CGHS/ ECHS Card 23. Certificate of Address having photo issued by MP or MLA or MLC or Ga"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63,
            "distance": 0.6217241287231445,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Proof of Address (POA) is an accepted document used to establish the resident's address.",
                "overlap": 0.7143
              },
              {
                "fact": "POA is mandatory for document-based Aadhaar enrolment.",
                "overlap": 0.8333
              }
            ],
            "chunk": "low). Declared checkbox may be selected if Resident does not have a valid proof of Date of Birth document. Verified checkbox is selected where Resident has provided documents as proof of Date of birth. Field 6: ADDRESS Write complete address. Please bring the original Proof of Address (POA) document. (See list B below). Please note that the Aadhaar letter will be delivered at the given address only. \u2022 To include name of Parent / Guardian / Spouse as part of the ad dress, enter the name of person in the c/o field. \u2022 Minor Corrections / Enhancements are permissible to make the address complete without altering the base address as mentioned in POA document. Field 7: RELATIONSHIP In case of children below 5 years, it is mandatory to provide father/mother/guardian details with their Aadhaar or EID number. If the resident is not holding a Proof of Identity & using the Head of the Family identity for enrolment, it is mandatory to provide Head of the family\u2019s details with his/her Aadhaar or EI"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 3,
            "distance": 0.6342085599899292,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Proof of Address (POA) is an accepted document used to establish the resident's address.",
                "overlap": 0.4286
              },
              {
                "fact": "POA is mandatory for document-based Aadhaar enrolment.",
                "overlap": 0.5
              }
            ],
            "chunk": "List of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan * Proof of Address documents as in the \u201cList III - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar Number of individual eighteen years and above of age\u201d will also be applicable Note: (a) Any document listed in the above tabular statement shall be acceptable only if it meets the following conditions, namely:\u2014 (i) It is currently valid; (ii) The person in respect of whom such document is issued is entitled for the same; (iii) The information contained in the document is verifiable from the source; and (iv) The authority issuing the document has not made any declaration that such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is"
          }
        ]
      },
      "response": {
        "answer": "Proof of Address refers to documents containing Name & Address. The information was found in the provided Aadhaar Handbook on page 63.",
        "latency_seconds": 15.86244950199989,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 2,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 6,
      "question": "What is Proof of Date of Birth?",
      "model": "qwen2.5-coder:1.5b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.1659570829999666,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 9
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63
          },
          {
            "source": "UIAI_2.pdf",
            "page": 1
          },
          {
            "source": "UIAI_2.pdf",
            "page": 13
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_2.pdf",
            "page": 13,
            "distance": 0.4825599193572998,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Proof of Date of Birth is a valid document from the UIDAI-accepted list used to establish the resident's date of birth.",
                "overlap": 0.6
              },
              {
                "fact": "If a resident does not have a valid DoB document, the handbook allows declaration of the date of birth or approximate age.",
                "overlap": 0.4167
              }
            ],
            "chunk": "irth certificate as proof of date of birth b. For Non-Resident Indian (NRI) below 18 years of age: - Aadhaar number holder shall submit birth certificate or Indian Passport as proof of date of birth c. For resident Indians and Non-Resident Indian (NRI) of 18 years and above of age: - Aadhaar number holder shall submit any of the acceptable proof of date of birth documents as specified in the above list (ii) If the Aadhaar number holder had earlier submitted birth certificate as proof of date of birth, the Aadhaar number holder shall submit corrected birth certificate bearing same Birth Registration Number (BRN) (iii) If the Aadhaar number holder had earlier submitted any proof of date of birth document except birth certificate (for e.g. Marksheet, Passport etc.), the Aadhaar number holder shall submit corrected version of the same document or submit a birth certificate (iv) In case of date of birth update of woman who has changed her name post-marriage, proof of date of birth documents"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63,
            "distance": 0.6019162535667419,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Proof of Date of Birth is a valid document from the UIDAI-accepted list used to establish the resident's date of birth.",
                "overlap": 0.7
              },
              {
                "fact": "If a resident does not have a valid DoB document, the handbook allows declaration of the date of birth or approximate age.",
                "overlap": 0.5
              },
              {
                "fact": "If a valid DoB document is available, it should be produced for enrolment.",
                "overlap": 0.4286
              }
            ],
            "chunk": "low). Declared checkbox may be selected if Resident does not have a valid proof of Date of Birth document. Verified checkbox is selected where Resident has provided documents as proof of Date of birth. Field 6: ADDRESS Write complete address. Please bring the original Proof of Address (POA) document. (See list B below). Please note that the Aadhaar letter will be delivered at the given address only. \u2022 To include name of Parent / Guardian / Spouse as part of the ad dress, enter the name of person in the c/o field. \u2022 Minor Corrections / Enhancements are permissible to make the address complete without altering the base address as mentioned in POA document. Field 7: RELATIONSHIP In case of children below 5 years, it is mandatory to provide father/mother/guardian details with their Aadhaar or EID number. If the resident is not holding a Proof of Identity & using the Head of the Family identity for enrolment, it is mandatory to provide Head of the family\u2019s details with his/her Aadhaar or EI"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 2,
        "expected_fact_count": 3,
        "facts_with_context_support": [
          "Proof of Date of Birth is a valid document from the UIDAI-accepted list used to establish the resident's date of birth.",
          "If a resident does not have a valid DoB document, the handbook allows declaration of the date of birth or approximate age.",
          "If a valid DoB document is available, it should be produced for enrolment."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_2.pdf",
            "page": 13,
            "distance": 0.4825599193572998,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Proof of Date of Birth is a valid document from the UIDAI-accepted list used to establish the resident's date of birth.",
                "overlap": 0.6
              },
              {
                "fact": "If a resident does not have a valid DoB document, the handbook allows declaration of the date of birth or approximate age.",
                "overlap": 0.4167
              }
            ],
            "chunk": "irth certificate as proof of date of birth b. For Non-Resident Indian (NRI) below 18 years of age: - Aadhaar number holder shall submit birth certificate or Indian Passport as proof of date of birth c. For resident Indians and Non-Resident Indian (NRI) of 18 years and above of age: - Aadhaar number holder shall submit any of the acceptable proof of date of birth documents as specified in the above list (ii) If the Aadhaar number holder had earlier submitted birth certificate as proof of date of birth, the Aadhaar number holder shall submit corrected birth certificate bearing same Birth Registration Number (BRN) (iii) If the Aadhaar number holder had earlier submitted any proof of date of birth document except birth certificate (for e.g. Marksheet, Passport etc.), the Aadhaar number holder shall submit corrected version of the same document or submit a birth certificate (iv) In case of date of birth update of woman who has changed her name post-marriage, proof of date of birth documents"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 3,
            "distance": 0.557792067527771,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Proof of Date of Birth is a valid document from the UIDAI-accepted list used to establish the resident's date of birth.",
                "overlap": 0.5
              },
              {
                "fact": "If a resident does not have a valid DoB document, the handbook allows declaration of the date of birth or approximate age.",
                "overlap": 0.3333
              },
              {
                "fact": "If a valid DoB document is available, it should be produced for enrolment.",
                "overlap": 0.2857
              }
            ],
            "chunk": "birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Head of Family (HoF) based enrolment is mandatory for children below five years of age ex"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63,
            "distance": 0.6019162535667419,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Proof of Date of Birth is a valid document from the UIDAI-accepted list used to establish the resident's date of birth.",
                "overlap": 0.7
              },
              {
                "fact": "If a resident does not have a valid DoB document, the handbook allows declaration of the date of birth or approximate age.",
                "overlap": 0.5
              },
              {
                "fact": "If a valid DoB document is available, it should be produced for enrolment.",
                "overlap": 0.4286
              }
            ],
            "chunk": "low). Declared checkbox may be selected if Resident does not have a valid proof of Date of Birth document. Verified checkbox is selected where Resident has provided documents as proof of Date of birth. Field 6: ADDRESS Write complete address. Please bring the original Proof of Address (POA) document. (See list B below). Please note that the Aadhaar letter will be delivered at the given address only. \u2022 To include name of Parent / Guardian / Spouse as part of the ad dress, enter the name of person in the c/o field. \u2022 Minor Corrections / Enhancements are permissible to make the address complete without altering the base address as mentioned in POA document. Field 7: RELATIONSHIP In case of children below 5 years, it is mandatory to provide father/mother/guardian details with their Aadhaar or EID number. If the resident is not holding a Proof of Identity & using the Head of the Family identity for enrolment, it is mandatory to provide Head of the family\u2019s details with his/her Aadhaar or EI"
          }
        ]
      },
      "response": {
        "answer": "Proof of Date of Birth refers to any document that verifies the individual's date of birth. It can be a birth certificate, Indian Passport, or any other acceptable proof listed in the Aadhaar Handbook.",
        "latency_seconds": 15.811129956999821,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 3,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 7,
      "question": "What is Proof of Relationship?",
      "model": "qwen2.5-coder:1.5b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.15153444500015212,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 10
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63
          },
          {
            "source": "UIAI_2.pdf",
            "page": 1
          },
          {
            "source": "UIAI_2.pdf",
            "page": 4
          }
        ],
        "gold_locations_retrieved": [],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 0,
        "expected_fact_count": 2,
        "facts_with_context_support": [
          "Proof of Relationship (PoR) establishes the relationship between the resident and the Head of Family.",
          "PoR is used in Head of Family based enrolment."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_2.pdf",
            "page": 5,
            "distance": 0.6588935852050781,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Proof of Relationship (PoR) establishes the relationship between the resident and the Head of Family.",
                "overlap": 0.625
              },
              {
                "fact": "PoR is used in Head of Family based enrolment.",
                "overlap": 1.0
              }
            ],
            "chunk": "s Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Criteria for Head of Family and Proof of Relationship based enrolment: (i) HoF must have a valid Aadhaar before performing HoF based enrolment (ii) Any one of the parents or the legal guardian can be HoF (iii) Aadhaar number of both the parents is required for HoF based enrolment. In case the child"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 3,
            "distance": 0.6885577440261841,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Proof of Relationship (PoR) establishes the relationship between the resident and the Head of Family.",
                "overlap": 0.625
              },
              {
                "fact": "PoR is used in Head of Family based enrolment.",
                "overlap": 1.0
              }
            ],
            "chunk": "birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Head of Family (HoF) based enrolment is mandatory for children below five years of age ex"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 8,
            "distance": 0.6998454332351685,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Proof of Relationship (PoR) establishes the relationship between the resident and the Head of Family.",
                "overlap": 0.625
              },
              {
                "fact": "PoR is used in Head of Family based enrolment.",
                "overlap": 0.8
              }
            ],
            "chunk": "such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Validity period of the Aadhaar"
          }
        ]
      },
      "response": {
        "answer": "Proof of Relationship (PoR) document contains at least the name of individual and name of Head of Family (HoF).",
        "latency_seconds": 15.650240006000104,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 2,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 8,
      "question": "Can Aadhaar enrolment be done without supporting documents?",
      "model": "qwen2.5-coder:1.5b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.24392817000011746,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 9
          },
          {
            "source": "UIAI_1.pdf",
            "page": 10
          },
          {
            "source": "UIAI_2.pdf",
            "page": 1
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 9,
            "distance": 0.3367202877998352,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Yes, alternative enrolment methods exist when individual supporting documents are unavailable.",
                "overlap": 0.3333
              },
              {
                "fact": "Head of Family based enrolment can be used where individual documents are unavailable.",
                "overlap": 0.2857
              },
              {
                "fact": "Introducer based enrolment can be used when the required documents are not available.",
                "overlap": 0.3333
              }
            ],
            "chunk": "a valid document, you have to produce that for Aadhaar enrolment. In case you do not ha ve docu ments in y our name, y ou c an also use a certific ate issued b y authoriz ed official (r efer t o Anne x. II). UID AI has de fined a s tandard f ormat f or this certific ate. R efer t o the Lis t of Accep table Supporting Documen ts f or V erification a vailable a t: h ttps://uidai.gov.in/images/ commdoc/valid_documents_list.pdf To download Aadhaar Enrolment Form: SCAN To get details of nearby Aadhaar Enrolment Centre: SCAN Carry original documents to Aadhaar centre. These are scanned and given back to you. The document for Aadhaar enrolment should have your name. For List of Valid Supporting Documents SCAN"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 1,
        "expected_fact_count": 3,
        "facts_with_context_support": [
          "Yes, alternative enrolment methods exist when individual supporting documents are unavailable.",
          "Head of Family based enrolment can be used where individual documents are unavailable.",
          "Introducer based enrolment can be used when the required documents are not available."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 9,
            "distance": 0.3367202877998352,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Yes, alternative enrolment methods exist when individual supporting documents are unavailable.",
                "overlap": 0.3333
              },
              {
                "fact": "Head of Family based enrolment can be used where individual documents are unavailable.",
                "overlap": 0.2857
              },
              {
                "fact": "Introducer based enrolment can be used when the required documents are not available.",
                "overlap": 0.3333
              }
            ],
            "chunk": "a valid document, you have to produce that for Aadhaar enrolment. In case you do not ha ve docu ments in y our name, y ou c an also use a certific ate issued b y authoriz ed official (r efer t o Anne x. II). UID AI has de fined a s tandard f ormat f or this certific ate. R efer t o the Lis t of Accep table Supporting Documen ts f or V erification a vailable a t: h ttps://uidai.gov.in/images/ commdoc/valid_documents_list.pdf To download Aadhaar Enrolment Form: SCAN To get details of nearby Aadhaar Enrolment Centre: SCAN Carry original documents to Aadhaar centre. These are scanned and given back to you. The document for Aadhaar enrolment should have your name. For List of Valid Supporting Documents SCAN"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 7,
            "distance": 0.41059410572052,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Yes, alternative enrolment methods exist when individual supporting documents are unavailable.",
                "overlap": 0.3333
              },
              {
                "fact": "Head of Family based enrolment can be used where individual documents are unavailable.",
                "overlap": 0.4286
              },
              {
                "fact": "Introducer based enrolment can be used when the required documents are not available.",
                "overlap": 0.3333
              }
            ],
            "chunk": "haar enrolment. 1.2.2 Aadh aar for NRIs If y ou are a non-resident Indian (NRI), you can enroll for Aadhaar if you have an Indian Passport. The mandate of 182 days does not apply for NRIs. You can visit an Aadhaar Enrolment Centre and enr oll f or Aadhaar as an NRI. Indian P assport is manda tory as Pr oof of Iden tity (P oI) f or NRIs. The app licant may choose to give any other Indian Proof of Address (PoA) from amongst the documents accepted by UIDAI (see Section 13.1, Annex \u2013 I of this handbook). 1.3 F eatures of Aadhaar 1.3.1 Aadh aar is an identifier Aadhaar is a 12-digit unique ID issued to an individual. Aadhaar use s de mographic in formation (name, da te of birth, g ender and addr ess), phot ograph of the f ace, fing erprints and iris t o ide ntify a r esident. The se it ems of in formation ar e manda tory. In addition, y ou ha ve the op tion of pr oviding y our mobile phone number and email. We recommend that you provide these details also. 1.3.2 Aadh aar is an ID, nothing m"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 6,
            "distance": 0.43277132511138916,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Yes, alternative enrolment methods exist when individual supporting documents are unavailable.",
                "overlap": 0.3333
              },
              {
                "fact": "Head of Family based enrolment can be used where individual documents are unavailable.",
                "overlap": 0.4286
              },
              {
                "fact": "Introducer based enrolment can be used when the required documents are not available.",
                "overlap": 0.3333
              }
            ],
            "chunk": "List of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan List III - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar Number of individual eighteen years and above of age \uf0feMeans allowed | \uf0fdMeans not allowed Sl. No. List of documents (see note below this tabular statement) Proof of Identity (PoI) document, containing name and photograph Proof of Address (PoA) document, containing name and address in India Proof of Date of Birth (PDB) document, containing name and date of birth 1. Valid Indian Passport \uf0fe \uf0fe \uf0fe 2. Ration /PDS Photograph Card/e-Ration Card \uf0fe \uf0fe \uf0fd 3. Voter Identity Card /e-Voter Identity Card whose details are displayed online on the website of the Election Commission of India or the Chief Electoral Officer concerned \uf0fe \uf0fe \uf0fd 4. Driving licence \uf0fe \uf0fd \uf0fd 5. Service Photo Identity Card issued by Central Government/ State Government/ PSU/ regulatory body / statutory body \uf0fe \uf0fe \uf0fe 6. Pen"
          }
        ]
      },
      "response": {
        "answer": "Yes, Aadhaar enrolment can be done without supporting documents.\n\nPage: 7",
        "latency_seconds": 16.307224075000022,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 3,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 9,
      "question": "What information is collected during Aadhaar enrolment?",
      "model": "qwen2.5-coder:1.5b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.1649239690000286,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 10
          },
          {
            "source": "UIAI_1.pdf",
            "page": 38
          },
          {
            "source": "UIAI_1.pdf",
            "page": 50
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 10,
            "distance": 0.47255373001098633,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Demographic information is collected.",
                "overlap": 0.3333
              },
              {
                "fact": "Biometric information is collected.",
                "overlap": 0.6667
              },
              {
                "fact": "The enrolment process captures information required for Aadhaar identity creation.",
                "overlap": 0.375
              }
            ],
            "chunk": "trars\u2019 own employees \u2022 Elect ed local body members \u2022 Members of local administrative bodies \u2022 P ostman \u2022 Influencers such as teachers \u2022 Health w orkers \u2022 Doct ors \u2022 Ang anwadis/Asha workers \u2022 Representatives of local NGOs The information captured during Introducer-based Enrolment is: \u2022 Introducer\u2019s name \u2022 Introducer\u2019s Aadhaar number \u2022 One modality of biometric information of the Introducer 2.1.4 Enr olment of Children For HoF based enrolment, the Head of Family has to give biometric confirmation at the time of enrolment."
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 1,
        "expected_fact_count": 3,
        "facts_with_context_support": [
          "Demographic information is collected.",
          "Biometric information is collected.",
          "The enrolment process captures information required for Aadhaar identity creation."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 8,
            "distance": 0.43172141909599304,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Demographic information is collected.",
                "overlap": 0.3333
              },
              {
                "fact": "Biometric information is collected.",
                "overlap": 0.3333
              },
              {
                "fact": "The enrolment process captures information required for Aadhaar identity creation.",
                "overlap": 0.375
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 8Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 2: HOW TO ENROL FOR AADHAAR? Visit Aadhaar Enrolment Centre Fill Aadhaar Enrolment/ Update F orm Check & Confirm All Spellings on screen Submit Valid Give Demographic & Biometric Data You get SMS of Aadhaar generation Documents for Scanning Collect your documents & Enrolment slip To g et Aadhaar , y ou ha ve t o enr oll b y pr oviding minimal demogr aphic and biome tric in formation during the enr olment process, which is totally free of cost. Please note that you need to enroll for Aadhaar only once. 2.1 En rolment Process Please do Check & Confirm all data shown on the resident screen, before the operator submits your Packet"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 13,
            "distance": 0.45054009556770325,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "The enrolment process captures information required for Aadhaar identity creation.",
                "overlap": 0.25
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 13 Aadhaar Handbook for Residents 2021-Ver.2.0 To get more details on Aadhaar Seva Kendra SCAN How to locate Aadhaar Kendra tutorial SCAN Aadhaar Seva Kendra are open on all seven days of the week, except on public holidays, from 9.30 a.m. to 5.30 p.m. Each ASK has the capacity to handle 250 to 1000 service requests per day. 2.3.1 Loc ate Aadhaar Enrolment Centre near you Y ou can get details of any nearby Aadhaar Enrolment Centre from: \u2022 B y calling 1947 \u2022 Fr om Aadhaar website: https://appointments.uidai.gov.in/easearch.aspx \u2022 Fr om mAadhaar App 2.3.2 T ypes of Enrolment Centres Th e Aadhaar En rolment Cen tres c an be br oadly classified in to tw o c ategories based on the f ormat of service delivery. These are: 2.3.2.1 R egistrar-run Aadhaar Enrolment Centre These ar e the Aadhaar Enr olment Cen tre a vailable in Bank s, P ost Office s, BSN L cen tres, CSCs and St ate Go vernment offices acr oss the c ountry. The se ar e"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 10,
            "distance": 0.47255373001098633,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Demographic information is collected.",
                "overlap": 0.3333
              },
              {
                "fact": "Biometric information is collected.",
                "overlap": 0.6667
              },
              {
                "fact": "The enrolment process captures information required for Aadhaar identity creation.",
                "overlap": 0.375
              }
            ],
            "chunk": "trars\u2019 own employees \u2022 Elect ed local body members \u2022 Members of local administrative bodies \u2022 P ostman \u2022 Influencers such as teachers \u2022 Health w orkers \u2022 Doct ors \u2022 Ang anwadis/Asha workers \u2022 Representatives of local NGOs The information captured during Introducer-based Enrolment is: \u2022 Introducer\u2019s name \u2022 Introducer\u2019s Aadhaar number \u2022 One modality of biometric information of the Introducer 2.1.4 Enr olment of Children For HoF based enrolment, the Head of Family has to give biometric confirmation at the time of enrolment."
          }
        ]
      },
      "response": {
        "answer": "During Aadhaar enrolment, you need to provide minimal demographic and biometric data. This includes your name, Aadhaar number, and one modality of biometric information (such as fingerprints or facial recognition). The information is captured during the enrollment process, which is totally free of cost. Please note that you need to enroll for Aadhaar only once.",
        "latency_seconds": 17.340727216999994,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 3,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 10,
      "question": "What biometric information is collected for Aadhaar?",
      "model": "qwen2.5-coder:1.5b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.14457682600004773,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 19
          },
          {
            "source": "UIAI_1.pdf",
            "page": 50
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63
          }
        ],
        "gold_locations_retrieved": [],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 0,
        "expected_fact_count": 4,
        "facts_with_context_support": [],
        "facts_missing_from_retrieved_context": [
          "Photograph is collected.",
          "Fingerprints are collected.",
          "Iris scans are collected.",
          "For children, fingerprints, iris scans and photographs are captured during mandatory biometric updates."
        ],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 37,
            "distance": 0.3628368377685547,
            "gold_location": false,
            "supporting_facts": [],
            "chunk": "Unique Identification Authority of India Government of India 37 Aadhaar Handbook for Residents 2021-Ver.2.0 To read FAQs SCAN \u2022 Aadhaar Authentication History: Using this service, you can g et de tails of authen tication perf ormed b y y ou in pas t 6 mon ths. The OTP for this service will be sent to your registered mobile number. \u2022 Offline eKYC Service: Using this service, you can generate your digitally signed Aadhaar details that you may use for KYC purposes. To know more about Aadhaar Authentication History SCAN To know more about Aadhaar Paperless Offline eKYC: SCAN 8.3 Fr equently Asked Questions UID AI also has e xtensive F AQs section on the w ebsite and mAadhaar app to help residents understand Aadhaar process, services and products."
          },
          {
            "source": "UIAI_1.pdf",
            "page": 64,
            "distance": 0.38319915533065796,
            "gold_location": false,
            "supporting_facts": [],
            "chunk": "Unique Identification Authority of India Government of India 64Aadhaar Handbook for Residents 2021-Ver.2.0 Verify Aadhaar SCAN Lock/ Unlock Aadhaar SCAN Check your Aadhaar Update History SCAN Update Address Without Documents SCAN Secure QR Code SCAN Locate Aadhaar Enrolment Centre SCAN Verify Digital Signature SCAN Get back your lost Aadhaar number or Enrolment ID SCAN Check status of your Aadhaar enrolment or update request SCAN mAadhaar App SCAN Download Aadhaar SCAN Generate/ Retrieve VID SCAN Check your Aadhaar Authentication History SCAN Check Status of your online update request SCAN Online Appointment Booking SCAN Update Address Online SCAN What is EID SCAN Lock/ Unlock Biometrics SCAN Order Aadhaar Reprint SCAN Aadhaar Chatbot SCAN 13.5 Aadhaar T utorial Videos"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 32,
            "distance": 0.40078648924827576,
            "gold_location": false,
            "supporting_facts": [],
            "chunk": "Unique Identification Authority of India Government of India 32Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 7: VERIFICATION OF AADHAAR Not every 12 digit number is Aadhaar Verify Aadhaar Online To watch tutorial on Verify Aadhaar Service SCAN 7.1 V erify any Aadhaar Online An y Aadhaar number c an be v erified onli ne fr om uidai. gov. in. Y ou c an use this ser vice t o check the authen ticity of an y Aadhaar number tha t is presented to you. For the entered Aadhaar number, you get the following details of the Aadhaar holder: \u2022 If the Aadhaar number e xists \u2022 Ag e band \u2022 Gender \u2022 St ate of residence \u2022 Mobile Number (in mask ed form showing only last 4 digits) Be sides, a service provider can also verify the Aadhaar presented by a person using following services: 1. Online from: https://resident.uidai.gov.in/verify 2. Fr om mAadhaar App 3. Sc an the QR Code on presented Aadhaar using the Aadhaar QR Code Scanner App or mAadhaar App"
          }
        ]
      },
      "response": {
        "answer": "The Aadhaar Handbook context does not provide specific details about the biometric information collected for Aadhaar. The handbook focuses more on the authentication and verification processes rather than biometrics.",
        "latency_seconds": 15.203203823999957,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 0.0,
        "facts_supported_by_context": 0,
        "facts_missing_from_context": 4,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Context insufficient, but model answered. Review for unsupported claims."
      }
    },
    {
      "question_id": 11,
      "question": "What demographic information is collected during enrolment?",
      "model": "qwen2.5-coder:1.5b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.07962803800000984,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 3
          },
          {
            "source": "UIAI_1.pdf",
            "page": 10
          },
          {
            "source": "UIAI_1.pdf",
            "page": 50
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 50,
            "distance": 0.5529363751411438,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Address is demographic information.",
                "overlap": 0.3333
              }
            ],
            "chunk": "ose. 4. Demo graphic information required for enrolment. \u2014 (1) The f ollowing demogr aphic in formation shall be c ollected fr om all individuals under going enrolment (other than children below five years of age):"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 10,
            "distance": 0.6497888565063477,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Demographic information includes personal identity and address-related information captured during enrolment.",
                "overlap": 0.4
              },
              {
                "fact": "Name and date of birth are examples of demographic information.",
                "overlap": 0.3333
              },
              {
                "fact": "Address is demographic information.",
                "overlap": 0.3333
              },
              {
                "fact": "Mobile number and email are part of the demographic information fields, where provided.",
                "overlap": 0.2857
              }
            ],
            "chunk": "trars\u2019 own employees \u2022 Elect ed local body members \u2022 Members of local administrative bodies \u2022 P ostman \u2022 Influencers such as teachers \u2022 Health w orkers \u2022 Doct ors \u2022 Ang anwadis/Asha workers \u2022 Representatives of local NGOs The information captured during Introducer-based Enrolment is: \u2022 Introducer\u2019s name \u2022 Introducer\u2019s Aadhaar number \u2022 One modality of biometric information of the Introducer 2.1.4 Enr olment of Children For HoF based enrolment, the Head of Family has to give biometric confirmation at the time of enrolment."
          },
          {
            "source": "UIAI_1.pdf",
            "page": 50,
            "distance": 0.6530028581619263,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Address is demographic information.",
                "overlap": 0.3333
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 50Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 12 AADHAAR (ENROLMENT AND UPDATE) REGULATIONS, 2016 Your enr olment and upda te is g overned b y the Aadhaar (Enr olment and Upda te) R egulations, 2016. R egulations of direct relevance to you are reproduced below for your information: 12.1 CHAP TER II - Resident Enrolment Process 3. Biom etric information required for enrolment. \u2014 (1) The f ollowing bio metric in formation shall be c ollected fr om all individuals under going enrolment (other than children below five years of age): (i) Facial image; (ii) All ten fingerprints; and (iii) Sc ans of both irises. (2) The s tandards f or c ollecting the biome tric in formation shall be as specified b y the Authority f or this purpose. 4. Demo graphic information required for enrolment. \u2014 (1) The f ollowing demogr aphic in formation shall be c ollected fr om all individuals under going enrolment (other than children below five"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 3,
        "expected_fact_count": 4,
        "facts_with_context_support": [
          "Demographic information includes personal identity and address-related information captured during enrolment.",
          "Name and date of birth are examples of demographic information.",
          "Address is demographic information.",
          "Mobile number and email are part of the demographic information fields, where provided."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 50,
            "distance": 0.5529363751411438,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Address is demographic information.",
                "overlap": 0.3333
              }
            ],
            "chunk": "ose. 4. Demo graphic information required for enrolment. \u2014 (1) The f ollowing demogr aphic in formation shall be c ollected fr om all individuals under going enrolment (other than children below five years of age):"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 10,
            "distance": 0.6497888565063477,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Demographic information includes personal identity and address-related information captured during enrolment.",
                "overlap": 0.4
              },
              {
                "fact": "Name and date of birth are examples of demographic information.",
                "overlap": 0.3333
              },
              {
                "fact": "Address is demographic information.",
                "overlap": 0.3333
              },
              {
                "fact": "Mobile number and email are part of the demographic information fields, where provided.",
                "overlap": 0.2857
              }
            ],
            "chunk": "trars\u2019 own employees \u2022 Elect ed local body members \u2022 Members of local administrative bodies \u2022 P ostman \u2022 Influencers such as teachers \u2022 Health w orkers \u2022 Doct ors \u2022 Ang anwadis/Asha workers \u2022 Representatives of local NGOs The information captured during Introducer-based Enrolment is: \u2022 Introducer\u2019s name \u2022 Introducer\u2019s Aadhaar number \u2022 One modality of biometric information of the Introducer 2.1.4 Enr olment of Children For HoF based enrolment, the Head of Family has to give biometric confirmation at the time of enrolment."
          },
          {
            "source": "UIAI_1.pdf",
            "page": 50,
            "distance": 0.6530028581619263,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Address is demographic information.",
                "overlap": 0.3333
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 50Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 12 AADHAAR (ENROLMENT AND UPDATE) REGULATIONS, 2016 Your enr olment and upda te is g overned b y the Aadhaar (Enr olment and Upda te) R egulations, 2016. R egulations of direct relevance to you are reproduced below for your information: 12.1 CHAP TER II - Resident Enrolment Process 3. Biom etric information required for enrolment. \u2014 (1) The f ollowing bio metric in formation shall be c ollected fr om all individuals under going enrolment (other than children below five years of age): (i) Facial image; (ii) All ten fingerprints; and (iii) Sc ans of both irises. (2) The s tandards f or c ollecting the biome tric in formation shall be as specified b y the Authority f or this purpose. 4. Demo graphic information required for enrolment. \u2014 (1) The f ollowing demogr aphic in formation shall be c ollected fr om all individuals under going enrolment (other than children below five"
          }
        ]
      },
      "response": {
        "answer": "The demographic information collected during enrolment includes:\n\n- Introducer's name\n- Introducer's Aadhaar number\n- One modality of biometric information of the Introducer\n\nPage: 10",
        "latency_seconds": 13.552094984000178,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 4,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 12,
      "question": "What happens after Aadhaar enrolment?",
      "model": "qwen2.5-coder:1.5b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.062415069000053336,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 3
          },
          {
            "source": "UIAI_1.pdf",
            "page": 15
          },
          {
            "source": "UIAI_1.pdf",
            "page": 26
          },
          {
            "source": "UIAI_1.pdf",
            "page": 27
          }
        ],
        "gold_locations_retrieved": [],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 0,
        "expected_fact_count": 3,
        "facts_with_context_support": [
          "The enrolment information is processed for Aadhaar generation.",
          "The resident can use the enrolment information or enrolment ID to check generation/status information."
        ],
        "facts_missing_from_retrieved_context": [
          "Aadhaar can subsequently be downloaded or received as an Aadhaar letter when generated."
        ],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 8,
            "distance": 0.5121980309486389,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "The enrolment information is processed for Aadhaar generation.",
                "overlap": 0.6
              },
              {
                "fact": "The resident can use the enrolment information or enrolment ID to check generation/status information.",
                "overlap": 0.6667
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 8Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 2: HOW TO ENROL FOR AADHAAR? Visit Aadhaar Enrolment Centre Fill Aadhaar Enrolment/ Update F orm Check & Confirm All Spellings on screen Submit Valid Give Demographic & Biometric Data You get SMS of Aadhaar generation Documents for Scanning Collect your documents & Enrolment slip To g et Aadhaar , y ou ha ve t o enr oll b y pr oviding minimal demogr aphic and biome tric in formation during the enr olment process, which is totally free of cost. Please note that you need to enroll for Aadhaar only once. 2.1 En rolment Process Please do Check & Confirm all data shown on the resident screen, before the operator submits your Packet"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 7,
            "distance": 0.5623500943183899,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "The enrolment information is processed for Aadhaar generation.",
                "overlap": 0.4
              },
              {
                "fact": "The resident can use the enrolment information or enrolment ID to check generation/status information.",
                "overlap": 0.3333
              }
            ],
            "chunk": "haar enrolment. 1.2.2 Aadh aar for NRIs If y ou are a non-resident Indian (NRI), you can enroll for Aadhaar if you have an Indian Passport. The mandate of 182 days does not apply for NRIs. You can visit an Aadhaar Enrolment Centre and enr oll f or Aadhaar as an NRI. Indian P assport is manda tory as Pr oof of Iden tity (P oI) f or NRIs. The app licant may choose to give any other Indian Proof of Address (PoA) from amongst the documents accepted by UIDAI (see Section 13.1, Annex \u2013 I of this handbook). 1.3 F eatures of Aadhaar 1.3.1 Aadh aar is an identifier Aadhaar is a 12-digit unique ID issued to an individual. Aadhaar use s de mographic in formation (name, da te of birth, g ender and addr ess), phot ograph of the f ace, fing erprints and iris t o ide ntify a r esident. The se it ems of in formation ar e manda tory. In addition, y ou ha ve the op tion of pr oviding y our mobile phone number and email. We recommend that you provide these details also. 1.3.2 Aadh aar is an ID, nothing m"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 21,
            "distance": 0.5644844770431519,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "The enrolment information is processed for Aadhaar generation.",
                "overlap": 0.4
              }
            ],
            "chunk": "er to track s tatus of y our Aadhaar upda te fr om: h ttps://ssup.uidai. gov.in/checkSSUPStatus/checkupdatestatus. 3.9 P oints to remember for Aadhaar Update at Aadhaar Enrolment Centre 1. An y Aadhaar holder can request for Aadhaar, update 2. Aadhaar upda te r equest r equires authen tication b y the Aadhaar holde r . This authen tication is done e ither as biome tric authen tication a t Aadhaar Enr olment Cen tre or O TP authen tication f or online addr ess upda te. F or childr en be low 5 y ears of ag e, this authen tication is done b y the parent/ guardian whose Aadhaar was linked to the child\u2019s at the time of enrolment 3. In c ase of children below the age of 18 consent of the parent/guardian is collected for updating the Aadhaar . 4. If y ou lose your update slip or do not have your Update Request Number, follow the process to retrieve EID as described in Sec. 2.5.1 5. If your update request gets rejected, you can call 1947 and get the reason for rejection and take corrective mea"
          }
        ]
      },
      "response": {
        "answer": "After Aadhaar enrolment, you receive an SMS of Aadhaar generation documents for scanning. You then collect your documents and enroll slip to get Aadhaar.",
        "latency_seconds": 17.244531843000004,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 0.6667,
        "facts_supported_by_context": 2,
        "facts_missing_from_context": 1,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Partial context support; response should be checked against missing facts."
      }
    },
    {
      "question_id": 13,
      "question": "What documents can be used as proof of identity?",
      "model": "qwen2.5-coder:1.5b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.05241972699991493,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 63
          },
          {
            "source": "UIAI_2.pdf",
            "page": 1
          },
          {
            "source": "UIAI_2.pdf",
            "page": 9
          }
        ],
        "gold_locations_retrieved": [],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 0,
        "expected_fact_count": 2,
        "facts_with_context_support": [
          "Only documents from the UIDAI-valid supporting-document list should be presented as POI.",
          "The handbook provides a specific list of acceptable POI documents."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_2.pdf",
            "page": 8,
            "distance": 0.4320237636566162,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Only documents from the UIDAI-valid supporting-document list should be presented as POI.",
                "overlap": 0.5556
              },
              {
                "fact": "The handbook provides a specific list of acceptable POI documents.",
                "overlap": 0.2857
              }
            ],
            "chunk": "such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Validity period of the Aadhaar"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 3,
            "distance": 0.49322202801704407,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Only documents from the UIDAI-valid supporting-document list should be presented as POI.",
                "overlap": 0.5556
              },
              {
                "fact": "The handbook provides a specific list of acceptable POI documents.",
                "overlap": 0.2857
              }
            ],
            "chunk": "birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Head of Family (HoF) based enrolment is mandatory for children below five years of age ex"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 3,
            "distance": 0.49736079573631287,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Only documents from the UIDAI-valid supporting-document list should be presented as POI.",
                "overlap": 0.5556
              },
              {
                "fact": "The handbook provides a specific list of acceptable POI documents.",
                "overlap": 0.4286
              }
            ],
            "chunk": "List of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan * Proof of Address documents as in the \u201cList III - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar Number of individual eighteen years and above of age\u201d will also be applicable Note: (a) Any document listed in the above tabular statement shall be acceptable only if it meets the following conditions, namely:\u2014 (i) It is currently valid; (ii) The person in respect of whom such document is issued is entitled for the same; (iii) The information contained in the document is verifiable from the source; and (iv) The authority issuing the document has not made any declaration that such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is"
          }
        ]
      },
      "response": {
        "answer": "The information was not found in the provided Aadhaar Handbook.",
        "latency_seconds": 14.668363451999994,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 2,
        "facts_missing_from_context": 0,
        "model_abstained": true,
        "unsupported_claim_signal": false,
        "assessment": "Relevant evidence was retrieved, but the model abstained despite sufficient context."
      }
    },
    {
      "question_id": 14,
      "question": "What documents can be used as proof of address?",
      "model": "qwen2.5-coder:1.5b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.24258852799994202,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 63
          },
          {
            "source": "UIAI_2.pdf",
            "page": 1
          },
          {
            "source": "UIAI_2.pdf",
            "page": 12
          },
          {
            "source": "UIAI_2.pdf",
            "page": 18
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 63,
            "distance": 0.4018175005912781,
            "gold_location": true,
            "supporting_facts": [],
            "chunk": "Proof of Address) documents containing Name & Address 1. Passport 2. Bank Statement/ Passbook 3. Post Office Account Statement/ Passbook 4. Ration Card 5. Voter ID 6. Driving License 7. Government Photo ID cards/ service photo identity card issued by PSU 8. Electricity Bill (not older than 3 months) 9. Water Bill (not older than 3 months) 10. Telephone Landline Bill (not older than 3 months) 11. Property Tax Receipt (not older than 1 year) 12. Credit Card Statement (not older than 3 months) 13. Insurance Policy 14. Signed Letter having Photo from Bank on letterhead 15. Signed Letter having Photo issued by registered Company on letterhead 16. Signed Letter having Photo issued by Recognized Educational Institution on letterhead or Photo ID having address issued by Recognized Educational Institution 17. NREGS Job Card 18. Arms License 19. Pensioner Card 20. Freedom Fighter Card 21. Kissan Passbook 22. CGHS/ ECHS Card 23. Certificate of Address having photo issued by MP or MLA or MLC or Ga"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 1,
        "expected_fact_count": 3,
        "facts_with_context_support": [
          "Only documents from the UIDAI-valid supporting-document list should be presented as POA.",
          "The handbook provides a specific list of acceptable POA documents.",
          "Examples include accepted utility or property-related documents where they satisfy the stated validity conditions."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_2.pdf",
            "page": 3,
            "distance": 0.40162307024002075,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Only documents from the UIDAI-valid supporting-document list should be presented as POA.",
                "overlap": 0.5556
              },
              {
                "fact": "The handbook provides a specific list of acceptable POA documents.",
                "overlap": 0.4286
              }
            ],
            "chunk": "List of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan * Proof of Address documents as in the \u201cList III - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar Number of individual eighteen years and above of age\u201d will also be applicable Note: (a) Any document listed in the above tabular statement shall be acceptable only if it meets the following conditions, namely:\u2014 (i) It is currently valid; (ii) The person in respect of whom such document is issued is entitled for the same; (iii) The information contained in the document is verifiable from the source; and (iv) The authority issuing the document has not made any declaration that such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63,
            "distance": 0.4018175005912781,
            "gold_location": true,
            "supporting_facts": [],
            "chunk": "Proof of Address) documents containing Name & Address 1. Passport 2. Bank Statement/ Passbook 3. Post Office Account Statement/ Passbook 4. Ration Card 5. Voter ID 6. Driving License 7. Government Photo ID cards/ service photo identity card issued by PSU 8. Electricity Bill (not older than 3 months) 9. Water Bill (not older than 3 months) 10. Telephone Landline Bill (not older than 3 months) 11. Property Tax Receipt (not older than 1 year) 12. Credit Card Statement (not older than 3 months) 13. Insurance Policy 14. Signed Letter having Photo from Bank on letterhead 15. Signed Letter having Photo issued by registered Company on letterhead 16. Signed Letter having Photo issued by Recognized Educational Institution on letterhead or Photo ID having address issued by Recognized Educational Institution 17. NREGS Job Card 18. Arms License 19. Pensioner Card 20. Freedom Fighter Card 21. Kissan Passbook 22. CGHS/ ECHS Card 23. Certificate of Address having photo issued by MP or MLA or MLC or Ga"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 13,
            "distance": 0.41209468245506287,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Only documents from the UIDAI-valid supporting-document list should be presented as POA.",
                "overlap": 0.5556
              },
              {
                "fact": "The handbook provides a specific list of acceptable POA documents.",
                "overlap": 0.4286
              },
              {
                "fact": "Examples include accepted utility or property-related documents where they satisfy the stated validity conditions.",
                "overlap": 0.2727
              }
            ],
            "chunk": "List of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan * Proof of Address documents as in the above list will also be applicable. Note: (a) Any document listed in the above tabular statement shall be acceptable only if it meets the following conditions, namely: \u2014 (i) It is currently valid (ii) The person in respect of whom such document is issued is entitled for the same; (iii) The information contained in the document is verifiable from the source; and (iv) The authority issuing the document has not made any declaration that such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) A document is accepted as Proof of Relationship (PoR) docume"
          }
        ]
      },
      "response": {
        "answer": "The information was not found in the provided Aadhaar Handbook.",
        "latency_seconds": 15.355867178999915,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 3,
        "facts_missing_from_context": 0,
        "model_abstained": true,
        "unsupported_claim_signal": false,
        "assessment": "Relevant evidence was retrieved, but the model abstained despite sufficient context."
      }
    },
    {
      "question_id": 15,
      "question": "What documents can be used as proof of date of birth?",
      "model": "qwen2.5-coder:1.5b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.08413847799988616,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 63
          },
          {
            "source": "UIAI_2.pdf",
            "page": 1
          },
          {
            "source": "UIAI_2.pdf",
            "page": 4
          },
          {
            "source": "UIAI_2.pdf",
            "page": 13
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_2.pdf",
            "page": 13,
            "distance": 0.4209522008895874,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Only documents from the UIDAI-valid supporting-document list should be used as DoB proof.",
                "overlap": 0.4444
              },
              {
                "fact": "Birth certificate is an example of an accepted DoB document in the handbook's document list.",
                "overlap": 0.5
              }
            ],
            "chunk": "irth certificate as proof of date of birth b. For Non-Resident Indian (NRI) below 18 years of age: - Aadhaar number holder shall submit birth certificate or Indian Passport as proof of date of birth c. For resident Indians and Non-Resident Indian (NRI) of 18 years and above of age: - Aadhaar number holder shall submit any of the acceptable proof of date of birth documents as specified in the above list (ii) If the Aadhaar number holder had earlier submitted birth certificate as proof of date of birth, the Aadhaar number holder shall submit corrected birth certificate bearing same Birth Registration Number (BRN) (iii) If the Aadhaar number holder had earlier submitted any proof of date of birth document except birth certificate (for e.g. Marksheet, Passport etc.), the Aadhaar number holder shall submit corrected version of the same document or submit a birth certificate (iv) In case of date of birth update of woman who has changed her name post-marriage, proof of date of birth documents"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 1,
        "expected_fact_count": 2,
        "facts_with_context_support": [
          "Only documents from the UIDAI-valid supporting-document list should be used as DoB proof.",
          "Birth certificate is an example of an accepted DoB document in the handbook's document list."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_2.pdf",
            "page": 13,
            "distance": 0.4209522008895874,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Only documents from the UIDAI-valid supporting-document list should be used as DoB proof.",
                "overlap": 0.4444
              },
              {
                "fact": "Birth certificate is an example of an accepted DoB document in the handbook's document list.",
                "overlap": 0.5
              }
            ],
            "chunk": "irth certificate as proof of date of birth b. For Non-Resident Indian (NRI) below 18 years of age: - Aadhaar number holder shall submit birth certificate or Indian Passport as proof of date of birth c. For resident Indians and Non-Resident Indian (NRI) of 18 years and above of age: - Aadhaar number holder shall submit any of the acceptable proof of date of birth documents as specified in the above list (ii) If the Aadhaar number holder had earlier submitted birth certificate as proof of date of birth, the Aadhaar number holder shall submit corrected birth certificate bearing same Birth Registration Number (BRN) (iii) If the Aadhaar number holder had earlier submitted any proof of date of birth document except birth certificate (for e.g. Marksheet, Passport etc.), the Aadhaar number holder shall submit corrected version of the same document or submit a birth certificate (iv) In case of date of birth update of woman who has changed her name post-marriage, proof of date of birth documents"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 3,
            "distance": 0.42837268114089966,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Only documents from the UIDAI-valid supporting-document list should be used as DoB proof.",
                "overlap": 0.4444
              },
              {
                "fact": "Birth certificate is an example of an accepted DoB document in the handbook's document list.",
                "overlap": 0.375
              }
            ],
            "chunk": "birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Head of Family (HoF) based enrolment is mandatory for children below five years of age ex"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 5,
            "distance": 0.4645431339740753,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Only documents from the UIDAI-valid supporting-document list should be used as DoB proof.",
                "overlap": 0.4444
              },
              {
                "fact": "Birth certificate is an example of an accepted DoB document in the handbook's document list.",
                "overlap": 0.375
              }
            ],
            "chunk": "tionship or Date of Birth for enrolment for Aadhaar Number of individual eighteen years and above of age\u201d will also be applicable Note: (a) Any document listed in the above tabular statement shall be acceptable only if it meets the following conditions, namely:\u2014 (i) It is currently valid (ii) The person in respect of whom such document is issued is entitled for the same; (iii) The information contained in the document is verifiable from the source; and (iv) The authority issuing the document has not made any declaration that such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the"
          }
        ]
      },
      "response": {
        "answer": "The information was not found in the provided Aadhaar Handbook.",
        "latency_seconds": 15.210042288000068,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 2,
        "facts_missing_from_context": 0,
        "model_abstained": true,
        "unsupported_claim_signal": false,
        "assessment": "Relevant evidence was retrieved, but the model abstained despite sufficient context."
      }
    },
    {
      "question_id": 16,
      "question": "What is the role of the enrolment operator?",
      "model": "qwen2.5-coder:1.5b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.14295139000000745,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 3
          },
          {
            "source": "UIAI_1.pdf",
            "page": 10
          },
          {
            "source": "UIAI_1.pdf",
            "page": 50
          },
          {
            "source": "UIAI_1.pdf",
            "page": 62
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 10,
            "distance": 0.7259753942489624,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "The operator assists with the Aadhaar enrolment process.",
                "overlap": 0.4
              },
              {
                "fact": "The operator is involved in capturing and entering resident information into the enrolment system.",
                "overlap": 0.25
              }
            ],
            "chunk": "trars\u2019 own employees \u2022 Elect ed local body members \u2022 Members of local administrative bodies \u2022 P ostman \u2022 Influencers such as teachers \u2022 Health w orkers \u2022 Doct ors \u2022 Ang anwadis/Asha workers \u2022 Representatives of local NGOs The information captured during Introducer-based Enrolment is: \u2022 Introducer\u2019s name \u2022 Introducer\u2019s Aadhaar number \u2022 One modality of biometric information of the Introducer 2.1.4 Enr olment of Children For HoF based enrolment, the Head of Family has to give biometric confirmation at the time of enrolment."
          },
          {
            "source": "UIAI_1.pdf",
            "page": 50,
            "distance": 0.7597264051437378,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "The operator is involved in capturing and entering resident information into the enrolment system.",
                "overlap": 0.25
              }
            ],
            "chunk": "ose. 4. Demo graphic information required for enrolment. \u2014 (1) The f ollowing demogr aphic in formation shall be c ollected fr om all individuals under going enrolment (other than children below five years of age):"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 2,
        "expected_fact_count": 3,
        "facts_with_context_support": [
          "The operator assists with the Aadhaar enrolment process.",
          "The operator is involved in capturing and entering resident information into the enrolment system.",
          "The operator assists residents at the enrolment centre."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 10,
            "distance": 0.7259753942489624,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "The operator assists with the Aadhaar enrolment process.",
                "overlap": 0.4
              },
              {
                "fact": "The operator is involved in capturing and entering resident information into the enrolment system.",
                "overlap": 0.25
              }
            ],
            "chunk": "trars\u2019 own employees \u2022 Elect ed local body members \u2022 Members of local administrative bodies \u2022 P ostman \u2022 Influencers such as teachers \u2022 Health w orkers \u2022 Doct ors \u2022 Ang anwadis/Asha workers \u2022 Representatives of local NGOs The information captured during Introducer-based Enrolment is: \u2022 Introducer\u2019s name \u2022 Introducer\u2019s Aadhaar number \u2022 One modality of biometric information of the Introducer 2.1.4 Enr olment of Children For HoF based enrolment, the Head of Family has to give biometric confirmation at the time of enrolment."
          },
          {
            "source": "UIAI_1.pdf",
            "page": 52,
            "distance": 0.7478420734405518,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "The operator assists with the Aadhaar enrolment process.",
                "overlap": 0.6
              },
              {
                "fact": "The operator is involved in capturing and entering resident information into the enrolment system.",
                "overlap": 0.5
              },
              {
                "fact": "The operator assists residents at the enrolment centre.",
                "overlap": 0.8
              }
            ],
            "chunk": "vide f or han dling of such e xceptions in the enrolment and upda te software, and such enr olment shall be carried out as per the procedure as may be specified by the Authority for this purpose. 12.2 CHAP TER IV - Update of Resident Information 16. R equest for update of identity information. \u2014 An Aadhaar number holder ma y seek alt eration of his demogr aphic in formation or biome tric in formation in c ases specified under Section 31 of the Act in acc ordance with update procedure specified in this Chapter . 17. Mand atory update for children. \u2014 The Authority shall r equire the bio metric in formation of childr en t o be upda ted upon a ttaining fiv e y ears of ag e and fift een y ears of ag e in acc ordance with the pr ocedure specified by the Authority. 19. Mode of upda ting residents\u2019 information. \u2014 The pr ocess of upda ting r esidents\u2019 in formation in the CIDR ma y be c arried out thr ough the following modes:\u2014 (a) A t any enrolment centre with the assistance of the operator and"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 50,
            "distance": 0.7597264051437378,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "The operator is involved in capturing and entering resident information into the enrolment system.",
                "overlap": 0.25
              }
            ],
            "chunk": "ose. 4. Demo graphic information required for enrolment. \u2014 (1) The f ollowing demogr aphic in formation shall be c ollected fr om all individuals under going enrolment (other than children below five years of age):"
          }
        ]
      },
      "response": {
        "answer": "The role of the enrolment operator is to assist with the enrollment process by providing assistance and guidance during the biometric confirmation at the time of enrolment.",
        "latency_seconds": 12.890339906000008,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 3,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 17,
      "question": "What is the role of the verifier?",
      "model": "qwen2.5-coder:1.5b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.18855603899987727,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 62
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63
          }
        ],
        "gold_locations_retrieved": [],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 0,
        "expected_fact_count": 2,
        "facts_with_context_support": [],
        "facts_missing_from_retrieved_context": [
          "The verifier is involved in verification of the resident's enrolment/update information and supporting documentation.",
          "The enrolment/update form contains a verifier stamp and signature as part of the verification process."
        ],
        "chunk_analysis": [
          {
            "source": "UIAI_2.pdf",
            "page": 19,
            "distance": 0.8584055304527283,
            "gold_location": false,
            "supporting_facts": [],
            "chunk": "he certifier 5. Certifier Type \u2022 Mention the certifier type by tick mark one of box from below categories: \u2023 MP / MLA / MLC / Municipal Councillor \u2023 Gazetted Officer Group \u2018A\u2019/ Employees Provident Fund Organisation (EPFO) Officer \u2023 Tehsildar/ Gazetted Officer Group \u2018B\u2019 \u2023 Gazetted Officer at National AIDS Control Organisation (NACO)/State Health Department / Project Director of the State AIDS Control Society or his nominee \u2023 Head of recognised educational institution (only for the institute students concerned) \u2023 Village Panchayat Head/ President or Mukhiya/ Gaon Bura/ equivalent authority (for rural areas)/ Village Panchayat Secretary/ Village Revenue Officer or equivalent (for rural areas) 6. Checklist for Certifier \u2022 Verify the below checklist by tick mark the boxes: \u2023 No overwriting \u2023 Issue date is filled \u2023 Individual seeking to enrol / Aaadhaar number holder\u2019s signature is available \u2023 Certifier\u2019s details is filled \u2023 Individual seeking to enrol / Aaadhaar number holder\u2019s Photo is cro"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 49,
            "distance": 0.9198484420776367,
            "gold_location": false,
            "supporting_facts": [],
            "chunk": "Unique Identification Authority of India Government of India 49 Aadhaar Handbook for Residents 2021-Ver.2.0 11.1 R esponsibilities of UIDAI UID AI is r esponsible f or Aadhaar enr olment and authen tication under the Aadhaar Act 2016. The responsibilities include: \u2022 Operation and management of all stages of Aadhaar life cycle \u2022 P olicy development \u2022 Pr ocedure and system for issuing Aadhaar numbers to individuals \u2022 Authentication performance To download a copy of The Aadhaar Act 2016 SCAN"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 15,
            "distance": 0.9262070655822754,
            "gold_location": false,
            "supporting_facts": [],
            "chunk": "y above mentioned details of the Individual seeking to enrol /Aadhaar number holder and i am a.... (Tick appropriate box below) *To be used as Proof of Identify (PoI) only in specific cases as mentioned in the list of applicable supporting documents. CERTIFIER\u2019S DETAILS (TO BE FILLED BY THE CERTIFIER ONLY) No overwriting Issue date is filled Resident\u2019s signature Certifier\u2019s details Resident\u2019s Photo is cross signed and cross stamped (paper to photo or photo to paper) CHECKLIST FOR CERTIFIER Signature & Stamp of ther Certifier"
          }
        ]
      },
      "response": {
        "answer": "The role of the verifier is to verify the information provided by the certifier according to the checklist.",
        "latency_seconds": 12.90119467799991,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 0.0,
        "facts_supported_by_context": 0,
        "facts_missing_from_context": 2,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Context insufficient, but model answered. Review for unsupported claims."
      }
    },
    {
      "question_id": 18,
      "question": "How is an Aadhaar number generated?",
      "model": "qwen2.5-coder:1.5b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.22585540000000037,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 6
          },
          {
            "source": "UIAI_1.pdf",
            "page": 15
          },
          {
            "source": "UIAI_1.pdf",
            "page": 26
          },
          {
            "source": "UIAI_1.pdf",
            "page": 31
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 6,
            "distance": 0.47015380859375,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "The Aadhaar number is generated by UIDAI's system rather than manually assigned by the resident or operator.",
                "overlap": 0.2727
              },
              {
                "fact": "The Aadhaar number is a unique 12-digit identity number.",
                "overlap": 0.8
              }
            ],
            "chunk": "one to visit the relevant webpage or watch a video tutorial on the mentioned service. Le t\u2019s begin y our Aadhaar journe y with a sneak peek in to the w orld of Aadhaar , the r elated pr ocesses, the ser vices available for you and the power of this 12-digit number that is unique to you. 1.1 Aadhaar Ov erview Aadhaar is a 12-digit unique iden tification number issue b y the Unique Identification Authority of India (UIDAI) t o the r esidents of India a fter sa tisfying the v erification pr ocess (described in Section 2) laid down by the Authority."
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 1,
        "expected_fact_count": 3,
        "facts_with_context_support": [
          "The Aadhaar number is generated by UIDAI's system rather than manually assigned by the resident or operator.",
          "The Aadhaar number is a unique 12-digit identity number."
        ],
        "facts_missing_from_retrieved_context": [
          "Aadhaar generation occurs after enrolment information has been submitted and processed."
        ],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 32,
            "distance": 0.46779030561447144,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "The Aadhaar number is generated by UIDAI's system rather than manually assigned by the resident or operator.",
                "overlap": 0.3636
              },
              {
                "fact": "The Aadhaar number is a unique 12-digit identity number.",
                "overlap": 0.8
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 32Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 7: VERIFICATION OF AADHAAR Not every 12 digit number is Aadhaar Verify Aadhaar Online To watch tutorial on Verify Aadhaar Service SCAN 7.1 V erify any Aadhaar Online An y Aadhaar number c an be v erified onli ne fr om uidai. gov. in. Y ou c an use this ser vice t o check the authen ticity of an y Aadhaar number tha t is presented to you. For the entered Aadhaar number, you get the following details of the Aadhaar holder: \u2022 If the Aadhaar number e xists \u2022 Ag e band \u2022 Gender \u2022 St ate of residence \u2022 Mobile Number (in mask ed form showing only last 4 digits) Be sides, a service provider can also verify the Aadhaar presented by a person using following services: 1. Online from: https://resident.uidai.gov.in/verify 2. Fr om mAadhaar App 3. Sc an the QR Code on presented Aadhaar using the Aadhaar QR Code Scanner App or mAadhaar App"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 6,
            "distance": 0.47015380859375,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "The Aadhaar number is generated by UIDAI's system rather than manually assigned by the resident or operator.",
                "overlap": 0.2727
              },
              {
                "fact": "The Aadhaar number is a unique 12-digit identity number.",
                "overlap": 0.8
              }
            ],
            "chunk": "one to visit the relevant webpage or watch a video tutorial on the mentioned service. Le t\u2019s begin y our Aadhaar journe y with a sneak peek in to the w orld of Aadhaar , the r elated pr ocesses, the ser vices available for you and the power of this 12-digit number that is unique to you. 1.1 Aadhaar Ov erview Aadhaar is a 12-digit unique iden tification number issue b y the Unique Identification Authority of India (UIDAI) t o the r esidents of India a fter sa tisfying the v erification pr ocess (described in Section 2) laid down by the Authority."
          },
          {
            "source": "UIAI_1.pdf",
            "page": 7,
            "distance": 0.4744594693183899,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "The Aadhaar number is generated by UIDAI's system rather than manually assigned by the resident or operator.",
                "overlap": 0.3636
              },
              {
                "fact": "The Aadhaar number is a unique 12-digit identity number.",
                "overlap": 0.6
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 7 Aadhaar Handbook for Residents 2021-Ver.2.0 1.2 Who c an get Aadhaar? An y individual in India, irr espective of ag e and g ender, who is a r esident of India, or a non r esident Indian (NRI), can enroll to obtain Aadhaar number. For an individual, only one Aadhaar number is generated, as the uniqueness is achieved through the process of demographic and biometric de-duplication. 1.2.1. Aadh aar for residents of India Y ou ar e eligible f or Aadhaar Enr olment if y ou ar e a r esident of India. This, b y de finition, means tha t y ou ha ve r esided in India f or a period or periods amoun ting in all t o one hundr ed and eigh ty-two days (182 days) or more in the twelve months immediately preceding the date of application for Aadhaar enrolment. 1.2.2 Aadh aar for NRIs If y ou are a non-resident Indian (NRI), you can enroll for Aadhaar if you have an Indian Passport. The mandate of 182 days does not apply for NRIs. You can vis"
          }
        ]
      },
      "response": {
        "answer": "The information was not found in the provided Aadhaar Handbook.",
        "latency_seconds": 15.483883904000095,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 0.6667,
        "facts_supported_by_context": 2,
        "facts_missing_from_context": 1,
        "model_abstained": true,
        "unsupported_claim_signal": false,
        "assessment": "Partial context support; model abstained despite some evidence being retrieved."
      }
    },
    {
      "question_id": 19,
      "question": "What should a resident do if there is an error in their Aadhaar information?",
      "model": "qwen2.5-coder:1.5b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.1783902390000094,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 17
          },
          {
            "source": "UIAI_1.pdf",
            "page": 18
          },
          {
            "source": "UIAI_1.pdf",
            "page": 20
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 20,
            "distance": 0.4807325005531311,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "The resident should request an update/correction of the incorrect information.",
                "overlap": 0.2857
              },
              {
                "fact": "Updates can be performed through the applicable Aadhaar update process.",
                "overlap": 0.2857
              }
            ],
            "chunk": "lds (name, gender and date of birth) in y our Aadhaar again (beyond the permissible limit), you need to: 1. Visit an y Aadhaar Enr olment Cen tre (with v alid supporting docume nt f or N ame & Da te of Birth upda te) 2. Place an up date request 3. Send the latest URN (Update Request Number) to Aadhaar help centre by calling 1947 or via email to help@uidai.gov.in and request for \u2018exception update\u2019 The c ase is then assigne d t o the UID AI\u2019s R egional Office tha t handles y our r egion f or due dilig ence. Once verified, your update request will be processed and the outcome communicated to you. 3.7 Upda te in case of Aadhaar Deactivation Y our Aadhaar data is subject to periodic quality checks. During such quality checks by UIDAI, if any discr epancy is f ound in the supporting documen ts or c aptured biome tric da ta of a r esident, his/her Aadhaar is deactiv ated t emporarily and the Aadhaar holder is duly notified of this. If y our Aadhaar gets suspended, you would not be able to ava"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 1,
        "expected_fact_count": 3,
        "facts_with_context_support": [
          "The resident should request an update/correction of the incorrect information.",
          "Updates can be performed through the applicable Aadhaar update process.",
          "Valid supporting documents may be required depending on the field being corrected."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 20,
            "distance": 0.4807325005531311,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "The resident should request an update/correction of the incorrect information.",
                "overlap": 0.2857
              },
              {
                "fact": "Updates can be performed through the applicable Aadhaar update process.",
                "overlap": 0.2857
              }
            ],
            "chunk": "lds (name, gender and date of birth) in y our Aadhaar again (beyond the permissible limit), you need to: 1. Visit an y Aadhaar Enr olment Cen tre (with v alid supporting docume nt f or N ame & Da te of Birth upda te) 2. Place an up date request 3. Send the latest URN (Update Request Number) to Aadhaar help centre by calling 1947 or via email to help@uidai.gov.in and request for \u2018exception update\u2019 The c ase is then assigne d t o the UID AI\u2019s R egional Office tha t handles y our r egion f or due dilig ence. Once verified, your update request will be processed and the outcome communicated to you. 3.7 Upda te in case of Aadhaar Deactivation Y our Aadhaar data is subject to periodic quality checks. During such quality checks by UIDAI, if any discr epancy is f ound in the supporting documen ts or c aptured biome tric da ta of a r esident, his/her Aadhaar is deactiv ated t emporarily and the Aadhaar holder is duly notified of this. If y our Aadhaar gets suspended, you would not be able to ava"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 25,
            "distance": 0.4891921877861023,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "The resident should request an update/correction of the incorrect information.",
                "overlap": 0.2857
              },
              {
                "fact": "Updates can be performed through the applicable Aadhaar update process.",
                "overlap": 0.2857
              },
              {
                "fact": "Valid supporting documents may be required depending on the field being corrected.",
                "overlap": 0.25
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 25 Aadhaar Handbook for Residents 2021-Ver.2.0 To file a complaint SCAN can download and print the Aadhaar Enrolment/Update from the link below https://www. uidai.gov.in/images/commdoc/valid_documents_list.pdf. R esident c an bring the filled f orm t o an y centre to avoid mistakes 5.2 Ho w to complaint if the centre charges you extra or if you are not satisfied with the service If the centre charged you more than the prescribed service charge men tioned abo ve, y ou c an file a c omplaint in f ollowing w ays: \u2022 Call 1947 and r egister a complaint \u2022 Email the cen tre details along with your URN and contact details to help@uidai.gov.in \u2022 File a c omplaint online fr om: h ttps://resident.uidai. gov.in/file-complaint \u2022 R esident can complaint with the concerned Registrar, details of the registrar are available at your centre."
          },
          {
            "source": "UIAI_1.pdf",
            "page": 5,
            "distance": 0.498706579208374,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "The resident should request an update/correction of the incorrect information.",
                "overlap": 0.4286
              },
              {
                "fact": "Updates can be performed through the applicable Aadhaar update process.",
                "overlap": 0.4286
              },
              {
                "fact": "Valid supporting documents may be required depending on the field being corrected.",
                "overlap": 0.375
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 5 Aadhaar Handbook for Residents 2021-Ver.2.0 9.3 How you can further protect your Aadhaar Information 39 SE CTION 10: GRIEVANCE HANDLING 40 10.1 Aadhaar Sampa rk Kendra - Helpline 1947 40 10.2 Help via Email 41 10.3 Aadhaar W ebsite 41 10.4 Aadhaar Cha tbot 42 10.5 So cial Media 43 10.5.1 Official Social Media Profiles: 43 10.5.2 Beware of Fake Profiles/ User Accounts 45 10.6 Aadhaar Regional Offices 46 SE CTION 11: THE AADHAAR ACT 2016 48 11.1 Responsibilities of UIDAI 49 SE CTION 12: AADHAAR ( ENROLMENT AN D UPD ATE) RE GULATIONS, 2 016 50 12.1 CHAP TER II - Resident Enrolment Process 50 12.2 CHAPTER IV - Update of Resident Information 52 12.3 CHAPTER VI - Omission or Deactivation of Aadhaar Number and Identity Information 53 SE CTION 13: APPENDIX 56 13.1 Annexure I - List of valid supporting documents 56 13.2 Annexure II \u2013 Format for Certificate (For Aadhaar Enrolment/ Update) 58 13.3 Annexure III \u2013 How to fill (Certifica"
          }
        ]
      },
      "response": {
        "answer": "If there is an error in your Aadhaar information, you should visit an Aadhaar Enrolment Centre with a valid supporting document for Name and Date of Birth. Place an update request, send the latest URN to the Aadhaar help centre by calling 1947 or via email to help@uidai.gov.in and request for 'exception update'. The case is then assigned to the UIDAI's Regional Office that handles your region for due diligence. Once verified, your update request will be processed and the outcome communicated to you.",
        "latency_seconds": 26.039430088000017,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 3,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 20,
      "question": "What is demographic authentication?",
      "model": "qwen2.5-coder:1.5b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.06219441600001119,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 36
          },
          {
            "source": "UIAI_1.pdf",
            "page": 37
          },
          {
            "source": "UIAI_1.pdf",
            "page": 39
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 36,
            "distance": 0.6933571100234985,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Demographic authentication is authentication using demographic information associated with Aadhaar.",
                "overlap": 0.6
              },
              {
                "fact": "It is one of the modes of Aadhaar authentication.",
                "overlap": 0.75
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 36Aadhaar Handbook for Residents 2021-Ver.2.0 You will receive any Aadhaar-based credits in only one account that you have mapped to the NPCI mapper. \u2022 Upda te Demographic Online: If you have your Aadhaar registered mobile number, you can place an online demographic details update request using the SSUP (self- service update portal) of Aadhaar. This service requires mandatory OTP authentication \u2022 Aadhaar Bank Linking Status: You can check your Aadhaar and Bank Account Linking Status in NPCI mapper using this service. This service requires mandatory OTP authentication. \u2022 Aadhaar Update History: You can use this service to get a chronological history of all updates done in your Aadhaar. The OTP for this service will be sent to your registered mobile number \u2022 V erify Email/ Mobile Number: You can use this service to verify their email or mobile number in your Aadhaar. The OTP for this service will be sent to your registered mobi"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 1,
        "expected_fact_count": 2,
        "facts_with_context_support": [
          "Demographic authentication is authentication using demographic information associated with Aadhaar.",
          "It is one of the modes of Aadhaar authentication."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 36,
            "distance": 0.6933571100234985,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Demographic authentication is authentication using demographic information associated with Aadhaar.",
                "overlap": 0.6
              },
              {
                "fact": "It is one of the modes of Aadhaar authentication.",
                "overlap": 0.75
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 36Aadhaar Handbook for Residents 2021-Ver.2.0 You will receive any Aadhaar-based credits in only one account that you have mapped to the NPCI mapper. \u2022 Upda te Demographic Online: If you have your Aadhaar registered mobile number, you can place an online demographic details update request using the SSUP (self- service update portal) of Aadhaar. This service requires mandatory OTP authentication \u2022 Aadhaar Bank Linking Status: You can check your Aadhaar and Bank Account Linking Status in NPCI mapper using this service. This service requires mandatory OTP authentication. \u2022 Aadhaar Update History: You can use this service to get a chronological history of all updates done in your Aadhaar. The OTP for this service will be sent to your registered mobile number \u2022 V erify Email/ Mobile Number: You can use this service to verify their email or mobile number in your Aadhaar. The OTP for this service will be sent to your registered mobi"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 33,
            "distance": 0.7304410338401794,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Demographic authentication is authentication using demographic information associated with Aadhaar.",
                "overlap": 0.4
              },
              {
                "fact": "It is one of the modes of Aadhaar authentication.",
                "overlap": 0.25
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 33 Aadhaar Handbook for Residents 2021-Ver.2.0 7.2 Secur e QR Code on Aadhaar Th e Aadhaar letter, Aadhaar PVC Card and eAadhaar contain a digit ally signed secure QR code that has demographic details of the Aadhaar holder with photograph. This QR Code can be used to verify the identity of the Aadhaar holder . Th e service provider needs to use Aadhaar QR Code Scanner App (also available in mAadhaar) to scan the Secure QR Code on the presented Aadhaar. Aadhaar Offline Verification made easy using Secure QR Code To read more about Secure QR Code SCAN To watch tutorial on the Secure QR Code SCAN"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 20,
            "distance": 0.7322732210159302,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Demographic authentication is authentication using demographic information associated with Aadhaar.",
                "overlap": 0.6
              },
              {
                "fact": "It is one of the modes of Aadhaar authentication.",
                "overlap": 0.25
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 20Aadhaar Handbook for Residents 2021-Ver.2.0 3.5 Li mits on number of updates As per the update policy of UIDAI, the following limits have been set for update of demographic information in their Aadhaar: \u2022 Name \u2013 Can be updated twice \u2022 Gender \u2013 Once \u2022 Date of Birth \u2013 Once Th e pr ocess f or the abo ve upda tes within the permissible limits is same as described in Section 3.1 abo ve. An y other in formation in y our Aadhaar c an be upda ted as and when r equired. Ther e is no limit on the number of updates for any other demographic information \u2013 address, email ID, mobile number; or biometrics \u2013 photograph, fingerprints, iris scans. 3.6 Ex ception Process for Aadhaar Update If for any reason, you need to update the above three fields (name, gender and date of birth) in y our Aadhaar again (beyond the permissible limit), you need to: 1. Visit an y Aadhaar Enr olment Cen tre (with v alid supporting docume nt f or N ame & Da te o"
          }
        ]
      },
      "response": {
        "answer": "Demographic authentication involves verifying the identity of a person using their Aadhaar number and other relevant information. This can be done through various methods such as scanning a QR code on the Aadhaar card, verifying an email or mobile number, or using an Aadhaar-based credit service. The process typically requires a one-time password (OTP) to authenticate the user's identity.",
        "latency_seconds": 18.314652314999876,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 2,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": true,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 21,
      "question": "What is biometric authentication?",
      "model": "qwen2.5-coder:1.5b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.15996991099996194,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 19
          },
          {
            "source": "UIAI_1.pdf",
            "page": 20
          },
          {
            "source": "UIAI_1.pdf",
            "page": 39
          },
          {
            "source": "UIAI_1.pdf",
            "page": 50
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 20,
            "distance": 0.6603267192840576,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Biometric authentication uses biometric information associated with the resident's Aadhaar.",
                "overlap": 0.4286
              },
              {
                "fact": "Biometric information includes characteristics such as fingerprints and iris scans.",
                "overlap": 0.25
              },
              {
                "fact": "Biometric authentication is one of the modes through which Aadhaar can be authenticated.",
                "overlap": 0.4286
              }
            ],
            "chunk": "r c aptured biome tric da ta of a r esident, his/her Aadhaar is deactiv ated t emporarily and the Aadhaar holder is duly notified of this. If y our Aadhaar gets suspended, you would not be able to avail any service based on Aadhaar OTP/ biometric authentication. In such c ases, the Aadhaar holder needs to follow the below steps: 1. R efer t o the e mail/ SMS/ le tter b y UID AI or c all 1947 t o kno w sub sequent c ourse of action. 2. If the deactiv ation is due t o biome trics r elated r eason, visit an y Aadhaar Enr olment Cen tre and update your biometrics. Name can be updated TWICE Gender can be updated only ONCE Want to update Date of Birth, Name and Gender in Aadhaar? Date of birth can be updated only ONCE NOTE THE FOLLOWING"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 1,
        "expected_fact_count": 3,
        "facts_with_context_support": [
          "Biometric authentication uses biometric information associated with the resident's Aadhaar.",
          "Biometric information includes characteristics such as fingerprints and iris scans.",
          "Biometric authentication is one of the modes through which Aadhaar can be authenticated."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 20,
            "distance": 0.6603267192840576,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Biometric authentication uses biometric information associated with the resident's Aadhaar.",
                "overlap": 0.4286
              },
              {
                "fact": "Biometric information includes characteristics such as fingerprints and iris scans.",
                "overlap": 0.25
              },
              {
                "fact": "Biometric authentication is one of the modes through which Aadhaar can be authenticated.",
                "overlap": 0.4286
              }
            ],
            "chunk": "r c aptured biome tric da ta of a r esident, his/her Aadhaar is deactiv ated t emporarily and the Aadhaar holder is duly notified of this. If y our Aadhaar gets suspended, you would not be able to avail any service based on Aadhaar OTP/ biometric authentication. In such c ases, the Aadhaar holder needs to follow the below steps: 1. R efer t o the e mail/ SMS/ le tter b y UID AI or c all 1947 t o kno w sub sequent c ourse of action. 2. If the deactiv ation is due t o biome trics r elated r eason, visit an y Aadhaar Enr olment Cen tre and update your biometrics. Name can be updated TWICE Gender can be updated only ONCE Want to update Date of Birth, Name and Gender in Aadhaar? Date of birth can be updated only ONCE NOTE THE FOLLOWING"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 64,
            "distance": 0.6823380589485168,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Biometric authentication uses biometric information associated with the resident's Aadhaar.",
                "overlap": 0.2857
              },
              {
                "fact": "Biometric authentication is one of the modes through which Aadhaar can be authenticated.",
                "overlap": 0.2857
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 64Aadhaar Handbook for Residents 2021-Ver.2.0 Verify Aadhaar SCAN Lock/ Unlock Aadhaar SCAN Check your Aadhaar Update History SCAN Update Address Without Documents SCAN Secure QR Code SCAN Locate Aadhaar Enrolment Centre SCAN Verify Digital Signature SCAN Get back your lost Aadhaar number or Enrolment ID SCAN Check status of your Aadhaar enrolment or update request SCAN mAadhaar App SCAN Download Aadhaar SCAN Generate/ Retrieve VID SCAN Check your Aadhaar Authentication History SCAN Check Status of your online update request SCAN Online Appointment Booking SCAN Update Address Online SCAN What is EID SCAN Lock/ Unlock Biometrics SCAN Order Aadhaar Reprint SCAN Aadhaar Chatbot SCAN 13.5 Aadhaar T utorial Videos"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 52,
            "distance": 0.6998177766799927,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Biometric information includes characteristics such as fingerprints and iris scans.",
                "overlap": 0.5
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 52Aadhaar Handbook for Residents 2021-Ver.2.0 the r elationship be tween the link ed par ent/guardian and the child shall be c ollected a t the time of enr olment. Only those childr en c an be enr olled based on the r elationship documen t (P oR), whose names ar e r ecorded in the r elationship documen t. 6. Enr olment of residents with biometric exceptions. \u2014 (1) F or r esidents who ar e unable t o pr ovide fing erprints, o wing t o r easons such as injur y, de formities, amput ation of the fing ers/ hands or an y other r elevant r eason, only iris scans of such residents will be collected. (2) F or r esidents who ar e unable t o pr ovide an y biome tric in formation c ontemplated b y these r egulations, the Authority shall pr ovide f or han dling of such e xceptions in the enrolment and upda te software, and such enr olment shall be carried out as per the procedure as may be specified by the Authority for this purpose. 12.2"
          }
        ]
      },
      "response": {
        "answer": "Biometric authentication involves using unique physical characteristics of an individual to verify their identity. This can include fingerprints, facial recognition, iris scans, or voice recognition. The Aadhaar Handbook provides specific instructions on how to update your biometrics if they are not provided during enrollment.",
        "latency_seconds": 18.68970507500012,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 3,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 22,
      "question": "What is Aadhaar authentication?",
      "model": "qwen2.5-coder:1.5b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.053447285000174816,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 7
          },
          {
            "source": "UIAI_1.pdf",
            "page": 36
          },
          {
            "source": "UIAI_1.pdf",
            "page": 37
          },
          {
            "source": "UIAI_1.pdf",
            "page": 38
          },
          {
            "source": "UIAI_1.pdf",
            "page": 39
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 37,
            "distance": 0.3674051761627197,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Aadhaar authentication is an online process through which Aadhaar identity can be verified.",
                "overlap": 0.4286
              },
              {
                "fact": "Authentication can involve demographic, biometric or OTP-based authentication.",
                "overlap": 0.3333
              },
              {
                "fact": "The authentication response can be a yes/no verification response.",
                "overlap": 0.25
              },
              {
                "fact": "Aadhaar authentication does not provide the requesting entity unrestricted access to the resident's Aadhaar database.",
                "overlap": 0.25
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 37 Aadhaar Handbook for Residents 2021-Ver.2.0 To read FAQs SCAN \u2022 Aadhaar Authentication History: Using this service, you can g et de tails of authen tication perf ormed b y y ou in pas t 6 mon ths. The OTP for this service will be sent to your registered mobile number. \u2022 Offline eKYC Service: Using this service, you can generate your digitally signed Aadhaar details that you may use for KYC purposes. To know more about Aadhaar Authentication History SCAN To know more about Aadhaar Paperless Offline eKYC: SCAN 8.3 Fr equently Asked Questions UID AI also has e xtensive F AQs section on the w ebsite and mAadhaar app to help residents understand Aadhaar process, services and products."
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 1,
        "expected_fact_count": 4,
        "facts_with_context_support": [
          "Aadhaar authentication is an online process through which Aadhaar identity can be verified.",
          "Authentication can involve demographic, biometric or OTP-based authentication.",
          "The authentication response can be a yes/no verification response.",
          "Aadhaar authentication does not provide the requesting entity unrestricted access to the resident's Aadhaar database."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 33,
            "distance": 0.342551589012146,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Aadhaar authentication is an online process through which Aadhaar identity can be verified.",
                "overlap": 0.2857
              },
              {
                "fact": "The authentication response can be a yes/no verification response.",
                "overlap": 0.25
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 33 Aadhaar Handbook for Residents 2021-Ver.2.0 7.2 Secur e QR Code on Aadhaar Th e Aadhaar letter, Aadhaar PVC Card and eAadhaar contain a digit ally signed secure QR code that has demographic details of the Aadhaar holder with photograph. This QR Code can be used to verify the identity of the Aadhaar holder . Th e service provider needs to use Aadhaar QR Code Scanner App (also available in mAadhaar) to scan the Secure QR Code on the presented Aadhaar. Aadhaar Offline Verification made easy using Secure QR Code To read more about Secure QR Code SCAN To watch tutorial on the Secure QR Code SCAN"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 37,
            "distance": 0.3674051761627197,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Aadhaar authentication is an online process through which Aadhaar identity can be verified.",
                "overlap": 0.4286
              },
              {
                "fact": "Authentication can involve demographic, biometric or OTP-based authentication.",
                "overlap": 0.3333
              },
              {
                "fact": "The authentication response can be a yes/no verification response.",
                "overlap": 0.25
              },
              {
                "fact": "Aadhaar authentication does not provide the requesting entity unrestricted access to the resident's Aadhaar database.",
                "overlap": 0.25
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 37 Aadhaar Handbook for Residents 2021-Ver.2.0 To read FAQs SCAN \u2022 Aadhaar Authentication History: Using this service, you can g et de tails of authen tication perf ormed b y y ou in pas t 6 mon ths. The OTP for this service will be sent to your registered mobile number. \u2022 Offline eKYC Service: Using this service, you can generate your digitally signed Aadhaar details that you may use for KYC purposes. To know more about Aadhaar Authentication History SCAN To know more about Aadhaar Paperless Offline eKYC: SCAN 8.3 Fr equently Asked Questions UID AI also has e xtensive F AQs section on the w ebsite and mAadhaar app to help residents understand Aadhaar process, services and products."
          },
          {
            "source": "UIAI_1.pdf",
            "page": 4,
            "distance": 0.38354194164276123,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Aadhaar authentication is an online process through which Aadhaar identity can be verified.",
                "overlap": 0.2857
              },
              {
                "fact": "The authentication response can be a yes/no verification response.",
                "overlap": 0.25
              }
            ],
            "chunk": "eration 26 6.2 Aadhaar Letter 26 6.3 Do wnload eAadhaar 27 6.3.1 O TP to download Aadhaar & Password 28 6.3.2 Validating the digital signature on eAadhaar 28 6.3.3 Do wnloaded Aadhaar is legally valid 28 6.3.4 F eatures of eAadhaar 29 6.4 Aadhaar P VC Card 29 6.5 mAadhaar Mob ile App 30 SE CTION 7: VERIFICATION OF AADHAAR 3 2 7.1 V erify any Aadhaar Online 32 7.2 Secur e QR Code on Aadhaar 33 SE CTION 8: AADHAAR ONLINE SERVICES 34 8.1 Aadhaar Online Services (that DO NOT require Registered Mobile Number) 34 8.2 Aadhaar Online Services (that require Registered Mobile Number) 35 8.3 Frequently Asked Questions 37 SE CTION 9: PRIVACY AND SECURITY OF YOUR AADHAAR DATA 38 9.1 UIDAI Protecting privacy and information 38 9.2 Da ta Security in CIDR 39"
          }
        ]
      },
      "response": {
        "answer": "Aadhaar authentication involves verifying the identity of an individual using their Aadhaar number. This can be done online or offline, depending on the service provider's requirements. The process typically involves scanning a QR code that contains demographic details and a digital signature. The service provider needs to use an Aadhaar QR Code Scanner App (also available in mAadhaar) to scan the Secure QR Code on the presented Aadhaar.",
        "latency_seconds": 18.53731818999995,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 4,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 23,
      "question": "Can a resident update Aadhaar information?",
      "model": "qwen2.5-coder:1.5b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.17089240100017378,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 17
          },
          {
            "source": "UIAI_1.pdf",
            "page": 18
          },
          {
            "source": "UIAI_1.pdf",
            "page": 20
          },
          {
            "source": "UIAI_1.pdf",
            "page": 36
          },
          {
            "source": "UIAI_1.pdf",
            "page": 52
          }
        ],
        "gold_locations_retrieved": [],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 0,
        "expected_fact_count": 3,
        "facts_with_context_support": [
          "Yes, an Aadhaar number holder can request alteration/update of demographic or biometric information.",
          "Updates can be performed through an enrolment centre.",
          "Some demographic updates can also be performed online using the applicable self-service process when the registered mobile number is available."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 16,
            "distance": 0.415986031293869,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Yes, an Aadhaar number holder can request alteration/update of demographic or biometric information.",
                "overlap": 0.3
              }
            ],
            "chunk": "should check details of your Aadhaar for any other required update. 3.1 Documen ts Required for Update Y ou need t o submit a v alid supporting documen t f or v erification f or upda ting f ollowing de tails in y our Aadhaar: \u2022 Name \u2022 Addr ess \u2022 Da te of Birth When you update your Aadhaar, only your Aadhaar details get updated, the Aadhaar number shall remain same."
          },
          {
            "source": "UIAI_1.pdf",
            "page": 16,
            "distance": 0.4215809404850006,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Yes, an Aadhaar number holder can request alteration/update of demographic or biometric information.",
                "overlap": 0.5
              },
              {
                "fact": "Updates can be performed through an enrolment centre.",
                "overlap": 0.4
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 16Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 3: AADHAAR UPDATE You can update any demographic details (name, address, date of birth, gender, mobile number or email ID), or biometric details (photograph, fingerprints, iris scan) in your Aadhaar from any Aadhaar Enrolment Centre across the country. You can get more than one entry updated in Aadhaar Enrolment Centre at the same time . The fee for update of single entry (such as address) and multiple entries (such as address, mobile phone number, email address etc.) is the same. So upda ting all those en tries t ogether which need t o be upda ted is both c onvenient and c ost e ffective f or y ou. Ther efore, be fore visiting Aadhaar Enr olment Cen tre f or an upda te, y ou should check details of your Aadhaar for any other required update. 3.1 Documen ts Required for Update Y ou need t o submit a v alid supporting documen t f or v erification f or upda ting f ollowing d"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 21,
            "distance": 0.42346474528312683,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Yes, an Aadhaar number holder can request alteration/update of demographic or biometric information.",
                "overlap": 0.4
              },
              {
                "fact": "Updates can be performed through an enrolment centre.",
                "overlap": 0.4
              },
              {
                "fact": "Some demographic updates can also be performed online using the applicable self-service process when the registered mobile number is available.",
                "overlap": 0.3077
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 21 Aadhaar Handbook for Residents 2021-Ver.2.0 3. If the deactiv ation is due t o docu ments r elated r eason, c ontact/visit the c oncerned Aadhaar Regional Office for update after due diligence. 3.8 Aadhaar Upd ate Status Check Y ou can use the 8 digit Update Request Number (URN) mentioned on the upda te ackno wledgement slip t o check the s tatus of your Aadhaar update request from: \u2022 Calling Aadhaar helpline \u2013 1947 \u2022 Sending email t o help@uidai.gov.in \u2022 Visiting uidai.gov.in \u2022 Thr ough mAadhaar App On success ful submission of an online address update request via SSUP , you receive a URN (Update Request Number). This is shown on screen and also sent via SMS to your registered mobile number. Use this URN and your Aadhaar number to track s tatus of y our Aadhaar upda te fr om: h ttps://ssup.uidai. gov.in/checkSSUPStatus/checkupdatestatus. 3.9 P oints to remember for Aadhaar Update at Aadhaar Enrolment Centre 1. An y Aadhaa"
          }
        ]
      },
      "response": {
        "answer": "Yes, a resident can update Aadhaar information through an Aadhaar Enrolment Centre across the country. The handbook provides clear instructions on how to check details of your Aadhaar for any other required updates and submit valid supporting documents for verification or updating demographic details such as name, address, date of birth, gender, mobile number, or email ID.",
        "latency_seconds": 17.560698717999912,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 3,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 24,
      "question": "What types of information can be updated in Aadhaar?",
      "model": "qwen2.5-coder:1.5b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.13244721000000936,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 17
          },
          {
            "source": "UIAI_1.pdf",
            "page": 20
          },
          {
            "source": "UIAI_1.pdf",
            "page": 52
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 20,
            "distance": 0.47000300884246826,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Name, gender and date of birth can be updated subject to the stated limits.",
                "overlap": 0.625
              },
              {
                "fact": "Email ID and mobile number can be updated.",
                "overlap": 0.5
              }
            ],
            "chunk": "lds (name, gender and date of birth) in y our Aadhaar again (beyond the permissible limit), you need to: 1. Visit an y Aadhaar Enr olment Cen tre (with v alid supporting docume nt f or N ame & Da te of Birth upda te) 2. Place an up date request 3. Send the latest URN (Update Request Number) to Aadhaar help centre by calling 1947 or via email to help@uidai.gov.in and request for \u2018exception update\u2019 The c ase is then assigne d t o the UID AI\u2019s R egional Office tha t handles y our r egion f or due dilig ence. Once verified, your update request will be processed and the outcome communicated to you. 3.7 Upda te in case of Aadhaar Deactivation Y our Aadhaar data is subject to periodic quality checks. During such quality checks by UIDAI, if any discr epancy is f ound in the supporting documen ts or c aptured biome tric da ta of a r esident, his/her Aadhaar is deactiv ated t emporarily and the Aadhaar holder is duly notified of this. If y our Aadhaar gets suspended, you would not be able to ava"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 1,
        "expected_fact_count": 5,
        "facts_with_context_support": [
          "Demographic information can be updated.",
          "Address can be updated.",
          "Name, gender and date of birth can be updated subject to the stated limits.",
          "Email ID and mobile number can be updated.",
          "Biometric information such as photograph, fingerprints and iris scans can be updated."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 16,
            "distance": 0.3720545172691345,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Demographic information can be updated.",
                "overlap": 0.3333
              },
              {
                "fact": "Address can be updated.",
                "overlap": 0.5
              },
              {
                "fact": "Name, gender and date of birth can be updated subject to the stated limits.",
                "overlap": 0.375
              },
              {
                "fact": "Email ID and mobile number can be updated.",
                "overlap": 0.5
              }
            ],
            "chunk": "should check details of your Aadhaar for any other required update. 3.1 Documen ts Required for Update Y ou need t o submit a v alid supporting documen t f or v erification f or upda ting f ollowing de tails in y our Aadhaar: \u2022 Name \u2022 Addr ess \u2022 Da te of Birth When you update your Aadhaar, only your Aadhaar details get updated, the Aadhaar number shall remain same."
          },
          {
            "source": "UIAI_1.pdf",
            "page": 16,
            "distance": 0.41792237758636475,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Demographic information can be updated.",
                "overlap": 0.6667
              },
              {
                "fact": "Address can be updated.",
                "overlap": 1.0
              },
              {
                "fact": "Name, gender and date of birth can be updated subject to the stated limits.",
                "overlap": 0.625
              },
              {
                "fact": "Email ID and mobile number can be updated.",
                "overlap": 1.0
              },
              {
                "fact": "Biometric information such as photograph, fingerprints and iris scans can be updated.",
                "overlap": 0.75
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 16Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 3: AADHAAR UPDATE You can update any demographic details (name, address, date of birth, gender, mobile number or email ID), or biometric details (photograph, fingerprints, iris scan) in your Aadhaar from any Aadhaar Enrolment Centre across the country. You can get more than one entry updated in Aadhaar Enrolment Centre at the same time . The fee for update of single entry (such as address) and multiple entries (such as address, mobile phone number, email address etc.) is the same. So upda ting all those en tries t ogether which need t o be upda ted is both c onvenient and c ost e ffective f or y ou. Ther efore, be fore visiting Aadhaar Enr olment Cen tre f or an upda te, y ou should check details of your Aadhaar for any other required update. 3.1 Documen ts Required for Update Y ou need t o submit a v alid supporting documen t f or v erification f or upda ting f ollowing d"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 20,
            "distance": 0.47000300884246826,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Name, gender and date of birth can be updated subject to the stated limits.",
                "overlap": 0.625
              },
              {
                "fact": "Email ID and mobile number can be updated.",
                "overlap": 0.5
              }
            ],
            "chunk": "lds (name, gender and date of birth) in y our Aadhaar again (beyond the permissible limit), you need to: 1. Visit an y Aadhaar Enr olment Cen tre (with v alid supporting docume nt f or N ame & Da te of Birth upda te) 2. Place an up date request 3. Send the latest URN (Update Request Number) to Aadhaar help centre by calling 1947 or via email to help@uidai.gov.in and request for \u2018exception update\u2019 The c ase is then assigne d t o the UID AI\u2019s R egional Office tha t handles y our r egion f or due dilig ence. Once verified, your update request will be processed and the outcome communicated to you. 3.7 Upda te in case of Aadhaar Deactivation Y our Aadhaar data is subject to periodic quality checks. During such quality checks by UIDAI, if any discr epancy is f ound in the supporting documen ts or c aptured biome tric da ta of a r esident, his/her Aadhaar is deactiv ated t emporarily and the Aadhaar holder is duly notified of this. If y our Aadhaar gets suspended, you would not be able to ava"
          }
        ]
      },
      "response": {
        "answer": "The information that can be updated in Aadhaar includes:\n\n1. Name\n2. Address\n3. Date of Birth\n\nThese details are specified in the Aadhaar Handbook context provided.",
        "latency_seconds": 16.290374605000125,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 5,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 25,
      "question": "What should be done if the requested information is not available in the Aadhaar Handbook?",
      "model": "qwen2.5-coder:1.5b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.19222334599999158,
        "gold_locations": [],
        "gold_locations_retrieved": [],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 0,
        "expected_fact_count": 3,
        "facts_with_context_support": [],
        "facts_missing_from_retrieved_context": [
          "The assistant should not invent or fabricate information that is not supported by the handbook.",
          "The assistant should clearly state that the requested information is not available in the provided handbook.",
          "Where appropriate, the resident should be directed to the official UIDAI information channels for further information."
        ],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 16,
            "distance": 0.4864501953125,
            "gold_location": false,
            "supporting_facts": [],
            "chunk": "should check details of your Aadhaar for any other required update. 3.1 Documen ts Required for Update Y ou need t o submit a v alid supporting documen t f or v erification f or upda ting f ollowing de tails in y our Aadhaar: \u2022 Name \u2022 Addr ess \u2022 Da te of Birth When you update your Aadhaar, only your Aadhaar details get updated, the Aadhaar number shall remain same."
          },
          {
            "source": "UIAI_1.pdf",
            "page": 20,
            "distance": 0.49763184785842896,
            "gold_location": false,
            "supporting_facts": [],
            "chunk": "lds (name, gender and date of birth) in y our Aadhaar again (beyond the permissible limit), you need to: 1. Visit an y Aadhaar Enr olment Cen tre (with v alid supporting docume nt f or N ame & Da te of Birth upda te) 2. Place an up date request 3. Send the latest URN (Update Request Number) to Aadhaar help centre by calling 1947 or via email to help@uidai.gov.in and request for \u2018exception update\u2019 The c ase is then assigne d t o the UID AI\u2019s R egional Office tha t handles y our r egion f or due dilig ence. Once verified, your update request will be processed and the outcome communicated to you. 3.7 Upda te in case of Aadhaar Deactivation Y our Aadhaar data is subject to periodic quality checks. During such quality checks by UIDAI, if any discr epancy is f ound in the supporting documen ts or c aptured biome tric da ta of a r esident, his/her Aadhaar is deactiv ated t emporarily and the Aadhaar holder is duly notified of this. If y our Aadhaar gets suspended, you would not be able to ava"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 21,
            "distance": 0.5259160995483398,
            "gold_location": false,
            "supporting_facts": [],
            "chunk": "Update Request Number, follow the process to retrieve EID as described in Sec. 2.5.1 5. If your update request gets rejected, you can call 1947 and get the reason for rejection and take corrective measure before you place another update request. 6. If your Aadhaar shows \u2018Invalid\u2019 , call 1947 to get further guidance. 7. If your Aadhaar letter has only \u2018Year of Birth\u2019 printed, DO NOT UPDATE. Just download your latest Aadhaar or Order Aadhaar Reprint from uidai.gov.in to get your Aadhaar showing complete Date of Birth. 3.10 P oints to remember for Aadhaar Update A r esident who is an Aadhaar number hold er ma y, upon a ttaining the ag e of eigh teen y ears, mak e an applic ation f or c ancellation of his/her Aadhaar number t o R egional Office of UID AI within a period of six months from the date of attaining the age of eighteen years. Th e r esident will be r equired t o visit the R egional Office a t a s tipulated da te and time f or es tablishing his/her iden tity thr ough Aadhaar auth"
          }
        ]
      },
      "response": {
        "answer": "The information was not found in the provided Aadhaar Handbook.",
        "latency_seconds": 15.81731739099996,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 0.0,
        "facts_supported_by_context": 0,
        "facts_missing_from_context": 3,
        "model_abstained": true,
        "unsupported_claim_signal": false,
        "assessment": "Appropriate abstention for out-of-KB question."
      }
    },
    {
      "question_id": 1,
      "question": "What documents are required for Aadhaar enrolment?",
      "model": "llama3.2:3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.9716507159992034,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 9
          },
          {
            "source": "UIAI_1.pdf",
            "page": 10
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63
          },
          {
            "source": "UIAI_2.pdf",
            "page": 1
          },
          {
            "source": "UIAI_2.pdf",
            "page": 9
          },
          {
            "source": "UIAI_2.pdf",
            "page": 13
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 9,
            "distance": 0.28995370864868164,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "A valid Date of Birth (DoB) document is required when available.",
                "overlap": 0.2857
              },
              {
                "fact": "Introducer based enrolment is possible when the required documents are unavailable.",
                "overlap": 0.2857
              }
            ],
            "chunk": "a valid document, you have to produce that for Aadhaar enrolment. In case you do not ha ve docu ments in y our name, y ou c an also use a certific ate issued b y authoriz ed official (r efer t o Anne x. II). UID AI has de fined a s tandard f ormat f or this certific ate. R efer t o the Lis t of Accep table Supporting Documen ts f or V erification a vailable a t: h ttps://uidai.gov.in/images/ commdoc/valid_documents_list.pdf To download Aadhaar Enrolment Form: SCAN To get details of nearby Aadhaar Enrolment Centre: SCAN Carry original documents to Aadhaar centre. These are scanned and given back to you. The document for Aadhaar enrolment should have your name. For List of Valid Supporting Documents SCAN"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 1,
            "distance": 0.30845996737480164,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Proof of Identity (POI) is required.",
                "overlap": 0.5
              },
              {
                "fact": "Proof of Address (POA) is required.",
                "overlap": 0.5
              },
              {
                "fact": "A valid Date of Birth (DoB) document is required when available.",
                "overlap": 0.2857
              },
              {
                "fact": "Head of Family (HoF) based enrolment can use Proof of Relationship (PoR), the HoF Aadhaar number, and biometric confirmation of the HoF when individual documents are unavailable.",
                "overlap": 0.4667
              },
              {
                "fact": "Introducer based enrolment is possible when the required documents are unavailable.",
                "overlap": 0.2857
              }
            ],
            "chunk": "List of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan LIST OF ACCEPTABLE DOCUMENTS FOR ENROLMENT AND UPDATE List I - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar of individual up to five years of age List II - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar of individual five years and above and less than eighteen years of age List III - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar Number of individual eighteen years and above of age List IV - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for update of information in respect of Aadhaar Number Holder of any age"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 2,
        "expected_fact_count": 5,
        "facts_with_context_support": [
          "Proof of Identity (POI) is required.",
          "Proof of Address (POA) is required.",
          "A valid Date of Birth (DoB) document is required when available.",
          "Head of Family (HoF) based enrolment can use Proof of Relationship (PoR), the HoF Aadhaar number, and biometric confirmation of the HoF when individual documents are unavailable.",
          "Introducer based enrolment is possible when the required documents are unavailable."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 9,
            "distance": 0.28995370864868164,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "A valid Date of Birth (DoB) document is required when available.",
                "overlap": 0.2857
              },
              {
                "fact": "Introducer based enrolment is possible when the required documents are unavailable.",
                "overlap": 0.2857
              }
            ],
            "chunk": "a valid document, you have to produce that for Aadhaar enrolment. In case you do not ha ve docu ments in y our name, y ou c an also use a certific ate issued b y authoriz ed official (r efer t o Anne x. II). UID AI has de fined a s tandard f ormat f or this certific ate. R efer t o the Lis t of Accep table Supporting Documen ts f or V erification a vailable a t: h ttps://uidai.gov.in/images/ commdoc/valid_documents_list.pdf To download Aadhaar Enrolment Form: SCAN To get details of nearby Aadhaar Enrolment Centre: SCAN Carry original documents to Aadhaar centre. These are scanned and given back to you. The document for Aadhaar enrolment should have your name. For List of Valid Supporting Documents SCAN"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 1,
            "distance": 0.30845996737480164,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Proof of Identity (POI) is required.",
                "overlap": 0.5
              },
              {
                "fact": "Proof of Address (POA) is required.",
                "overlap": 0.5
              },
              {
                "fact": "A valid Date of Birth (DoB) document is required when available.",
                "overlap": 0.2857
              },
              {
                "fact": "Head of Family (HoF) based enrolment can use Proof of Relationship (PoR), the HoF Aadhaar number, and biometric confirmation of the HoF when individual documents are unavailable.",
                "overlap": 0.4667
              },
              {
                "fact": "Introducer based enrolment is possible when the required documents are unavailable.",
                "overlap": 0.2857
              }
            ],
            "chunk": "List of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan LIST OF ACCEPTABLE DOCUMENTS FOR ENROLMENT AND UPDATE List I - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar of individual up to five years of age List II - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar of individual five years and above and less than eighteen years of age List III - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar Number of individual eighteen years and above of age List IV - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for update of information in respect of Aadhaar Number Holder of any age"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 2,
            "distance": 0.3144756555557251,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Proof of Identity (POI) is required.",
                "overlap": 0.75
              },
              {
                "fact": "Proof of Address (POA) is required.",
                "overlap": 0.25
              },
              {
                "fact": "A valid Date of Birth (DoB) document is required when available.",
                "overlap": 0.5714
              },
              {
                "fact": "Head of Family (HoF) based enrolment can use Proof of Relationship (PoR), the HoF Aadhaar number, and biometric confirmation of the HoF when individual documents are unavailable.",
                "overlap": 0.6667
              },
              {
                "fact": "Introducer based enrolment is possible when the required documents are unavailable.",
                "overlap": 0.4286
              }
            ],
            "chunk": "List of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan Enrolment Type I: Head of the Family (HoF) based enrolment Sl. No. List of documents (see note below this tabular statement) Proof of Relationship (PoR) document, containing name of child and name of Head of Family (HoF) Proof of Date of Birth (PDB) document, containing name and date of birth 1. Birth certificate issued under the Registration of Births and Deaths Act, 1969 and the rules made thereunder \uf0fe \uf0fe 2. Valid Indian Passport (only applicable for NRIs) \uf0fe \uf0fe 3. Document to prove legal guardianship issued by the Central government or a State Government authority or a court of law under the relevant Acts (the Guardians and Wards Act, 1890 / the National Trust Act, 1999 / the Rights of Persons with Disabilities Act, 2016) and the rules made under these Acts \uf0fe \uf0fd Enrolment Type II: Document based enrolment Sl. No. List of documents (see note below this tabular statement) Proof of Identity (PoI) document, c"
          }
        ]
      },
      "response": {
        "answer": "According to the provided Aadhaar Handbook context, specifically on Page 9 and Page 1 of UIAI_2.pdf:\n\nFor Aadhaar enrolment, you need to produce a valid document that has your name. If you don't have documents in your name, you can also use a certificate issued by an authorized official (refer to Annex II). The list of acceptable supporting documents for verification is available at: https://uidai.gov.in/images/commdoc/valid_documents_list.pdf\n\nFor Head of the Family (HoF) based enrolment (Type I), the required documents are:\n\n1. Proof of Relationship (PoR) document containing name of child and name of HoF\n2. Proof of Date of Birth (PDB) document containing name and date of birth\n\nThese documents can be found in Annex II.\n\nFor Document-based enrolment (Type II), the required documents are:\n\n1. Proof of Identity (PoI) document",
        "latency_seconds": 47.64798404100111,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 5,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 2,
      "question": "What is Aadhaar enrolment?",
      "model": "llama3.2:3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.08230863000062527,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 8
          },
          {
            "source": "UIAI_1.pdf",
            "page": 9
          },
          {
            "source": "UIAI_1.pdf",
            "page": 10
          },
          {
            "source": "UIAI_1.pdf",
            "page": 50
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 8,
            "distance": 0.39678889513015747,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Aadhaar enrolment is the process of registering a resident for Aadhaar.",
                "overlap": 0.8
              },
              {
                "fact": "The enrolment process captures the resident's demographic and biometric information.",
                "overlap": 0.7143
              },
              {
                "fact": "Aadhaar enrolment is free.",
                "overlap": 1.0
              },
              {
                "fact": "A resident can enrol for Aadhaar only once.",
                "overlap": 1.0
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 8Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 2: HOW TO ENROL FOR AADHAAR? Visit Aadhaar Enrolment Centre Fill Aadhaar Enrolment/ Update F orm Check & Confirm All Spellings on screen Submit Valid Give Demographic & Biometric Data You get SMS of Aadhaar generation Documents for Scanning Collect your documents & Enrolment slip To g et Aadhaar , y ou ha ve t o enr oll b y pr oviding minimal demogr aphic and biome tric in formation during the enr olment process, which is totally free of cost. Please note that you need to enroll for Aadhaar only once. 2.1 En rolment Process Please do Check & Confirm all data shown on the resident screen, before the operator submits your Packet"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 1,
        "expected_fact_count": 4,
        "facts_with_context_support": [
          "Aadhaar enrolment is the process of registering a resident for Aadhaar.",
          "The enrolment process captures the resident's demographic and biometric information.",
          "Aadhaar enrolment is free.",
          "A resident can enrol for Aadhaar only once."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 8,
            "distance": 0.39678889513015747,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Aadhaar enrolment is the process of registering a resident for Aadhaar.",
                "overlap": 0.8
              },
              {
                "fact": "The enrolment process captures the resident's demographic and biometric information.",
                "overlap": 0.7143
              },
              {
                "fact": "Aadhaar enrolment is free.",
                "overlap": 1.0
              },
              {
                "fact": "A resident can enrol for Aadhaar only once.",
                "overlap": 1.0
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 8Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 2: HOW TO ENROL FOR AADHAAR? Visit Aadhaar Enrolment Centre Fill Aadhaar Enrolment/ Update F orm Check & Confirm All Spellings on screen Submit Valid Give Demographic & Biometric Data You get SMS of Aadhaar generation Documents for Scanning Collect your documents & Enrolment slip To g et Aadhaar , y ou ha ve t o enr oll b y pr oviding minimal demogr aphic and biome tric in formation during the enr olment process, which is totally free of cost. Please note that you need to enroll for Aadhaar only once. 2.1 En rolment Process Please do Check & Confirm all data shown on the resident screen, before the operator submits your Packet"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 11,
            "distance": 0.4528173804283142,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Aadhaar enrolment is the process of registering a resident for Aadhaar.",
                "overlap": 0.4
              },
              {
                "fact": "The enrolment process captures the resident's demographic and biometric information.",
                "overlap": 0.2857
              },
              {
                "fact": "Aadhaar enrolment is free.",
                "overlap": 0.6667
              },
              {
                "fact": "A resident can enrol for Aadhaar only once.",
                "overlap": 0.25
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 11 Aadhaar Handbook for Residents 2021-Ver.2.0 Ch ildren, including new born babies, can enroll for Aadhaar. The enrolment of children follows the below two methods as per the age of the child being enrolled. F or children below 5 years of age: T o enroll a child (from a new born to one below 5 years of age), Aadhaar authen tication b y one of the par ents or guardian of the child is required. Biometric data of children below the age of 5 years is not captured during their enrolment. The child\u2019 s name, da te of birth, g ender and phot ograph are captured. Their Aadhaar is linked to that of their parent/ guardian. Th e parent/ guardian needs to take the child to any nearby Aadhaar Enrolment Centre with the following documents: \u2022 Child\u2019 s Birth Certificate issued b y R egistrar of Birth, Municipal Corpor ation or an y other notified loc al g overnment bodies like T aluk, T ehsil e tc. OR Discharge card/ slip issued by Governmen"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 7,
            "distance": 0.453491747379303,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Aadhaar enrolment is the process of registering a resident for Aadhaar.",
                "overlap": 0.6
              },
              {
                "fact": "The enrolment process captures the resident's demographic and biometric information.",
                "overlap": 0.2857
              },
              {
                "fact": "Aadhaar enrolment is free.",
                "overlap": 0.6667
              },
              {
                "fact": "A resident can enrol for Aadhaar only once.",
                "overlap": 0.5
              }
            ],
            "chunk": "haar enrolment. 1.2.2 Aadh aar for NRIs If y ou are a non-resident Indian (NRI), you can enroll for Aadhaar if you have an Indian Passport. The mandate of 182 days does not apply for NRIs. You can visit an Aadhaar Enrolment Centre and enr oll f or Aadhaar as an NRI. Indian P assport is manda tory as Pr oof of Iden tity (P oI) f or NRIs. The app licant may choose to give any other Indian Proof of Address (PoA) from amongst the documents accepted by UIDAI (see Section 13.1, Annex \u2013 I of this handbook). 1.3 F eatures of Aadhaar 1.3.1 Aadh aar is an identifier Aadhaar is a 12-digit unique ID issued to an individual. Aadhaar use s de mographic in formation (name, da te of birth, g ender and addr ess), phot ograph of the f ace, fing erprints and iris t o ide ntify a r esident. The se it ems of in formation ar e manda tory. In addition, y ou ha ve the op tion of pr oviding y our mobile phone number and email. We recommend that you provide these details also. 1.3.2 Aadh aar is an ID, nothing m"
          }
        ]
      },
      "response": {
        "answer": "According to the Aadhaar Handbook, Aadhaar enrolment is the process of enrolling for Aadhaar, which involves providing minimal demographic and biometric information during the enrolment process. This process is totally free of cost and needs to be done only once. (Page 8)",
        "latency_seconds": 37.18866910399993,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 4,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 3,
      "question": "What is the purpose of Aadhaar?",
      "model": "llama3.2:3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.11753548000160663,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 6
          },
          {
            "source": "UIAI_1.pdf",
            "page": 7
          },
          {
            "source": "UIAI_1.pdf",
            "page": 38
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 7,
            "distance": 0.6557984352111816,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Identity can be verified through Aadhaar Authentication online.",
                "overlap": 0.3333
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 7 Aadhaar Handbook for Residents 2021-Ver.2.0 1.2 Who c an get Aadhaar? An y individual in India, irr espective of ag e and g ender, who is a r esident of India, or a non r esident Indian (NRI), can enroll to obtain Aadhaar number. For an individual, only one Aadhaar number is generated, as the uniqueness is achieved through the process of demographic and biometric de-duplication. 1.2.1. Aadh aar for residents of India Y ou ar e eligible f or Aadhaar Enr olment if y ou ar e a r esident of India. This, b y de finition, means tha t y ou ha ve r esided in India f or a period or periods amoun ting in all t o one hundr ed and eigh ty-two days (182 days) or more in the twelve months immediately preceding the date of application for Aadhaar enrolment. 1.2.2 Aadh aar for NRIs If y ou are a non-resident Indian (NRI), you can enroll for Aadhaar if you have an Indian Passport. The mandate of 182 days does not apply for NRIs. You can vis"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 1,
        "expected_fact_count": 3,
        "facts_with_context_support": [
          "Aadhaar can be used to access services, benefits and subsidies.",
          "Identity can be verified through Aadhaar Authentication online."
        ],
        "facts_missing_from_retrieved_context": [
          "Aadhaar provides a portable proof of identity."
        ],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 13,
            "distance": 0.6429665088653564,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Aadhaar can be used to access services, benefits and subsidies.",
                "overlap": 0.4
              }
            ],
            "chunk": "trar-run Aadhaar Enrolment Centre These ar e the Aadhaar Enr olment Cen tre a vailable in Bank s, P ost Office s, BSN L cen tres, CSCs and St ate Go vernment offices acr oss the c ountry. The se ar e run b y r espective Enr olment R egistrars. 2.3.2.2 UID AI-run Aadhaar Seva Kendra Aadhaar Se va Kendras or ASKs are exclusive Aadhaar centres run by UIDAI that provide Aadhaar services to residents in a state-of-the-art environment."
          },
          {
            "source": "UIAI_1.pdf",
            "page": 45,
            "distance": 0.653586745262146,
            "gold_location": false,
            "supporting_facts": [],
            "chunk": "Unique Identification Authority of India Government of India 45 Aadhaar Handbook for Residents 2021-Ver.2.0 10.5.1.3 YouTube: The official Aadhaar channel is accessible t o all user s on Y ouTube via h ttps://www. youtube.com/user/AadhaarUID. Y ou c an also sear ch f or \u2018 Aadhaar UID \u2019 on Y ouTube and sub scribe t o our official channel. This channel has dedic ated pla ylists of all tut orial videos of our onlin e ser vices, in formational videos r elated t o Aadhaar , all our TV ads, special messages, news reports, contest videos and more. Besides being informative, the channel giv es y ou a glimp se of the amazing video c ontent cr eated b y Aadhaar holders across the country. You can also leave a comment on our videos or share feedback. 10.5.1.4 Instagram: UID AI r ecently launched the official cus tomer c are acc ount of Aadhaar on Ins tagram. Y ou c an f ollow us @aadhaar_official (h ttps://instagram.com/aadhaar_official). F or an y specific queries, you can send us a direct messa"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 7,
            "distance": 0.6557984352111816,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Identity can be verified through Aadhaar Authentication online.",
                "overlap": 0.3333
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 7 Aadhaar Handbook for Residents 2021-Ver.2.0 1.2 Who c an get Aadhaar? An y individual in India, irr espective of ag e and g ender, who is a r esident of India, or a non r esident Indian (NRI), can enroll to obtain Aadhaar number. For an individual, only one Aadhaar number is generated, as the uniqueness is achieved through the process of demographic and biometric de-duplication. 1.2.1. Aadh aar for residents of India Y ou ar e eligible f or Aadhaar Enr olment if y ou ar e a r esident of India. This, b y de finition, means tha t y ou ha ve r esided in India f or a period or periods amoun ting in all t o one hundr ed and eigh ty-two days (182 days) or more in the twelve months immediately preceding the date of application for Aadhaar enrolment. 1.2.2 Aadh aar for NRIs If y ou are a non-resident Indian (NRI), you can enroll for Aadhaar if you have an Indian Passport. The mandate of 182 days does not apply for NRIs. You can vis"
          }
        ]
      },
      "response": {
        "answer": "The information was not found in the provided Aadhaar Handbook.",
        "latency_seconds": 31.640056311998705,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 0.6667,
        "facts_supported_by_context": 2,
        "facts_missing_from_context": 1,
        "model_abstained": true,
        "unsupported_claim_signal": false,
        "assessment": "Partial context support; model abstained despite some evidence being retrieved."
      }
    },
    {
      "question_id": 4,
      "question": "What is Proof of Identity?",
      "model": "llama3.2:3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.0606182279989298,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 9
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63
          },
          {
            "source": "UIAI_2.pdf",
            "page": 1
          },
          {
            "source": "UIAI_2.pdf",
            "page": 9
          }
        ],
        "gold_locations_retrieved": [],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 0,
        "expected_fact_count": 2,
        "facts_with_context_support": [
          "Proof of Identity (POI) is an identity document accepted by UIDAI for establishing the resident's identity during Aadhaar enrolment or update.",
          "POI is a mandatory document for document-based enrolment."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 7,
            "distance": 0.6297215223312378,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Proof of Identity (POI) is an identity document accepted by UIDAI for establishing the resident's identity during Aadhaar enrolment or update.",
                "overlap": 0.3333
              },
              {
                "fact": "POI is a mandatory document for document-based enrolment.",
                "overlap": 0.4
              }
            ],
            "chunk": "ffline v erification, as the c ase ma y be. It elimina tes the need f or pr oviding iden tity documen ts each time y ou wish t o access ser vices, benefits and subsidies. Aadhaar provides a portable proof of identity that can be verified through Aadhaar Authentication online anytime, anywhere. Indian Passport is mandatory Identity proof for Aadhaar Enrolment of NRIs."
          },
          {
            "source": "UIAI_2.pdf",
            "page": 5,
            "distance": 0.6307013034820557,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Proof of Identity (POI) is an identity document accepted by UIDAI for establishing the resident's identity during Aadhaar enrolment or update.",
                "overlap": 0.5833
              },
              {
                "fact": "POI is a mandatory document for document-based enrolment.",
                "overlap": 0.8
              }
            ],
            "chunk": "s Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Criteria for Head of Family and Proof of Relationship based enrolment: (i) HoF must have a valid Aadhaar before performing HoF based enrolment (ii) Any one of the parents or the legal guardian can be HoF (iii) Aadhaar number of both the parents is required for HoF based enrolment. In case the child"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 8,
            "distance": 0.6621238589286804,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Proof of Identity (POI) is an identity document accepted by UIDAI for establishing the resident's identity during Aadhaar enrolment or update.",
                "overlap": 0.5833
              },
              {
                "fact": "POI is a mandatory document for document-based enrolment.",
                "overlap": 0.6
              }
            ],
            "chunk": "such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Validity period of the Aadhaar"
          }
        ]
      },
      "response": {
        "answer": "According to the Aadhaar Handbook, a Proof of Identity (PoI) document is accepted only if it contains at least the name and photograph of the individual.\n\nPage number: 5, UIAI_2.pdf",
        "latency_seconds": 69.27030718700007,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 2,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 5,
      "question": "What is Proof of Address?",
      "model": "llama3.2:3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.3055716439994285,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 9
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63
          },
          {
            "source": "UIAI_2.pdf",
            "page": 1
          },
          {
            "source": "UIAI_2.pdf",
            "page": 12
          },
          {
            "source": "UIAI_2.pdf",
            "page": 18
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 63,
            "distance": 0.5735834240913391,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Proof of Address (POA) is an accepted document used to establish the resident's address.",
                "overlap": 0.2857
              }
            ],
            "chunk": "Proof of Address) documents containing Name & Address 1. Passport 2. Bank Statement/ Passbook 3. Post Office Account Statement/ Passbook 4. Ration Card 5. Voter ID 6. Driving License 7. Government Photo ID cards/ service photo identity card issued by PSU 8. Electricity Bill (not older than 3 months) 9. Water Bill (not older than 3 months) 10. Telephone Landline Bill (not older than 3 months) 11. Property Tax Receipt (not older than 1 year) 12. Credit Card Statement (not older than 3 months) 13. Insurance Policy 14. Signed Letter having Photo from Bank on letterhead 15. Signed Letter having Photo issued by registered Company on letterhead 16. Signed Letter having Photo issued by Recognized Educational Institution on letterhead or Photo ID having address issued by Recognized Educational Institution 17. NREGS Job Card 18. Arms License 19. Pensioner Card 20. Freedom Fighter Card 21. Kissan Passbook 22. CGHS/ ECHS Card 23. Certificate of Address having photo issued by MP or MLA or MLC or Ga"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63,
            "distance": 0.6217241287231445,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Proof of Address (POA) is an accepted document used to establish the resident's address.",
                "overlap": 0.7143
              },
              {
                "fact": "POA is mandatory for document-based Aadhaar enrolment.",
                "overlap": 0.8333
              }
            ],
            "chunk": "low). Declared checkbox may be selected if Resident does not have a valid proof of Date of Birth document. Verified checkbox is selected where Resident has provided documents as proof of Date of birth. Field 6: ADDRESS Write complete address. Please bring the original Proof of Address (POA) document. (See list B below). Please note that the Aadhaar letter will be delivered at the given address only. \u2022 To include name of Parent / Guardian / Spouse as part of the ad dress, enter the name of person in the c/o field. \u2022 Minor Corrections / Enhancements are permissible to make the address complete without altering the base address as mentioned in POA document. Field 7: RELATIONSHIP In case of children below 5 years, it is mandatory to provide father/mother/guardian details with their Aadhaar or EID number. If the resident is not holding a Proof of Identity & using the Head of the Family identity for enrolment, it is mandatory to provide Head of the family\u2019s details with his/her Aadhaar or EI"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 2,
        "expected_fact_count": 2,
        "facts_with_context_support": [
          "Proof of Address (POA) is an accepted document used to establish the resident's address.",
          "POA is mandatory for document-based Aadhaar enrolment."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 63,
            "distance": 0.5735834240913391,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Proof of Address (POA) is an accepted document used to establish the resident's address.",
                "overlap": 0.2857
              }
            ],
            "chunk": "Proof of Address) documents containing Name & Address 1. Passport 2. Bank Statement/ Passbook 3. Post Office Account Statement/ Passbook 4. Ration Card 5. Voter ID 6. Driving License 7. Government Photo ID cards/ service photo identity card issued by PSU 8. Electricity Bill (not older than 3 months) 9. Water Bill (not older than 3 months) 10. Telephone Landline Bill (not older than 3 months) 11. Property Tax Receipt (not older than 1 year) 12. Credit Card Statement (not older than 3 months) 13. Insurance Policy 14. Signed Letter having Photo from Bank on letterhead 15. Signed Letter having Photo issued by registered Company on letterhead 16. Signed Letter having Photo issued by Recognized Educational Institution on letterhead or Photo ID having address issued by Recognized Educational Institution 17. NREGS Job Card 18. Arms License 19. Pensioner Card 20. Freedom Fighter Card 21. Kissan Passbook 22. CGHS/ ECHS Card 23. Certificate of Address having photo issued by MP or MLA or MLC or Ga"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63,
            "distance": 0.6217241287231445,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Proof of Address (POA) is an accepted document used to establish the resident's address.",
                "overlap": 0.7143
              },
              {
                "fact": "POA is mandatory for document-based Aadhaar enrolment.",
                "overlap": 0.8333
              }
            ],
            "chunk": "low). Declared checkbox may be selected if Resident does not have a valid proof of Date of Birth document. Verified checkbox is selected where Resident has provided documents as proof of Date of birth. Field 6: ADDRESS Write complete address. Please bring the original Proof of Address (POA) document. (See list B below). Please note that the Aadhaar letter will be delivered at the given address only. \u2022 To include name of Parent / Guardian / Spouse as part of the ad dress, enter the name of person in the c/o field. \u2022 Minor Corrections / Enhancements are permissible to make the address complete without altering the base address as mentioned in POA document. Field 7: RELATIONSHIP In case of children below 5 years, it is mandatory to provide father/mother/guardian details with their Aadhaar or EID number. If the resident is not holding a Proof of Identity & using the Head of the Family identity for enrolment, it is mandatory to provide Head of the family\u2019s details with his/her Aadhaar or EI"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 3,
            "distance": 0.6342085599899292,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Proof of Address (POA) is an accepted document used to establish the resident's address.",
                "overlap": 0.4286
              },
              {
                "fact": "POA is mandatory for document-based Aadhaar enrolment.",
                "overlap": 0.5
              }
            ],
            "chunk": "List of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan * Proof of Address documents as in the \u201cList III - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar Number of individual eighteen years and above of age\u201d will also be applicable Note: (a) Any document listed in the above tabular statement shall be acceptable only if it meets the following conditions, namely:\u2014 (i) It is currently valid; (ii) The person in respect of whom such document is issued is entitled for the same; (iii) The information contained in the document is verifiable from the source; and (iv) The authority issuing the document has not made any declaration that such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is"
          }
        ]
      },
      "response": {
        "answer": "According to the Aadhaar Handbook, Proof of Address refers to documents containing Name & Address. The list of acceptable documents for Proof of Address is provided on page 63 of UIAI_1.pdf. These documents include:\n\n1. Passport\n2. Bank Statement/ Passbook\n3. Post Office Account Statement/ Passbook\n4. Ration Card\n5. Voter ID\n6. Driving License\n7. Government Photo ID cards/ service photo identity card issued by PSU\n8. Electricity Bill (not older than 3 months)\n9. Water Bill (not older than 3 months)\n10. Telephone Landline Bill (not older than 3 months)\n11. Property Tax Receipt (not older than 1 year)\n12. Credit Card Statement (not older than 3 months)\n13. Insurance Policy\n14. Signed Letter having Photo from Bank on letterhead\n15. Signed Letter having Photo issued by registered Company on letterhead\n16. Signed Letter having Photo issued by Recognized Educational Institution on letterhead or Photo ID having address issued by Recognized Educational Institution\n17. NREGS Job Card\n18. Arms License\n19. Pensioner Card\n20. Freedom Fighter Card\n21. Kissan Passbook\n22. CGHS/ ECHS Card\n23. Certificate of Address having photo issued by MP or MLA or MLC or Gaon Sabha",
        "latency_seconds": 67.15879368400056,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 2,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": true,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 6,
      "question": "What is Proof of Date of Birth?",
      "model": "llama3.2:3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.05735114600065572,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 9
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63
          },
          {
            "source": "UIAI_2.pdf",
            "page": 1
          },
          {
            "source": "UIAI_2.pdf",
            "page": 13
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_2.pdf",
            "page": 13,
            "distance": 0.4825599193572998,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Proof of Date of Birth is a valid document from the UIDAI-accepted list used to establish the resident's date of birth.",
                "overlap": 0.6
              },
              {
                "fact": "If a resident does not have a valid DoB document, the handbook allows declaration of the date of birth or approximate age.",
                "overlap": 0.4167
              }
            ],
            "chunk": "irth certificate as proof of date of birth b. For Non-Resident Indian (NRI) below 18 years of age: - Aadhaar number holder shall submit birth certificate or Indian Passport as proof of date of birth c. For resident Indians and Non-Resident Indian (NRI) of 18 years and above of age: - Aadhaar number holder shall submit any of the acceptable proof of date of birth documents as specified in the above list (ii) If the Aadhaar number holder had earlier submitted birth certificate as proof of date of birth, the Aadhaar number holder shall submit corrected birth certificate bearing same Birth Registration Number (BRN) (iii) If the Aadhaar number holder had earlier submitted any proof of date of birth document except birth certificate (for e.g. Marksheet, Passport etc.), the Aadhaar number holder shall submit corrected version of the same document or submit a birth certificate (iv) In case of date of birth update of woman who has changed her name post-marriage, proof of date of birth documents"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63,
            "distance": 0.6019162535667419,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Proof of Date of Birth is a valid document from the UIDAI-accepted list used to establish the resident's date of birth.",
                "overlap": 0.7
              },
              {
                "fact": "If a resident does not have a valid DoB document, the handbook allows declaration of the date of birth or approximate age.",
                "overlap": 0.5
              },
              {
                "fact": "If a valid DoB document is available, it should be produced for enrolment.",
                "overlap": 0.4286
              }
            ],
            "chunk": "low). Declared checkbox may be selected if Resident does not have a valid proof of Date of Birth document. Verified checkbox is selected where Resident has provided documents as proof of Date of birth. Field 6: ADDRESS Write complete address. Please bring the original Proof of Address (POA) document. (See list B below). Please note that the Aadhaar letter will be delivered at the given address only. \u2022 To include name of Parent / Guardian / Spouse as part of the ad dress, enter the name of person in the c/o field. \u2022 Minor Corrections / Enhancements are permissible to make the address complete without altering the base address as mentioned in POA document. Field 7: RELATIONSHIP In case of children below 5 years, it is mandatory to provide father/mother/guardian details with their Aadhaar or EID number. If the resident is not holding a Proof of Identity & using the Head of the Family identity for enrolment, it is mandatory to provide Head of the family\u2019s details with his/her Aadhaar or EI"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 2,
        "expected_fact_count": 3,
        "facts_with_context_support": [
          "Proof of Date of Birth is a valid document from the UIDAI-accepted list used to establish the resident's date of birth.",
          "If a resident does not have a valid DoB document, the handbook allows declaration of the date of birth or approximate age.",
          "If a valid DoB document is available, it should be produced for enrolment."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_2.pdf",
            "page": 13,
            "distance": 0.4825599193572998,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Proof of Date of Birth is a valid document from the UIDAI-accepted list used to establish the resident's date of birth.",
                "overlap": 0.6
              },
              {
                "fact": "If a resident does not have a valid DoB document, the handbook allows declaration of the date of birth or approximate age.",
                "overlap": 0.4167
              }
            ],
            "chunk": "irth certificate as proof of date of birth b. For Non-Resident Indian (NRI) below 18 years of age: - Aadhaar number holder shall submit birth certificate or Indian Passport as proof of date of birth c. For resident Indians and Non-Resident Indian (NRI) of 18 years and above of age: - Aadhaar number holder shall submit any of the acceptable proof of date of birth documents as specified in the above list (ii) If the Aadhaar number holder had earlier submitted birth certificate as proof of date of birth, the Aadhaar number holder shall submit corrected birth certificate bearing same Birth Registration Number (BRN) (iii) If the Aadhaar number holder had earlier submitted any proof of date of birth document except birth certificate (for e.g. Marksheet, Passport etc.), the Aadhaar number holder shall submit corrected version of the same document or submit a birth certificate (iv) In case of date of birth update of woman who has changed her name post-marriage, proof of date of birth documents"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 3,
            "distance": 0.557792067527771,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Proof of Date of Birth is a valid document from the UIDAI-accepted list used to establish the resident's date of birth.",
                "overlap": 0.5
              },
              {
                "fact": "If a resident does not have a valid DoB document, the handbook allows declaration of the date of birth or approximate age.",
                "overlap": 0.3333
              },
              {
                "fact": "If a valid DoB document is available, it should be produced for enrolment.",
                "overlap": 0.2857
              }
            ],
            "chunk": "birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Head of Family (HoF) based enrolment is mandatory for children below five years of age ex"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63,
            "distance": 0.6019162535667419,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Proof of Date of Birth is a valid document from the UIDAI-accepted list used to establish the resident's date of birth.",
                "overlap": 0.7
              },
              {
                "fact": "If a resident does not have a valid DoB document, the handbook allows declaration of the date of birth or approximate age.",
                "overlap": 0.5
              },
              {
                "fact": "If a valid DoB document is available, it should be produced for enrolment.",
                "overlap": 0.4286
              }
            ],
            "chunk": "low). Declared checkbox may be selected if Resident does not have a valid proof of Date of Birth document. Verified checkbox is selected where Resident has provided documents as proof of Date of birth. Field 6: ADDRESS Write complete address. Please bring the original Proof of Address (POA) document. (See list B below). Please note that the Aadhaar letter will be delivered at the given address only. \u2022 To include name of Parent / Guardian / Spouse as part of the ad dress, enter the name of person in the c/o field. \u2022 Minor Corrections / Enhancements are permissible to make the address complete without altering the base address as mentioned in POA document. Field 7: RELATIONSHIP In case of children below 5 years, it is mandatory to provide father/mother/guardian details with their Aadhaar or EID number. If the resident is not holding a Proof of Identity & using the Head of the Family identity for enrolment, it is mandatory to provide Head of the family\u2019s details with his/her Aadhaar or EI"
          }
        ]
      },
      "response": {
        "answer": "According to the Aadhaar Handbook, Proof of Date of Birth (PoDB) documents are acceptable as proof of date of birth. The list of acceptable PoDB documents includes:\n\n1. Birth certificate\n2. Indian Passport\n\nFor Non-Resident Indians (NRIs) below 18 years of age, a birth certificate or Indian Passport is required.\n\nFor resident Indians and NRIs of 18 years and above, any of the following documents are accepted as proof of date of birth:\n\n* Birth certificate\n* Marksheet\n* Passport\n* Other acceptable documents specified in the handbook\n\nIf an Aadhaar number holder had earlier submitted a different PoDB document, they may need to submit a corrected version or a new birth certificate with the same Birth Registration Number (BRN).",
        "latency_seconds": 49.60980917300003,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 3,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 7,
      "question": "What is Proof of Relationship?",
      "model": "llama3.2:3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.06731072500042501,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 10
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63
          },
          {
            "source": "UIAI_2.pdf",
            "page": 1
          },
          {
            "source": "UIAI_2.pdf",
            "page": 4
          }
        ],
        "gold_locations_retrieved": [],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 0,
        "expected_fact_count": 2,
        "facts_with_context_support": [
          "Proof of Relationship (PoR) establishes the relationship between the resident and the Head of Family.",
          "PoR is used in Head of Family based enrolment."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_2.pdf",
            "page": 5,
            "distance": 0.6588935852050781,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Proof of Relationship (PoR) establishes the relationship between the resident and the Head of Family.",
                "overlap": 0.625
              },
              {
                "fact": "PoR is used in Head of Family based enrolment.",
                "overlap": 1.0
              }
            ],
            "chunk": "s Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Criteria for Head of Family and Proof of Relationship based enrolment: (i) HoF must have a valid Aadhaar before performing HoF based enrolment (ii) Any one of the parents or the legal guardian can be HoF (iii) Aadhaar number of both the parents is required for HoF based enrolment. In case the child"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 3,
            "distance": 0.6885577440261841,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Proof of Relationship (PoR) establishes the relationship between the resident and the Head of Family.",
                "overlap": 0.625
              },
              {
                "fact": "PoR is used in Head of Family based enrolment.",
                "overlap": 1.0
              }
            ],
            "chunk": "birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Head of Family (HoF) based enrolment is mandatory for children below five years of age ex"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 8,
            "distance": 0.6998454332351685,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Proof of Relationship (PoR) establishes the relationship between the resident and the Head of Family.",
                "overlap": 0.625
              },
              {
                "fact": "PoR is used in Head of Family based enrolment.",
                "overlap": 0.8
              }
            ],
            "chunk": "such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Validity period of the Aadhaar"
          }
        ]
      },
      "response": {
        "answer": "According to the Aadhaar Handbook, a document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF).",
        "latency_seconds": 34.30404491899935,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 2,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 8,
      "question": "Can Aadhaar enrolment be done without supporting documents?",
      "model": "llama3.2:3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.06610627000009117,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 9
          },
          {
            "source": "UIAI_1.pdf",
            "page": 10
          },
          {
            "source": "UIAI_2.pdf",
            "page": 1
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 9,
            "distance": 0.3367202877998352,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Yes, alternative enrolment methods exist when individual supporting documents are unavailable.",
                "overlap": 0.3333
              },
              {
                "fact": "Head of Family based enrolment can be used where individual documents are unavailable.",
                "overlap": 0.2857
              },
              {
                "fact": "Introducer based enrolment can be used when the required documents are not available.",
                "overlap": 0.3333
              }
            ],
            "chunk": "a valid document, you have to produce that for Aadhaar enrolment. In case you do not ha ve docu ments in y our name, y ou c an also use a certific ate issued b y authoriz ed official (r efer t o Anne x. II). UID AI has de fined a s tandard f ormat f or this certific ate. R efer t o the Lis t of Accep table Supporting Documen ts f or V erification a vailable a t: h ttps://uidai.gov.in/images/ commdoc/valid_documents_list.pdf To download Aadhaar Enrolment Form: SCAN To get details of nearby Aadhaar Enrolment Centre: SCAN Carry original documents to Aadhaar centre. These are scanned and given back to you. The document for Aadhaar enrolment should have your name. For List of Valid Supporting Documents SCAN"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 1,
        "expected_fact_count": 3,
        "facts_with_context_support": [
          "Yes, alternative enrolment methods exist when individual supporting documents are unavailable.",
          "Head of Family based enrolment can be used where individual documents are unavailable.",
          "Introducer based enrolment can be used when the required documents are not available."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 9,
            "distance": 0.3367202877998352,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Yes, alternative enrolment methods exist when individual supporting documents are unavailable.",
                "overlap": 0.3333
              },
              {
                "fact": "Head of Family based enrolment can be used where individual documents are unavailable.",
                "overlap": 0.2857
              },
              {
                "fact": "Introducer based enrolment can be used when the required documents are not available.",
                "overlap": 0.3333
              }
            ],
            "chunk": "a valid document, you have to produce that for Aadhaar enrolment. In case you do not ha ve docu ments in y our name, y ou c an also use a certific ate issued b y authoriz ed official (r efer t o Anne x. II). UID AI has de fined a s tandard f ormat f or this certific ate. R efer t o the Lis t of Accep table Supporting Documen ts f or V erification a vailable a t: h ttps://uidai.gov.in/images/ commdoc/valid_documents_list.pdf To download Aadhaar Enrolment Form: SCAN To get details of nearby Aadhaar Enrolment Centre: SCAN Carry original documents to Aadhaar centre. These are scanned and given back to you. The document for Aadhaar enrolment should have your name. For List of Valid Supporting Documents SCAN"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 7,
            "distance": 0.41059410572052,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Yes, alternative enrolment methods exist when individual supporting documents are unavailable.",
                "overlap": 0.3333
              },
              {
                "fact": "Head of Family based enrolment can be used where individual documents are unavailable.",
                "overlap": 0.4286
              },
              {
                "fact": "Introducer based enrolment can be used when the required documents are not available.",
                "overlap": 0.3333
              }
            ],
            "chunk": "haar enrolment. 1.2.2 Aadh aar for NRIs If y ou are a non-resident Indian (NRI), you can enroll for Aadhaar if you have an Indian Passport. The mandate of 182 days does not apply for NRIs. You can visit an Aadhaar Enrolment Centre and enr oll f or Aadhaar as an NRI. Indian P assport is manda tory as Pr oof of Iden tity (P oI) f or NRIs. The app licant may choose to give any other Indian Proof of Address (PoA) from amongst the documents accepted by UIDAI (see Section 13.1, Annex \u2013 I of this handbook). 1.3 F eatures of Aadhaar 1.3.1 Aadh aar is an identifier Aadhaar is a 12-digit unique ID issued to an individual. Aadhaar use s de mographic in formation (name, da te of birth, g ender and addr ess), phot ograph of the f ace, fing erprints and iris t o ide ntify a r esident. The se it ems of in formation ar e manda tory. In addition, y ou ha ve the op tion of pr oviding y our mobile phone number and email. We recommend that you provide these details also. 1.3.2 Aadh aar is an ID, nothing m"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 6,
            "distance": 0.43277132511138916,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Yes, alternative enrolment methods exist when individual supporting documents are unavailable.",
                "overlap": 0.3333
              },
              {
                "fact": "Head of Family based enrolment can be used where individual documents are unavailable.",
                "overlap": 0.4286
              },
              {
                "fact": "Introducer based enrolment can be used when the required documents are not available.",
                "overlap": 0.3333
              }
            ],
            "chunk": "List of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan List III - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar Number of individual eighteen years and above of age \uf0feMeans allowed | \uf0fdMeans not allowed Sl. No. List of documents (see note below this tabular statement) Proof of Identity (PoI) document, containing name and photograph Proof of Address (PoA) document, containing name and address in India Proof of Date of Birth (PDB) document, containing name and date of birth 1. Valid Indian Passport \uf0fe \uf0fe \uf0fe 2. Ration /PDS Photograph Card/e-Ration Card \uf0fe \uf0fe \uf0fd 3. Voter Identity Card /e-Voter Identity Card whose details are displayed online on the website of the Election Commission of India or the Chief Electoral Officer concerned \uf0fe \uf0fe \uf0fd 4. Driving licence \uf0fe \uf0fd \uf0fd 5. Service Photo Identity Card issued by Central Government/ State Government/ PSU/ regulatory body / statutory body \uf0fe \uf0fe \uf0fe 6. Pen"
          }
        ]
      },
      "response": {
        "answer": "The information was not found in the provided Aadhaar Handbook.",
        "latency_seconds": 34.542919771000015,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 3,
        "facts_missing_from_context": 0,
        "model_abstained": true,
        "unsupported_claim_signal": false,
        "assessment": "Relevant evidence was retrieved, but the model abstained despite sufficient context."
      }
    },
    {
      "question_id": 9,
      "question": "What information is collected during Aadhaar enrolment?",
      "model": "llama3.2:3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.07231710700034455,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 10
          },
          {
            "source": "UIAI_1.pdf",
            "page": 38
          },
          {
            "source": "UIAI_1.pdf",
            "page": 50
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 10,
            "distance": 0.47255373001098633,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Demographic information is collected.",
                "overlap": 0.3333
              },
              {
                "fact": "Biometric information is collected.",
                "overlap": 0.6667
              },
              {
                "fact": "The enrolment process captures information required for Aadhaar identity creation.",
                "overlap": 0.375
              }
            ],
            "chunk": "trars\u2019 own employees \u2022 Elect ed local body members \u2022 Members of local administrative bodies \u2022 P ostman \u2022 Influencers such as teachers \u2022 Health w orkers \u2022 Doct ors \u2022 Ang anwadis/Asha workers \u2022 Representatives of local NGOs The information captured during Introducer-based Enrolment is: \u2022 Introducer\u2019s name \u2022 Introducer\u2019s Aadhaar number \u2022 One modality of biometric information of the Introducer 2.1.4 Enr olment of Children For HoF based enrolment, the Head of Family has to give biometric confirmation at the time of enrolment."
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 1,
        "expected_fact_count": 3,
        "facts_with_context_support": [
          "Demographic information is collected.",
          "Biometric information is collected.",
          "The enrolment process captures information required for Aadhaar identity creation."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 8,
            "distance": 0.43172141909599304,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Demographic information is collected.",
                "overlap": 0.3333
              },
              {
                "fact": "Biometric information is collected.",
                "overlap": 0.3333
              },
              {
                "fact": "The enrolment process captures information required for Aadhaar identity creation.",
                "overlap": 0.375
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 8Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 2: HOW TO ENROL FOR AADHAAR? Visit Aadhaar Enrolment Centre Fill Aadhaar Enrolment/ Update F orm Check & Confirm All Spellings on screen Submit Valid Give Demographic & Biometric Data You get SMS of Aadhaar generation Documents for Scanning Collect your documents & Enrolment slip To g et Aadhaar , y ou ha ve t o enr oll b y pr oviding minimal demogr aphic and biome tric in formation during the enr olment process, which is totally free of cost. Please note that you need to enroll for Aadhaar only once. 2.1 En rolment Process Please do Check & Confirm all data shown on the resident screen, before the operator submits your Packet"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 13,
            "distance": 0.45054009556770325,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "The enrolment process captures information required for Aadhaar identity creation.",
                "overlap": 0.25
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 13 Aadhaar Handbook for Residents 2021-Ver.2.0 To get more details on Aadhaar Seva Kendra SCAN How to locate Aadhaar Kendra tutorial SCAN Aadhaar Seva Kendra are open on all seven days of the week, except on public holidays, from 9.30 a.m. to 5.30 p.m. Each ASK has the capacity to handle 250 to 1000 service requests per day. 2.3.1 Loc ate Aadhaar Enrolment Centre near you Y ou can get details of any nearby Aadhaar Enrolment Centre from: \u2022 B y calling 1947 \u2022 Fr om Aadhaar website: https://appointments.uidai.gov.in/easearch.aspx \u2022 Fr om mAadhaar App 2.3.2 T ypes of Enrolment Centres Th e Aadhaar En rolment Cen tres c an be br oadly classified in to tw o c ategories based on the f ormat of service delivery. These are: 2.3.2.1 R egistrar-run Aadhaar Enrolment Centre These ar e the Aadhaar Enr olment Cen tre a vailable in Bank s, P ost Office s, BSN L cen tres, CSCs and St ate Go vernment offices acr oss the c ountry. The se ar e"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 10,
            "distance": 0.47255373001098633,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Demographic information is collected.",
                "overlap": 0.3333
              },
              {
                "fact": "Biometric information is collected.",
                "overlap": 0.6667
              },
              {
                "fact": "The enrolment process captures information required for Aadhaar identity creation.",
                "overlap": 0.375
              }
            ],
            "chunk": "trars\u2019 own employees \u2022 Elect ed local body members \u2022 Members of local administrative bodies \u2022 P ostman \u2022 Influencers such as teachers \u2022 Health w orkers \u2022 Doct ors \u2022 Ang anwadis/Asha workers \u2022 Representatives of local NGOs The information captured during Introducer-based Enrolment is: \u2022 Introducer\u2019s name \u2022 Introducer\u2019s Aadhaar number \u2022 One modality of biometric information of the Introducer 2.1.4 Enr olment of Children For HoF based enrolment, the Head of Family has to give biometric confirmation at the time of enrolment."
          }
        ]
      },
      "response": {
        "answer": "According to the Aadhaar Handbook, during Aadhaar enrolment, minimal demographic and biometric information is collected. This includes:\n\n- Demographic data\n- Biometric data (not specified which type in the context)\n\nThis information is provided by the resident during the enrolment process, which is totally free of cost.",
        "latency_seconds": 35.826840900001116,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 3,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 10,
      "question": "What biometric information is collected for Aadhaar?",
      "model": "llama3.2:3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.05556294199959666,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 19
          },
          {
            "source": "UIAI_1.pdf",
            "page": 50
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63
          }
        ],
        "gold_locations_retrieved": [],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 0,
        "expected_fact_count": 4,
        "facts_with_context_support": [],
        "facts_missing_from_retrieved_context": [
          "Photograph is collected.",
          "Fingerprints are collected.",
          "Iris scans are collected.",
          "For children, fingerprints, iris scans and photographs are captured during mandatory biometric updates."
        ],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 37,
            "distance": 0.3628368377685547,
            "gold_location": false,
            "supporting_facts": [],
            "chunk": "Unique Identification Authority of India Government of India 37 Aadhaar Handbook for Residents 2021-Ver.2.0 To read FAQs SCAN \u2022 Aadhaar Authentication History: Using this service, you can g et de tails of authen tication perf ormed b y y ou in pas t 6 mon ths. The OTP for this service will be sent to your registered mobile number. \u2022 Offline eKYC Service: Using this service, you can generate your digitally signed Aadhaar details that you may use for KYC purposes. To know more about Aadhaar Authentication History SCAN To know more about Aadhaar Paperless Offline eKYC: SCAN 8.3 Fr equently Asked Questions UID AI also has e xtensive F AQs section on the w ebsite and mAadhaar app to help residents understand Aadhaar process, services and products."
          },
          {
            "source": "UIAI_1.pdf",
            "page": 64,
            "distance": 0.38319915533065796,
            "gold_location": false,
            "supporting_facts": [],
            "chunk": "Unique Identification Authority of India Government of India 64Aadhaar Handbook for Residents 2021-Ver.2.0 Verify Aadhaar SCAN Lock/ Unlock Aadhaar SCAN Check your Aadhaar Update History SCAN Update Address Without Documents SCAN Secure QR Code SCAN Locate Aadhaar Enrolment Centre SCAN Verify Digital Signature SCAN Get back your lost Aadhaar number or Enrolment ID SCAN Check status of your Aadhaar enrolment or update request SCAN mAadhaar App SCAN Download Aadhaar SCAN Generate/ Retrieve VID SCAN Check your Aadhaar Authentication History SCAN Check Status of your online update request SCAN Online Appointment Booking SCAN Update Address Online SCAN What is EID SCAN Lock/ Unlock Biometrics SCAN Order Aadhaar Reprint SCAN Aadhaar Chatbot SCAN 13.5 Aadhaar T utorial Videos"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 32,
            "distance": 0.40078648924827576,
            "gold_location": false,
            "supporting_facts": [],
            "chunk": "Unique Identification Authority of India Government of India 32Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 7: VERIFICATION OF AADHAAR Not every 12 digit number is Aadhaar Verify Aadhaar Online To watch tutorial on Verify Aadhaar Service SCAN 7.1 V erify any Aadhaar Online An y Aadhaar number c an be v erified onli ne fr om uidai. gov. in. Y ou c an use this ser vice t o check the authen ticity of an y Aadhaar number tha t is presented to you. For the entered Aadhaar number, you get the following details of the Aadhaar holder: \u2022 If the Aadhaar number e xists \u2022 Ag e band \u2022 Gender \u2022 St ate of residence \u2022 Mobile Number (in mask ed form showing only last 4 digits) Be sides, a service provider can also verify the Aadhaar presented by a person using following services: 1. Online from: https://resident.uidai.gov.in/verify 2. Fr om mAadhaar App 3. Sc an the QR Code on presented Aadhaar using the Aadhaar QR Code Scanner App or mAadhaar App"
          }
        ]
      },
      "response": {
        "answer": "The information was not found in the provided Aadhaar Handbook.",
        "latency_seconds": 29.37826036700062,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 0.0,
        "facts_supported_by_context": 0,
        "facts_missing_from_context": 4,
        "model_abstained": true,
        "unsupported_claim_signal": false,
        "assessment": "Appropriate abstention because retrieved context lacks expected answer evidence."
      }
    },
    {
      "question_id": 11,
      "question": "What demographic information is collected during enrolment?",
      "model": "llama3.2:3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.06296968499918876,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 3
          },
          {
            "source": "UIAI_1.pdf",
            "page": 10
          },
          {
            "source": "UIAI_1.pdf",
            "page": 50
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 50,
            "distance": 0.5529363751411438,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Address is demographic information.",
                "overlap": 0.3333
              }
            ],
            "chunk": "ose. 4. Demo graphic information required for enrolment. \u2014 (1) The f ollowing demogr aphic in formation shall be c ollected fr om all individuals under going enrolment (other than children below five years of age):"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 10,
            "distance": 0.6497888565063477,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Demographic information includes personal identity and address-related information captured during enrolment.",
                "overlap": 0.4
              },
              {
                "fact": "Name and date of birth are examples of demographic information.",
                "overlap": 0.3333
              },
              {
                "fact": "Address is demographic information.",
                "overlap": 0.3333
              },
              {
                "fact": "Mobile number and email are part of the demographic information fields, where provided.",
                "overlap": 0.2857
              }
            ],
            "chunk": "trars\u2019 own employees \u2022 Elect ed local body members \u2022 Members of local administrative bodies \u2022 P ostman \u2022 Influencers such as teachers \u2022 Health w orkers \u2022 Doct ors \u2022 Ang anwadis/Asha workers \u2022 Representatives of local NGOs The information captured during Introducer-based Enrolment is: \u2022 Introducer\u2019s name \u2022 Introducer\u2019s Aadhaar number \u2022 One modality of biometric information of the Introducer 2.1.4 Enr olment of Children For HoF based enrolment, the Head of Family has to give biometric confirmation at the time of enrolment."
          },
          {
            "source": "UIAI_1.pdf",
            "page": 50,
            "distance": 0.6530028581619263,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Address is demographic information.",
                "overlap": 0.3333
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 50Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 12 AADHAAR (ENROLMENT AND UPDATE) REGULATIONS, 2016 Your enr olment and upda te is g overned b y the Aadhaar (Enr olment and Upda te) R egulations, 2016. R egulations of direct relevance to you are reproduced below for your information: 12.1 CHAP TER II - Resident Enrolment Process 3. Biom etric information required for enrolment. \u2014 (1) The f ollowing bio metric in formation shall be c ollected fr om all individuals under going enrolment (other than children below five years of age): (i) Facial image; (ii) All ten fingerprints; and (iii) Sc ans of both irises. (2) The s tandards f or c ollecting the biome tric in formation shall be as specified b y the Authority f or this purpose. 4. Demo graphic information required for enrolment. \u2014 (1) The f ollowing demogr aphic in formation shall be c ollected fr om all individuals under going enrolment (other than children below five"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 3,
        "expected_fact_count": 4,
        "facts_with_context_support": [
          "Demographic information includes personal identity and address-related information captured during enrolment.",
          "Name and date of birth are examples of demographic information.",
          "Address is demographic information.",
          "Mobile number and email are part of the demographic information fields, where provided."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 50,
            "distance": 0.5529363751411438,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Address is demographic information.",
                "overlap": 0.3333
              }
            ],
            "chunk": "ose. 4. Demo graphic information required for enrolment. \u2014 (1) The f ollowing demogr aphic in formation shall be c ollected fr om all individuals under going enrolment (other than children below five years of age):"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 10,
            "distance": 0.6497888565063477,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Demographic information includes personal identity and address-related information captured during enrolment.",
                "overlap": 0.4
              },
              {
                "fact": "Name and date of birth are examples of demographic information.",
                "overlap": 0.3333
              },
              {
                "fact": "Address is demographic information.",
                "overlap": 0.3333
              },
              {
                "fact": "Mobile number and email are part of the demographic information fields, where provided.",
                "overlap": 0.2857
              }
            ],
            "chunk": "trars\u2019 own employees \u2022 Elect ed local body members \u2022 Members of local administrative bodies \u2022 P ostman \u2022 Influencers such as teachers \u2022 Health w orkers \u2022 Doct ors \u2022 Ang anwadis/Asha workers \u2022 Representatives of local NGOs The information captured during Introducer-based Enrolment is: \u2022 Introducer\u2019s name \u2022 Introducer\u2019s Aadhaar number \u2022 One modality of biometric information of the Introducer 2.1.4 Enr olment of Children For HoF based enrolment, the Head of Family has to give biometric confirmation at the time of enrolment."
          },
          {
            "source": "UIAI_1.pdf",
            "page": 50,
            "distance": 0.6530028581619263,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Address is demographic information.",
                "overlap": 0.3333
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 50Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 12 AADHAAR (ENROLMENT AND UPDATE) REGULATIONS, 2016 Your enr olment and upda te is g overned b y the Aadhaar (Enr olment and Upda te) R egulations, 2016. R egulations of direct relevance to you are reproduced below for your information: 12.1 CHAP TER II - Resident Enrolment Process 3. Biom etric information required for enrolment. \u2014 (1) The f ollowing bio metric in formation shall be c ollected fr om all individuals under going enrolment (other than children below five years of age): (i) Facial image; (ii) All ten fingerprints; and (iii) Sc ans of both irises. (2) The s tandards f or c ollecting the biome tric in formation shall be as specified b y the Authority f or this purpose. 4. Demo graphic information required for enrolment. \u2014 (1) The f ollowing demogr aphic in formation shall be c ollected fr om all individuals under going enrolment (other than children below five"
          }
        ]
      },
      "response": {
        "answer": "The demographic information collected during enrolment, as per the Aadhaar Handbook, is:\n\n(i) Name\n(ii) Date of Birth\n(iii) Gender\n(iv) Address\n(v) Contact Information (such as mobile number and email address)\n\nThese details are mentioned on page 10 of the UIAI_1.pdf document.",
        "latency_seconds": 31.223550228000022,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 4,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 12,
      "question": "What happens after Aadhaar enrolment?",
      "model": "llama3.2:3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.05268000199976086,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 3
          },
          {
            "source": "UIAI_1.pdf",
            "page": 15
          },
          {
            "source": "UIAI_1.pdf",
            "page": 26
          },
          {
            "source": "UIAI_1.pdf",
            "page": 27
          }
        ],
        "gold_locations_retrieved": [],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 0,
        "expected_fact_count": 3,
        "facts_with_context_support": [
          "The enrolment information is processed for Aadhaar generation.",
          "The resident can use the enrolment information or enrolment ID to check generation/status information."
        ],
        "facts_missing_from_retrieved_context": [
          "Aadhaar can subsequently be downloaded or received as an Aadhaar letter when generated."
        ],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 8,
            "distance": 0.5121980309486389,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "The enrolment information is processed for Aadhaar generation.",
                "overlap": 0.6
              },
              {
                "fact": "The resident can use the enrolment information or enrolment ID to check generation/status information.",
                "overlap": 0.6667
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 8Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 2: HOW TO ENROL FOR AADHAAR? Visit Aadhaar Enrolment Centre Fill Aadhaar Enrolment/ Update F orm Check & Confirm All Spellings on screen Submit Valid Give Demographic & Biometric Data You get SMS of Aadhaar generation Documents for Scanning Collect your documents & Enrolment slip To g et Aadhaar , y ou ha ve t o enr oll b y pr oviding minimal demogr aphic and biome tric in formation during the enr olment process, which is totally free of cost. Please note that you need to enroll for Aadhaar only once. 2.1 En rolment Process Please do Check & Confirm all data shown on the resident screen, before the operator submits your Packet"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 7,
            "distance": 0.5623500943183899,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "The enrolment information is processed for Aadhaar generation.",
                "overlap": 0.4
              },
              {
                "fact": "The resident can use the enrolment information or enrolment ID to check generation/status information.",
                "overlap": 0.3333
              }
            ],
            "chunk": "haar enrolment. 1.2.2 Aadh aar for NRIs If y ou are a non-resident Indian (NRI), you can enroll for Aadhaar if you have an Indian Passport. The mandate of 182 days does not apply for NRIs. You can visit an Aadhaar Enrolment Centre and enr oll f or Aadhaar as an NRI. Indian P assport is manda tory as Pr oof of Iden tity (P oI) f or NRIs. The app licant may choose to give any other Indian Proof of Address (PoA) from amongst the documents accepted by UIDAI (see Section 13.1, Annex \u2013 I of this handbook). 1.3 F eatures of Aadhaar 1.3.1 Aadh aar is an identifier Aadhaar is a 12-digit unique ID issued to an individual. Aadhaar use s de mographic in formation (name, da te of birth, g ender and addr ess), phot ograph of the f ace, fing erprints and iris t o ide ntify a r esident. The se it ems of in formation ar e manda tory. In addition, y ou ha ve the op tion of pr oviding y our mobile phone number and email. We recommend that you provide these details also. 1.3.2 Aadh aar is an ID, nothing m"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 21,
            "distance": 0.5644844770431519,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "The enrolment information is processed for Aadhaar generation.",
                "overlap": 0.4
              }
            ],
            "chunk": "er to track s tatus of y our Aadhaar upda te fr om: h ttps://ssup.uidai. gov.in/checkSSUPStatus/checkupdatestatus. 3.9 P oints to remember for Aadhaar Update at Aadhaar Enrolment Centre 1. An y Aadhaar holder can request for Aadhaar, update 2. Aadhaar upda te r equest r equires authen tication b y the Aadhaar holde r . This authen tication is done e ither as biome tric authen tication a t Aadhaar Enr olment Cen tre or O TP authen tication f or online addr ess upda te. F or childr en be low 5 y ears of ag e, this authen tication is done b y the parent/ guardian whose Aadhaar was linked to the child\u2019s at the time of enrolment 3. In c ase of children below the age of 18 consent of the parent/guardian is collected for updating the Aadhaar . 4. If y ou lose your update slip or do not have your Update Request Number, follow the process to retrieve EID as described in Sec. 2.5.1 5. If your update request gets rejected, you can call 1947 and get the reason for rejection and take corrective mea"
          }
        ]
      },
      "response": {
        "answer": "After Aadhaar enrolment, you will receive an SMS of Aadhaar generation.\n\nPage: 8 (Source: UIAI_1.pdf)",
        "latency_seconds": 35.92083717099922,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 0.6667,
        "facts_supported_by_context": 2,
        "facts_missing_from_context": 1,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Partial context support; response should be checked against missing facts."
      }
    },
    {
      "question_id": 13,
      "question": "What documents can be used as proof of identity?",
      "model": "llama3.2:3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.13457680700048513,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 63
          },
          {
            "source": "UIAI_2.pdf",
            "page": 1
          },
          {
            "source": "UIAI_2.pdf",
            "page": 9
          }
        ],
        "gold_locations_retrieved": [],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 0,
        "expected_fact_count": 2,
        "facts_with_context_support": [
          "Only documents from the UIDAI-valid supporting-document list should be presented as POI.",
          "The handbook provides a specific list of acceptable POI documents."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_2.pdf",
            "page": 8,
            "distance": 0.4320237636566162,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Only documents from the UIDAI-valid supporting-document list should be presented as POI.",
                "overlap": 0.5556
              },
              {
                "fact": "The handbook provides a specific list of acceptable POI documents.",
                "overlap": 0.2857
              }
            ],
            "chunk": "such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Validity period of the Aadhaar"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 3,
            "distance": 0.49322202801704407,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Only documents from the UIDAI-valid supporting-document list should be presented as POI.",
                "overlap": 0.5556
              },
              {
                "fact": "The handbook provides a specific list of acceptable POI documents.",
                "overlap": 0.2857
              }
            ],
            "chunk": "birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Head of Family (HoF) based enrolment is mandatory for children below five years of age ex"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 3,
            "distance": 0.49736079573631287,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Only documents from the UIDAI-valid supporting-document list should be presented as POI.",
                "overlap": 0.5556
              },
              {
                "fact": "The handbook provides a specific list of acceptable POI documents.",
                "overlap": 0.4286
              }
            ],
            "chunk": "List of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan * Proof of Address documents as in the \u201cList III - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar Number of individual eighteen years and above of age\u201d will also be applicable Note: (a) Any document listed in the above tabular statement shall be acceptable only if it meets the following conditions, namely:\u2014 (i) It is currently valid; (ii) The person in respect of whom such document is issued is entitled for the same; (iii) The information contained in the document is verifiable from the source; and (iv) The authority issuing the document has not made any declaration that such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is"
          }
        ]
      },
      "response": {
        "answer": "According to the Aadhaar Handbook, documents that can be used as Proof of Identity (PoI) are those that contain at least the name and photograph of the individual.\n\nPage 8 of UIAI_2.pdf states:\n\n(b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: \n(i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual.",
        "latency_seconds": 42.770830605999436,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 2,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 14,
      "question": "What documents can be used as proof of address?",
      "model": "llama3.2:3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.06885597199834592,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 63
          },
          {
            "source": "UIAI_2.pdf",
            "page": 1
          },
          {
            "source": "UIAI_2.pdf",
            "page": 12
          },
          {
            "source": "UIAI_2.pdf",
            "page": 18
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 63,
            "distance": 0.4018175005912781,
            "gold_location": true,
            "supporting_facts": [],
            "chunk": "Proof of Address) documents containing Name & Address 1. Passport 2. Bank Statement/ Passbook 3. Post Office Account Statement/ Passbook 4. Ration Card 5. Voter ID 6. Driving License 7. Government Photo ID cards/ service photo identity card issued by PSU 8. Electricity Bill (not older than 3 months) 9. Water Bill (not older than 3 months) 10. Telephone Landline Bill (not older than 3 months) 11. Property Tax Receipt (not older than 1 year) 12. Credit Card Statement (not older than 3 months) 13. Insurance Policy 14. Signed Letter having Photo from Bank on letterhead 15. Signed Letter having Photo issued by registered Company on letterhead 16. Signed Letter having Photo issued by Recognized Educational Institution on letterhead or Photo ID having address issued by Recognized Educational Institution 17. NREGS Job Card 18. Arms License 19. Pensioner Card 20. Freedom Fighter Card 21. Kissan Passbook 22. CGHS/ ECHS Card 23. Certificate of Address having photo issued by MP or MLA or MLC or Ga"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 1,
        "expected_fact_count": 3,
        "facts_with_context_support": [
          "Only documents from the UIDAI-valid supporting-document list should be presented as POA.",
          "The handbook provides a specific list of acceptable POA documents.",
          "Examples include accepted utility or property-related documents where they satisfy the stated validity conditions."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_2.pdf",
            "page": 3,
            "distance": 0.40162307024002075,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Only documents from the UIDAI-valid supporting-document list should be presented as POA.",
                "overlap": 0.5556
              },
              {
                "fact": "The handbook provides a specific list of acceptable POA documents.",
                "overlap": 0.4286
              }
            ],
            "chunk": "List of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan * Proof of Address documents as in the \u201cList III - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar Number of individual eighteen years and above of age\u201d will also be applicable Note: (a) Any document listed in the above tabular statement shall be acceptable only if it meets the following conditions, namely:\u2014 (i) It is currently valid; (ii) The person in respect of whom such document is issued is entitled for the same; (iii) The information contained in the document is verifiable from the source; and (iv) The authority issuing the document has not made any declaration that such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63,
            "distance": 0.4018175005912781,
            "gold_location": true,
            "supporting_facts": [],
            "chunk": "Proof of Address) documents containing Name & Address 1. Passport 2. Bank Statement/ Passbook 3. Post Office Account Statement/ Passbook 4. Ration Card 5. Voter ID 6. Driving License 7. Government Photo ID cards/ service photo identity card issued by PSU 8. Electricity Bill (not older than 3 months) 9. Water Bill (not older than 3 months) 10. Telephone Landline Bill (not older than 3 months) 11. Property Tax Receipt (not older than 1 year) 12. Credit Card Statement (not older than 3 months) 13. Insurance Policy 14. Signed Letter having Photo from Bank on letterhead 15. Signed Letter having Photo issued by registered Company on letterhead 16. Signed Letter having Photo issued by Recognized Educational Institution on letterhead or Photo ID having address issued by Recognized Educational Institution 17. NREGS Job Card 18. Arms License 19. Pensioner Card 20. Freedom Fighter Card 21. Kissan Passbook 22. CGHS/ ECHS Card 23. Certificate of Address having photo issued by MP or MLA or MLC or Ga"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 13,
            "distance": 0.41209468245506287,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Only documents from the UIDAI-valid supporting-document list should be presented as POA.",
                "overlap": 0.5556
              },
              {
                "fact": "The handbook provides a specific list of acceptable POA documents.",
                "overlap": 0.4286
              },
              {
                "fact": "Examples include accepted utility or property-related documents where they satisfy the stated validity conditions.",
                "overlap": 0.2727
              }
            ],
            "chunk": "List of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan * Proof of Address documents as in the above list will also be applicable. Note: (a) Any document listed in the above tabular statement shall be acceptable only if it meets the following conditions, namely: \u2014 (i) It is currently valid (ii) The person in respect of whom such document is issued is entitled for the same; (iii) The information contained in the document is verifiable from the source; and (iv) The authority issuing the document has not made any declaration that such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) A document is accepted as Proof of Relationship (PoR) docume"
          }
        ]
      },
      "response": {
        "answer": "According to the Aadhaar Handbook, the following documents can be used as proof of address:\n\n1. Passport\n2. Bank Statement/ Passbook\n3. Post Office Account Statement/ Passbook\n4. Ration Card\n5. Voter ID\n6. Driving License\n7. Government Photo ID cards/ service photo identity card issued by PSU\n8. Electricity Bill (not older than 3 months)\n9. Water Bill (not older than 3 months)\n10. Telephone Landline Bill (not older than 3 months)\n11. Property Tax Receipt (not older than 1 year)\n12. Credit Card Statement (not older than 3 months)\n13. Insurance Policy\n14. Signed Letter having Photo from Bank on letterhead\n15. Signed Letter having Photo issued by registered Company on letterhead\n16. Signed Letter having Photo issued by Recognized Educational Institution on letterhead or Photo ID having address issued by Recognized Educational Institution\n17. NREGS Job Card\n18. Arms License\n19. Pensioner Card\n20. Freedom Fighter Card\n21. Kissan Passbook\n22. CGHS/ ECHS Card\n23. Certificate of Address having photo issued by MP or MLA or MLC or Gaon Sabha\n\nPlease note that all these documents must meet the conditions mentioned in Section 6 of the Aadhaar Handbook (Page 13) to be accepted as proof of address.",
        "latency_seconds": 65.05586939599925,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 3,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": true,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 15,
      "question": "What documents can be used as proof of date of birth?",
      "model": "llama3.2:3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.06826438699863502,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 63
          },
          {
            "source": "UIAI_2.pdf",
            "page": 1
          },
          {
            "source": "UIAI_2.pdf",
            "page": 4
          },
          {
            "source": "UIAI_2.pdf",
            "page": 13
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_2.pdf",
            "page": 13,
            "distance": 0.4209522008895874,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Only documents from the UIDAI-valid supporting-document list should be used as DoB proof.",
                "overlap": 0.4444
              },
              {
                "fact": "Birth certificate is an example of an accepted DoB document in the handbook's document list.",
                "overlap": 0.5
              }
            ],
            "chunk": "irth certificate as proof of date of birth b. For Non-Resident Indian (NRI) below 18 years of age: - Aadhaar number holder shall submit birth certificate or Indian Passport as proof of date of birth c. For resident Indians and Non-Resident Indian (NRI) of 18 years and above of age: - Aadhaar number holder shall submit any of the acceptable proof of date of birth documents as specified in the above list (ii) If the Aadhaar number holder had earlier submitted birth certificate as proof of date of birth, the Aadhaar number holder shall submit corrected birth certificate bearing same Birth Registration Number (BRN) (iii) If the Aadhaar number holder had earlier submitted any proof of date of birth document except birth certificate (for e.g. Marksheet, Passport etc.), the Aadhaar number holder shall submit corrected version of the same document or submit a birth certificate (iv) In case of date of birth update of woman who has changed her name post-marriage, proof of date of birth documents"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 1,
        "expected_fact_count": 2,
        "facts_with_context_support": [
          "Only documents from the UIDAI-valid supporting-document list should be used as DoB proof.",
          "Birth certificate is an example of an accepted DoB document in the handbook's document list."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_2.pdf",
            "page": 13,
            "distance": 0.4209522008895874,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Only documents from the UIDAI-valid supporting-document list should be used as DoB proof.",
                "overlap": 0.4444
              },
              {
                "fact": "Birth certificate is an example of an accepted DoB document in the handbook's document list.",
                "overlap": 0.5
              }
            ],
            "chunk": "irth certificate as proof of date of birth b. For Non-Resident Indian (NRI) below 18 years of age: - Aadhaar number holder shall submit birth certificate or Indian Passport as proof of date of birth c. For resident Indians and Non-Resident Indian (NRI) of 18 years and above of age: - Aadhaar number holder shall submit any of the acceptable proof of date of birth documents as specified in the above list (ii) If the Aadhaar number holder had earlier submitted birth certificate as proof of date of birth, the Aadhaar number holder shall submit corrected birth certificate bearing same Birth Registration Number (BRN) (iii) If the Aadhaar number holder had earlier submitted any proof of date of birth document except birth certificate (for e.g. Marksheet, Passport etc.), the Aadhaar number holder shall submit corrected version of the same document or submit a birth certificate (iv) In case of date of birth update of woman who has changed her name post-marriage, proof of date of birth documents"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 3,
            "distance": 0.42837268114089966,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Only documents from the UIDAI-valid supporting-document list should be used as DoB proof.",
                "overlap": 0.4444
              },
              {
                "fact": "Birth certificate is an example of an accepted DoB document in the handbook's document list.",
                "overlap": 0.375
              }
            ],
            "chunk": "birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Head of Family (HoF) based enrolment is mandatory for children below five years of age ex"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 5,
            "distance": 0.4645431339740753,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Only documents from the UIDAI-valid supporting-document list should be used as DoB proof.",
                "overlap": 0.4444
              },
              {
                "fact": "Birth certificate is an example of an accepted DoB document in the handbook's document list.",
                "overlap": 0.375
              }
            ],
            "chunk": "tionship or Date of Birth for enrolment for Aadhaar Number of individual eighteen years and above of age\u201d will also be applicable Note: (a) Any document listed in the above tabular statement shall be acceptable only if it meets the following conditions, namely:\u2014 (i) It is currently valid (ii) The person in respect of whom such document is issued is entitled for the same; (iii) The information contained in the document is verifiable from the source; and (iv) The authority issuing the document has not made any declaration that such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the"
          }
        ]
      },
      "response": {
        "answer": "According to the Aadhaar Handbook, the following documents can be used as proof of date of birth:\n\n1. Birth certificate\n2. Indian Passport (for Non-Resident Indians below 18 years of age)\n3. Any other acceptable proof of date of birth document specified in the list.\n\nAdditionally, if an Aadhaar number holder had earlier submitted a different proof of date of birth document, they may need to submit a corrected version or a new birth certificate bearing the same Birth Registration Number (BRN).",
        "latency_seconds": 42.0026959909992,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 2,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 16,
      "question": "What is the role of the enrolment operator?",
      "model": "llama3.2:3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.06414865700025985,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 3
          },
          {
            "source": "UIAI_1.pdf",
            "page": 10
          },
          {
            "source": "UIAI_1.pdf",
            "page": 50
          },
          {
            "source": "UIAI_1.pdf",
            "page": 62
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 10,
            "distance": 0.7259753942489624,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "The operator assists with the Aadhaar enrolment process.",
                "overlap": 0.4
              },
              {
                "fact": "The operator is involved in capturing and entering resident information into the enrolment system.",
                "overlap": 0.25
              }
            ],
            "chunk": "trars\u2019 own employees \u2022 Elect ed local body members \u2022 Members of local administrative bodies \u2022 P ostman \u2022 Influencers such as teachers \u2022 Health w orkers \u2022 Doct ors \u2022 Ang anwadis/Asha workers \u2022 Representatives of local NGOs The information captured during Introducer-based Enrolment is: \u2022 Introducer\u2019s name \u2022 Introducer\u2019s Aadhaar number \u2022 One modality of biometric information of the Introducer 2.1.4 Enr olment of Children For HoF based enrolment, the Head of Family has to give biometric confirmation at the time of enrolment."
          },
          {
            "source": "UIAI_1.pdf",
            "page": 50,
            "distance": 0.7597264051437378,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "The operator is involved in capturing and entering resident information into the enrolment system.",
                "overlap": 0.25
              }
            ],
            "chunk": "ose. 4. Demo graphic information required for enrolment. \u2014 (1) The f ollowing demogr aphic in formation shall be c ollected fr om all individuals under going enrolment (other than children below five years of age):"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 2,
        "expected_fact_count": 3,
        "facts_with_context_support": [
          "The operator assists with the Aadhaar enrolment process.",
          "The operator is involved in capturing and entering resident information into the enrolment system.",
          "The operator assists residents at the enrolment centre."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 10,
            "distance": 0.7259753942489624,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "The operator assists with the Aadhaar enrolment process.",
                "overlap": 0.4
              },
              {
                "fact": "The operator is involved in capturing and entering resident information into the enrolment system.",
                "overlap": 0.25
              }
            ],
            "chunk": "trars\u2019 own employees \u2022 Elect ed local body members \u2022 Members of local administrative bodies \u2022 P ostman \u2022 Influencers such as teachers \u2022 Health w orkers \u2022 Doct ors \u2022 Ang anwadis/Asha workers \u2022 Representatives of local NGOs The information captured during Introducer-based Enrolment is: \u2022 Introducer\u2019s name \u2022 Introducer\u2019s Aadhaar number \u2022 One modality of biometric information of the Introducer 2.1.4 Enr olment of Children For HoF based enrolment, the Head of Family has to give biometric confirmation at the time of enrolment."
          },
          {
            "source": "UIAI_1.pdf",
            "page": 52,
            "distance": 0.7478420734405518,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "The operator assists with the Aadhaar enrolment process.",
                "overlap": 0.6
              },
              {
                "fact": "The operator is involved in capturing and entering resident information into the enrolment system.",
                "overlap": 0.5
              },
              {
                "fact": "The operator assists residents at the enrolment centre.",
                "overlap": 0.8
              }
            ],
            "chunk": "vide f or han dling of such e xceptions in the enrolment and upda te software, and such enr olment shall be carried out as per the procedure as may be specified by the Authority for this purpose. 12.2 CHAP TER IV - Update of Resident Information 16. R equest for update of identity information. \u2014 An Aadhaar number holder ma y seek alt eration of his demogr aphic in formation or biome tric in formation in c ases specified under Section 31 of the Act in acc ordance with update procedure specified in this Chapter . 17. Mand atory update for children. \u2014 The Authority shall r equire the bio metric in formation of childr en t o be upda ted upon a ttaining fiv e y ears of ag e and fift een y ears of ag e in acc ordance with the pr ocedure specified by the Authority. 19. Mode of upda ting residents\u2019 information. \u2014 The pr ocess of upda ting r esidents\u2019 in formation in the CIDR ma y be c arried out thr ough the following modes:\u2014 (a) A t any enrolment centre with the assistance of the operator and"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 50,
            "distance": 0.7597264051437378,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "The operator is involved in capturing and entering resident information into the enrolment system.",
                "overlap": 0.25
              }
            ],
            "chunk": "ose. 4. Demo graphic information required for enrolment. \u2014 (1) The f ollowing demogr aphic in formation shall be c ollected fr om all individuals under going enrolment (other than children below five years of age):"
          }
        ]
      },
      "response": {
        "answer": "According to the Aadhaar Handbook, on page 50, it is mentioned that:\n\n\"The process of updating residents' information may be carried out through the following modes:\u2014 (a) At any enrolment centre with the assistance of the operator and Enrolment Officer.\"\n\nThis implies that the role of the Enrolment Operator includes assisting in the update of residents' information at an enrolment centre, along with the Enrolment Officer.",
        "latency_seconds": 33.52274708200093,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 3,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 17,
      "question": "What is the role of the verifier?",
      "model": "llama3.2:3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.1620736559998477,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 62
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63
          }
        ],
        "gold_locations_retrieved": [],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 0,
        "expected_fact_count": 2,
        "facts_with_context_support": [],
        "facts_missing_from_retrieved_context": [
          "The verifier is involved in verification of the resident's enrolment/update information and supporting documentation.",
          "The enrolment/update form contains a verifier stamp and signature as part of the verification process."
        ],
        "chunk_analysis": [
          {
            "source": "UIAI_2.pdf",
            "page": 19,
            "distance": 0.8584055304527283,
            "gold_location": false,
            "supporting_facts": [],
            "chunk": "he certifier 5. Certifier Type \u2022 Mention the certifier type by tick mark one of box from below categories: \u2023 MP / MLA / MLC / Municipal Councillor \u2023 Gazetted Officer Group \u2018A\u2019/ Employees Provident Fund Organisation (EPFO) Officer \u2023 Tehsildar/ Gazetted Officer Group \u2018B\u2019 \u2023 Gazetted Officer at National AIDS Control Organisation (NACO)/State Health Department / Project Director of the State AIDS Control Society or his nominee \u2023 Head of recognised educational institution (only for the institute students concerned) \u2023 Village Panchayat Head/ President or Mukhiya/ Gaon Bura/ equivalent authority (for rural areas)/ Village Panchayat Secretary/ Village Revenue Officer or equivalent (for rural areas) 6. Checklist for Certifier \u2022 Verify the below checklist by tick mark the boxes: \u2023 No overwriting \u2023 Issue date is filled \u2023 Individual seeking to enrol / Aaadhaar number holder\u2019s signature is available \u2023 Certifier\u2019s details is filled \u2023 Individual seeking to enrol / Aaadhaar number holder\u2019s Photo is cro"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 49,
            "distance": 0.9198484420776367,
            "gold_location": false,
            "supporting_facts": [],
            "chunk": "Unique Identification Authority of India Government of India 49 Aadhaar Handbook for Residents 2021-Ver.2.0 11.1 R esponsibilities of UIDAI UID AI is r esponsible f or Aadhaar enr olment and authen tication under the Aadhaar Act 2016. The responsibilities include: \u2022 Operation and management of all stages of Aadhaar life cycle \u2022 P olicy development \u2022 Pr ocedure and system for issuing Aadhaar numbers to individuals \u2022 Authentication performance To download a copy of The Aadhaar Act 2016 SCAN"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 15,
            "distance": 0.9262070655822754,
            "gold_location": false,
            "supporting_facts": [],
            "chunk": "y above mentioned details of the Individual seeking to enrol /Aadhaar number holder and i am a.... (Tick appropriate box below) *To be used as Proof of Identify (PoI) only in specific cases as mentioned in the list of applicable supporting documents. CERTIFIER\u2019S DETAILS (TO BE FILLED BY THE CERTIFIER ONLY) No overwriting Issue date is filled Resident\u2019s signature Certifier\u2019s details Resident\u2019s Photo is cross signed and cross stamped (paper to photo or photo to paper) CHECKLIST FOR CERTIFIER Signature & Stamp of ther Certifier"
          }
        ]
      },
      "response": {
        "answer": "The information was not found in the provided Aadhaar Handbook.",
        "latency_seconds": 25.30827299900011,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 0.0,
        "facts_supported_by_context": 0,
        "facts_missing_from_context": 2,
        "model_abstained": true,
        "unsupported_claim_signal": false,
        "assessment": "Appropriate abstention because retrieved context lacks expected answer evidence."
      }
    },
    {
      "question_id": 18,
      "question": "How is an Aadhaar number generated?",
      "model": "llama3.2:3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.055953727998712566,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 6
          },
          {
            "source": "UIAI_1.pdf",
            "page": 15
          },
          {
            "source": "UIAI_1.pdf",
            "page": 26
          },
          {
            "source": "UIAI_1.pdf",
            "page": 31
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 6,
            "distance": 0.47015380859375,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "The Aadhaar number is generated by UIDAI's system rather than manually assigned by the resident or operator.",
                "overlap": 0.2727
              },
              {
                "fact": "The Aadhaar number is a unique 12-digit identity number.",
                "overlap": 0.8
              }
            ],
            "chunk": "one to visit the relevant webpage or watch a video tutorial on the mentioned service. Le t\u2019s begin y our Aadhaar journe y with a sneak peek in to the w orld of Aadhaar , the r elated pr ocesses, the ser vices available for you and the power of this 12-digit number that is unique to you. 1.1 Aadhaar Ov erview Aadhaar is a 12-digit unique iden tification number issue b y the Unique Identification Authority of India (UIDAI) t o the r esidents of India a fter sa tisfying the v erification pr ocess (described in Section 2) laid down by the Authority."
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 1,
        "expected_fact_count": 3,
        "facts_with_context_support": [
          "The Aadhaar number is generated by UIDAI's system rather than manually assigned by the resident or operator.",
          "The Aadhaar number is a unique 12-digit identity number."
        ],
        "facts_missing_from_retrieved_context": [
          "Aadhaar generation occurs after enrolment information has been submitted and processed."
        ],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 32,
            "distance": 0.46779030561447144,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "The Aadhaar number is generated by UIDAI's system rather than manually assigned by the resident or operator.",
                "overlap": 0.3636
              },
              {
                "fact": "The Aadhaar number is a unique 12-digit identity number.",
                "overlap": 0.8
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 32Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 7: VERIFICATION OF AADHAAR Not every 12 digit number is Aadhaar Verify Aadhaar Online To watch tutorial on Verify Aadhaar Service SCAN 7.1 V erify any Aadhaar Online An y Aadhaar number c an be v erified onli ne fr om uidai. gov. in. Y ou c an use this ser vice t o check the authen ticity of an y Aadhaar number tha t is presented to you. For the entered Aadhaar number, you get the following details of the Aadhaar holder: \u2022 If the Aadhaar number e xists \u2022 Ag e band \u2022 Gender \u2022 St ate of residence \u2022 Mobile Number (in mask ed form showing only last 4 digits) Be sides, a service provider can also verify the Aadhaar presented by a person using following services: 1. Online from: https://resident.uidai.gov.in/verify 2. Fr om mAadhaar App 3. Sc an the QR Code on presented Aadhaar using the Aadhaar QR Code Scanner App or mAadhaar App"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 6,
            "distance": 0.47015380859375,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "The Aadhaar number is generated by UIDAI's system rather than manually assigned by the resident or operator.",
                "overlap": 0.2727
              },
              {
                "fact": "The Aadhaar number is a unique 12-digit identity number.",
                "overlap": 0.8
              }
            ],
            "chunk": "one to visit the relevant webpage or watch a video tutorial on the mentioned service. Le t\u2019s begin y our Aadhaar journe y with a sneak peek in to the w orld of Aadhaar , the r elated pr ocesses, the ser vices available for you and the power of this 12-digit number that is unique to you. 1.1 Aadhaar Ov erview Aadhaar is a 12-digit unique iden tification number issue b y the Unique Identification Authority of India (UIDAI) t o the r esidents of India a fter sa tisfying the v erification pr ocess (described in Section 2) laid down by the Authority."
          },
          {
            "source": "UIAI_1.pdf",
            "page": 7,
            "distance": 0.4744594693183899,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "The Aadhaar number is generated by UIDAI's system rather than manually assigned by the resident or operator.",
                "overlap": 0.3636
              },
              {
                "fact": "The Aadhaar number is a unique 12-digit identity number.",
                "overlap": 0.6
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 7 Aadhaar Handbook for Residents 2021-Ver.2.0 1.2 Who c an get Aadhaar? An y individual in India, irr espective of ag e and g ender, who is a r esident of India, or a non r esident Indian (NRI), can enroll to obtain Aadhaar number. For an individual, only one Aadhaar number is generated, as the uniqueness is achieved through the process of demographic and biometric de-duplication. 1.2.1. Aadh aar for residents of India Y ou ar e eligible f or Aadhaar Enr olment if y ou ar e a r esident of India. This, b y de finition, means tha t y ou ha ve r esided in India f or a period or periods amoun ting in all t o one hundr ed and eigh ty-two days (182 days) or more in the twelve months immediately preceding the date of application for Aadhaar enrolment. 1.2.2 Aadh aar for NRIs If y ou are a non-resident Indian (NRI), you can enroll for Aadhaar if you have an Indian Passport. The mandate of 182 days does not apply for NRIs. You can vis"
          }
        ]
      },
      "response": {
        "answer": "The information was not found in the provided Aadhaar Handbook.",
        "latency_seconds": 32.35920420599905,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 0.6667,
        "facts_supported_by_context": 2,
        "facts_missing_from_context": 1,
        "model_abstained": true,
        "unsupported_claim_signal": false,
        "assessment": "Partial context support; model abstained despite some evidence being retrieved."
      }
    },
    {
      "question_id": 19,
      "question": "What should a resident do if there is an error in their Aadhaar information?",
      "model": "llama3.2:3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.10769190000064555,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 17
          },
          {
            "source": "UIAI_1.pdf",
            "page": 18
          },
          {
            "source": "UIAI_1.pdf",
            "page": 20
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 20,
            "distance": 0.4807325005531311,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "The resident should request an update/correction of the incorrect information.",
                "overlap": 0.2857
              },
              {
                "fact": "Updates can be performed through the applicable Aadhaar update process.",
                "overlap": 0.2857
              }
            ],
            "chunk": "lds (name, gender and date of birth) in y our Aadhaar again (beyond the permissible limit), you need to: 1. Visit an y Aadhaar Enr olment Cen tre (with v alid supporting docume nt f or N ame & Da te of Birth upda te) 2. Place an up date request 3. Send the latest URN (Update Request Number) to Aadhaar help centre by calling 1947 or via email to help@uidai.gov.in and request for \u2018exception update\u2019 The c ase is then assigne d t o the UID AI\u2019s R egional Office tha t handles y our r egion f or due dilig ence. Once verified, your update request will be processed and the outcome communicated to you. 3.7 Upda te in case of Aadhaar Deactivation Y our Aadhaar data is subject to periodic quality checks. During such quality checks by UIDAI, if any discr epancy is f ound in the supporting documen ts or c aptured biome tric da ta of a r esident, his/her Aadhaar is deactiv ated t emporarily and the Aadhaar holder is duly notified of this. If y our Aadhaar gets suspended, you would not be able to ava"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 1,
        "expected_fact_count": 3,
        "facts_with_context_support": [
          "The resident should request an update/correction of the incorrect information.",
          "Updates can be performed through the applicable Aadhaar update process.",
          "Valid supporting documents may be required depending on the field being corrected."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 20,
            "distance": 0.4807325005531311,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "The resident should request an update/correction of the incorrect information.",
                "overlap": 0.2857
              },
              {
                "fact": "Updates can be performed through the applicable Aadhaar update process.",
                "overlap": 0.2857
              }
            ],
            "chunk": "lds (name, gender and date of birth) in y our Aadhaar again (beyond the permissible limit), you need to: 1. Visit an y Aadhaar Enr olment Cen tre (with v alid supporting docume nt f or N ame & Da te of Birth upda te) 2. Place an up date request 3. Send the latest URN (Update Request Number) to Aadhaar help centre by calling 1947 or via email to help@uidai.gov.in and request for \u2018exception update\u2019 The c ase is then assigne d t o the UID AI\u2019s R egional Office tha t handles y our r egion f or due dilig ence. Once verified, your update request will be processed and the outcome communicated to you. 3.7 Upda te in case of Aadhaar Deactivation Y our Aadhaar data is subject to periodic quality checks. During such quality checks by UIDAI, if any discr epancy is f ound in the supporting documen ts or c aptured biome tric da ta of a r esident, his/her Aadhaar is deactiv ated t emporarily and the Aadhaar holder is duly notified of this. If y our Aadhaar gets suspended, you would not be able to ava"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 25,
            "distance": 0.4891921877861023,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "The resident should request an update/correction of the incorrect information.",
                "overlap": 0.2857
              },
              {
                "fact": "Updates can be performed through the applicable Aadhaar update process.",
                "overlap": 0.2857
              },
              {
                "fact": "Valid supporting documents may be required depending on the field being corrected.",
                "overlap": 0.25
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 25 Aadhaar Handbook for Residents 2021-Ver.2.0 To file a complaint SCAN can download and print the Aadhaar Enrolment/Update from the link below https://www. uidai.gov.in/images/commdoc/valid_documents_list.pdf. R esident c an bring the filled f orm t o an y centre to avoid mistakes 5.2 Ho w to complaint if the centre charges you extra or if you are not satisfied with the service If the centre charged you more than the prescribed service charge men tioned abo ve, y ou c an file a c omplaint in f ollowing w ays: \u2022 Call 1947 and r egister a complaint \u2022 Email the cen tre details along with your URN and contact details to help@uidai.gov.in \u2022 File a c omplaint online fr om: h ttps://resident.uidai. gov.in/file-complaint \u2022 R esident can complaint with the concerned Registrar, details of the registrar are available at your centre."
          },
          {
            "source": "UIAI_1.pdf",
            "page": 5,
            "distance": 0.498706579208374,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "The resident should request an update/correction of the incorrect information.",
                "overlap": 0.4286
              },
              {
                "fact": "Updates can be performed through the applicable Aadhaar update process.",
                "overlap": 0.4286
              },
              {
                "fact": "Valid supporting documents may be required depending on the field being corrected.",
                "overlap": 0.375
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 5 Aadhaar Handbook for Residents 2021-Ver.2.0 9.3 How you can further protect your Aadhaar Information 39 SE CTION 10: GRIEVANCE HANDLING 40 10.1 Aadhaar Sampa rk Kendra - Helpline 1947 40 10.2 Help via Email 41 10.3 Aadhaar W ebsite 41 10.4 Aadhaar Cha tbot 42 10.5 So cial Media 43 10.5.1 Official Social Media Profiles: 43 10.5.2 Beware of Fake Profiles/ User Accounts 45 10.6 Aadhaar Regional Offices 46 SE CTION 11: THE AADHAAR ACT 2016 48 11.1 Responsibilities of UIDAI 49 SE CTION 12: AADHAAR ( ENROLMENT AN D UPD ATE) RE GULATIONS, 2 016 50 12.1 CHAP TER II - Resident Enrolment Process 50 12.2 CHAPTER IV - Update of Resident Information 52 12.3 CHAPTER VI - Omission or Deactivation of Aadhaar Number and Identity Information 53 SE CTION 13: APPENDIX 56 13.1 Annexure I - List of valid supporting documents 56 13.2 Annexure II \u2013 Format for Certificate (For Aadhaar Enrolment/ Update) 58 13.3 Annexure III \u2013 How to fill (Certifica"
          }
        ]
      },
      "response": {
        "answer": "If there is an error in your Aadhaar information, you need to visit an Aadhaar Enrolment Centre (with valid supporting documents for Name & Date of Birth update) and place an update request. You will then receive an Update Request Number (URN). Send the latest URN to Aadhaar help centre by calling 1947 or via email to help@uidai.gov.in, requesting 'exception update'. The case is then assigned to your Regional Office for due diligence. Once verified, your update request will be processed and the outcome communicated to you.",
        "latency_seconds": 50.64832034400024,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 3,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 20,
      "question": "What is demographic authentication?",
      "model": "llama3.2:3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.12825515499935136,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 36
          },
          {
            "source": "UIAI_1.pdf",
            "page": 37
          },
          {
            "source": "UIAI_1.pdf",
            "page": 39
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 36,
            "distance": 0.6933571100234985,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Demographic authentication is authentication using demographic information associated with Aadhaar.",
                "overlap": 0.6
              },
              {
                "fact": "It is one of the modes of Aadhaar authentication.",
                "overlap": 0.75
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 36Aadhaar Handbook for Residents 2021-Ver.2.0 You will receive any Aadhaar-based credits in only one account that you have mapped to the NPCI mapper. \u2022 Upda te Demographic Online: If you have your Aadhaar registered mobile number, you can place an online demographic details update request using the SSUP (self- service update portal) of Aadhaar. This service requires mandatory OTP authentication \u2022 Aadhaar Bank Linking Status: You can check your Aadhaar and Bank Account Linking Status in NPCI mapper using this service. This service requires mandatory OTP authentication. \u2022 Aadhaar Update History: You can use this service to get a chronological history of all updates done in your Aadhaar. The OTP for this service will be sent to your registered mobile number \u2022 V erify Email/ Mobile Number: You can use this service to verify their email or mobile number in your Aadhaar. The OTP for this service will be sent to your registered mobi"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 1,
        "expected_fact_count": 2,
        "facts_with_context_support": [
          "Demographic authentication is authentication using demographic information associated with Aadhaar.",
          "It is one of the modes of Aadhaar authentication."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 36,
            "distance": 0.6933571100234985,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Demographic authentication is authentication using demographic information associated with Aadhaar.",
                "overlap": 0.6
              },
              {
                "fact": "It is one of the modes of Aadhaar authentication.",
                "overlap": 0.75
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 36Aadhaar Handbook for Residents 2021-Ver.2.0 You will receive any Aadhaar-based credits in only one account that you have mapped to the NPCI mapper. \u2022 Upda te Demographic Online: If you have your Aadhaar registered mobile number, you can place an online demographic details update request using the SSUP (self- service update portal) of Aadhaar. This service requires mandatory OTP authentication \u2022 Aadhaar Bank Linking Status: You can check your Aadhaar and Bank Account Linking Status in NPCI mapper using this service. This service requires mandatory OTP authentication. \u2022 Aadhaar Update History: You can use this service to get a chronological history of all updates done in your Aadhaar. The OTP for this service will be sent to your registered mobile number \u2022 V erify Email/ Mobile Number: You can use this service to verify their email or mobile number in your Aadhaar. The OTP for this service will be sent to your registered mobi"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 33,
            "distance": 0.7304410338401794,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Demographic authentication is authentication using demographic information associated with Aadhaar.",
                "overlap": 0.4
              },
              {
                "fact": "It is one of the modes of Aadhaar authentication.",
                "overlap": 0.25
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 33 Aadhaar Handbook for Residents 2021-Ver.2.0 7.2 Secur e QR Code on Aadhaar Th e Aadhaar letter, Aadhaar PVC Card and eAadhaar contain a digit ally signed secure QR code that has demographic details of the Aadhaar holder with photograph. This QR Code can be used to verify the identity of the Aadhaar holder . Th e service provider needs to use Aadhaar QR Code Scanner App (also available in mAadhaar) to scan the Secure QR Code on the presented Aadhaar. Aadhaar Offline Verification made easy using Secure QR Code To read more about Secure QR Code SCAN To watch tutorial on the Secure QR Code SCAN"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 20,
            "distance": 0.7322732210159302,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Demographic authentication is authentication using demographic information associated with Aadhaar.",
                "overlap": 0.6
              },
              {
                "fact": "It is one of the modes of Aadhaar authentication.",
                "overlap": 0.25
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 20Aadhaar Handbook for Residents 2021-Ver.2.0 3.5 Li mits on number of updates As per the update policy of UIDAI, the following limits have been set for update of demographic information in their Aadhaar: \u2022 Name \u2013 Can be updated twice \u2022 Gender \u2013 Once \u2022 Date of Birth \u2013 Once Th e pr ocess f or the abo ve upda tes within the permissible limits is same as described in Section 3.1 abo ve. An y other in formation in y our Aadhaar c an be upda ted as and when r equired. Ther e is no limit on the number of updates for any other demographic information \u2013 address, email ID, mobile number; or biometrics \u2013 photograph, fingerprints, iris scans. 3.6 Ex ception Process for Aadhaar Update If for any reason, you need to update the above three fields (name, gender and date of birth) in y our Aadhaar again (beyond the permissible limit), you need to: 1. Visit an y Aadhaar Enr olment Cen tre (with v alid supporting docume nt f or N ame & Da te o"
          }
        ]
      },
      "response": {
        "answer": "The information was not found in the provided Aadhaar Handbook.",
        "latency_seconds": 29.93616270700113,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 2,
        "facts_missing_from_context": 0,
        "model_abstained": true,
        "unsupported_claim_signal": false,
        "assessment": "Relevant evidence was retrieved, but the model abstained despite sufficient context."
      }
    },
    {
      "question_id": 21,
      "question": "What is biometric authentication?",
      "model": "llama3.2:3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.09651550799935649,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 19
          },
          {
            "source": "UIAI_1.pdf",
            "page": 20
          },
          {
            "source": "UIAI_1.pdf",
            "page": 39
          },
          {
            "source": "UIAI_1.pdf",
            "page": 50
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 20,
            "distance": 0.6603267192840576,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Biometric authentication uses biometric information associated with the resident's Aadhaar.",
                "overlap": 0.4286
              },
              {
                "fact": "Biometric information includes characteristics such as fingerprints and iris scans.",
                "overlap": 0.25
              },
              {
                "fact": "Biometric authentication is one of the modes through which Aadhaar can be authenticated.",
                "overlap": 0.4286
              }
            ],
            "chunk": "r c aptured biome tric da ta of a r esident, his/her Aadhaar is deactiv ated t emporarily and the Aadhaar holder is duly notified of this. If y our Aadhaar gets suspended, you would not be able to avail any service based on Aadhaar OTP/ biometric authentication. In such c ases, the Aadhaar holder needs to follow the below steps: 1. R efer t o the e mail/ SMS/ le tter b y UID AI or c all 1947 t o kno w sub sequent c ourse of action. 2. If the deactiv ation is due t o biome trics r elated r eason, visit an y Aadhaar Enr olment Cen tre and update your biometrics. Name can be updated TWICE Gender can be updated only ONCE Want to update Date of Birth, Name and Gender in Aadhaar? Date of birth can be updated only ONCE NOTE THE FOLLOWING"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 1,
        "expected_fact_count": 3,
        "facts_with_context_support": [
          "Biometric authentication uses biometric information associated with the resident's Aadhaar.",
          "Biometric information includes characteristics such as fingerprints and iris scans.",
          "Biometric authentication is one of the modes through which Aadhaar can be authenticated."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 20,
            "distance": 0.6603267192840576,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Biometric authentication uses biometric information associated with the resident's Aadhaar.",
                "overlap": 0.4286
              },
              {
                "fact": "Biometric information includes characteristics such as fingerprints and iris scans.",
                "overlap": 0.25
              },
              {
                "fact": "Biometric authentication is one of the modes through which Aadhaar can be authenticated.",
                "overlap": 0.4286
              }
            ],
            "chunk": "r c aptured biome tric da ta of a r esident, his/her Aadhaar is deactiv ated t emporarily and the Aadhaar holder is duly notified of this. If y our Aadhaar gets suspended, you would not be able to avail any service based on Aadhaar OTP/ biometric authentication. In such c ases, the Aadhaar holder needs to follow the below steps: 1. R efer t o the e mail/ SMS/ le tter b y UID AI or c all 1947 t o kno w sub sequent c ourse of action. 2. If the deactiv ation is due t o biome trics r elated r eason, visit an y Aadhaar Enr olment Cen tre and update your biometrics. Name can be updated TWICE Gender can be updated only ONCE Want to update Date of Birth, Name and Gender in Aadhaar? Date of birth can be updated only ONCE NOTE THE FOLLOWING"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 64,
            "distance": 0.6823380589485168,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Biometric authentication uses biometric information associated with the resident's Aadhaar.",
                "overlap": 0.2857
              },
              {
                "fact": "Biometric authentication is one of the modes through which Aadhaar can be authenticated.",
                "overlap": 0.2857
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 64Aadhaar Handbook for Residents 2021-Ver.2.0 Verify Aadhaar SCAN Lock/ Unlock Aadhaar SCAN Check your Aadhaar Update History SCAN Update Address Without Documents SCAN Secure QR Code SCAN Locate Aadhaar Enrolment Centre SCAN Verify Digital Signature SCAN Get back your lost Aadhaar number or Enrolment ID SCAN Check status of your Aadhaar enrolment or update request SCAN mAadhaar App SCAN Download Aadhaar SCAN Generate/ Retrieve VID SCAN Check your Aadhaar Authentication History SCAN Check Status of your online update request SCAN Online Appointment Booking SCAN Update Address Online SCAN What is EID SCAN Lock/ Unlock Biometrics SCAN Order Aadhaar Reprint SCAN Aadhaar Chatbot SCAN 13.5 Aadhaar T utorial Videos"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 52,
            "distance": 0.6998177766799927,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Biometric information includes characteristics such as fingerprints and iris scans.",
                "overlap": 0.5
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 52Aadhaar Handbook for Residents 2021-Ver.2.0 the r elationship be tween the link ed par ent/guardian and the child shall be c ollected a t the time of enr olment. Only those childr en c an be enr olled based on the r elationship documen t (P oR), whose names ar e r ecorded in the r elationship documen t. 6. Enr olment of residents with biometric exceptions. \u2014 (1) F or r esidents who ar e unable t o pr ovide fing erprints, o wing t o r easons such as injur y, de formities, amput ation of the fing ers/ hands or an y other r elevant r eason, only iris scans of such residents will be collected. (2) F or r esidents who ar e unable t o pr ovide an y biome tric in formation c ontemplated b y these r egulations, the Authority shall pr ovide f or han dling of such e xceptions in the enrolment and upda te software, and such enr olment shall be carried out as per the procedure as may be specified by the Authority for this purpose. 12.2"
          }
        ]
      },
      "response": {
        "answer": "The information was not found in the provided Aadhaar Handbook.",
        "latency_seconds": 31.323463658000037,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 3,
        "facts_missing_from_context": 0,
        "model_abstained": true,
        "unsupported_claim_signal": false,
        "assessment": "Relevant evidence was retrieved, but the model abstained despite sufficient context."
      }
    },
    {
      "question_id": 22,
      "question": "What is Aadhaar authentication?",
      "model": "llama3.2:3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.1505317709998053,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 7
          },
          {
            "source": "UIAI_1.pdf",
            "page": 36
          },
          {
            "source": "UIAI_1.pdf",
            "page": 37
          },
          {
            "source": "UIAI_1.pdf",
            "page": 38
          },
          {
            "source": "UIAI_1.pdf",
            "page": 39
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 37,
            "distance": 0.3674051761627197,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Aadhaar authentication is an online process through which Aadhaar identity can be verified.",
                "overlap": 0.4286
              },
              {
                "fact": "Authentication can involve demographic, biometric or OTP-based authentication.",
                "overlap": 0.3333
              },
              {
                "fact": "The authentication response can be a yes/no verification response.",
                "overlap": 0.25
              },
              {
                "fact": "Aadhaar authentication does not provide the requesting entity unrestricted access to the resident's Aadhaar database.",
                "overlap": 0.25
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 37 Aadhaar Handbook for Residents 2021-Ver.2.0 To read FAQs SCAN \u2022 Aadhaar Authentication History: Using this service, you can g et de tails of authen tication perf ormed b y y ou in pas t 6 mon ths. The OTP for this service will be sent to your registered mobile number. \u2022 Offline eKYC Service: Using this service, you can generate your digitally signed Aadhaar details that you may use for KYC purposes. To know more about Aadhaar Authentication History SCAN To know more about Aadhaar Paperless Offline eKYC: SCAN 8.3 Fr equently Asked Questions UID AI also has e xtensive F AQs section on the w ebsite and mAadhaar app to help residents understand Aadhaar process, services and products."
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 1,
        "expected_fact_count": 4,
        "facts_with_context_support": [
          "Aadhaar authentication is an online process through which Aadhaar identity can be verified.",
          "Authentication can involve demographic, biometric or OTP-based authentication.",
          "The authentication response can be a yes/no verification response.",
          "Aadhaar authentication does not provide the requesting entity unrestricted access to the resident's Aadhaar database."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 33,
            "distance": 0.342551589012146,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Aadhaar authentication is an online process through which Aadhaar identity can be verified.",
                "overlap": 0.2857
              },
              {
                "fact": "The authentication response can be a yes/no verification response.",
                "overlap": 0.25
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 33 Aadhaar Handbook for Residents 2021-Ver.2.0 7.2 Secur e QR Code on Aadhaar Th e Aadhaar letter, Aadhaar PVC Card and eAadhaar contain a digit ally signed secure QR code that has demographic details of the Aadhaar holder with photograph. This QR Code can be used to verify the identity of the Aadhaar holder . Th e service provider needs to use Aadhaar QR Code Scanner App (also available in mAadhaar) to scan the Secure QR Code on the presented Aadhaar. Aadhaar Offline Verification made easy using Secure QR Code To read more about Secure QR Code SCAN To watch tutorial on the Secure QR Code SCAN"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 37,
            "distance": 0.3674051761627197,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Aadhaar authentication is an online process through which Aadhaar identity can be verified.",
                "overlap": 0.4286
              },
              {
                "fact": "Authentication can involve demographic, biometric or OTP-based authentication.",
                "overlap": 0.3333
              },
              {
                "fact": "The authentication response can be a yes/no verification response.",
                "overlap": 0.25
              },
              {
                "fact": "Aadhaar authentication does not provide the requesting entity unrestricted access to the resident's Aadhaar database.",
                "overlap": 0.25
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 37 Aadhaar Handbook for Residents 2021-Ver.2.0 To read FAQs SCAN \u2022 Aadhaar Authentication History: Using this service, you can g et de tails of authen tication perf ormed b y y ou in pas t 6 mon ths. The OTP for this service will be sent to your registered mobile number. \u2022 Offline eKYC Service: Using this service, you can generate your digitally signed Aadhaar details that you may use for KYC purposes. To know more about Aadhaar Authentication History SCAN To know more about Aadhaar Paperless Offline eKYC: SCAN 8.3 Fr equently Asked Questions UID AI also has e xtensive F AQs section on the w ebsite and mAadhaar app to help residents understand Aadhaar process, services and products."
          },
          {
            "source": "UIAI_1.pdf",
            "page": 4,
            "distance": 0.38354194164276123,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Aadhaar authentication is an online process through which Aadhaar identity can be verified.",
                "overlap": 0.2857
              },
              {
                "fact": "The authentication response can be a yes/no verification response.",
                "overlap": 0.25
              }
            ],
            "chunk": "eration 26 6.2 Aadhaar Letter 26 6.3 Do wnload eAadhaar 27 6.3.1 O TP to download Aadhaar & Password 28 6.3.2 Validating the digital signature on eAadhaar 28 6.3.3 Do wnloaded Aadhaar is legally valid 28 6.3.4 F eatures of eAadhaar 29 6.4 Aadhaar P VC Card 29 6.5 mAadhaar Mob ile App 30 SE CTION 7: VERIFICATION OF AADHAAR 3 2 7.1 V erify any Aadhaar Online 32 7.2 Secur e QR Code on Aadhaar 33 SE CTION 8: AADHAAR ONLINE SERVICES 34 8.1 Aadhaar Online Services (that DO NOT require Registered Mobile Number) 34 8.2 Aadhaar Online Services (that require Registered Mobile Number) 35 8.3 Frequently Asked Questions 37 SE CTION 9: PRIVACY AND SECURITY OF YOUR AADHAAR DATA 38 9.1 UIDAI Protecting privacy and information 38 9.2 Da ta Security in CIDR 39"
          }
        ]
      },
      "response": {
        "answer": "The information was not found in the provided Aadhaar Handbook.",
        "latency_seconds": 28.850947438999356,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 4,
        "facts_missing_from_context": 0,
        "model_abstained": true,
        "unsupported_claim_signal": false,
        "assessment": "Relevant evidence was retrieved, but the model abstained despite sufficient context."
      }
    },
    {
      "question_id": 23,
      "question": "Can a resident update Aadhaar information?",
      "model": "llama3.2:3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.1481321229985042,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 17
          },
          {
            "source": "UIAI_1.pdf",
            "page": 18
          },
          {
            "source": "UIAI_1.pdf",
            "page": 20
          },
          {
            "source": "UIAI_1.pdf",
            "page": 36
          },
          {
            "source": "UIAI_1.pdf",
            "page": 52
          }
        ],
        "gold_locations_retrieved": [],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 0,
        "expected_fact_count": 3,
        "facts_with_context_support": [
          "Yes, an Aadhaar number holder can request alteration/update of demographic or biometric information.",
          "Updates can be performed through an enrolment centre.",
          "Some demographic updates can also be performed online using the applicable self-service process when the registered mobile number is available."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 16,
            "distance": 0.415986031293869,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Yes, an Aadhaar number holder can request alteration/update of demographic or biometric information.",
                "overlap": 0.3
              }
            ],
            "chunk": "should check details of your Aadhaar for any other required update. 3.1 Documen ts Required for Update Y ou need t o submit a v alid supporting documen t f or v erification f or upda ting f ollowing de tails in y our Aadhaar: \u2022 Name \u2022 Addr ess \u2022 Da te of Birth When you update your Aadhaar, only your Aadhaar details get updated, the Aadhaar number shall remain same."
          },
          {
            "source": "UIAI_1.pdf",
            "page": 16,
            "distance": 0.4215809404850006,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Yes, an Aadhaar number holder can request alteration/update of demographic or biometric information.",
                "overlap": 0.5
              },
              {
                "fact": "Updates can be performed through an enrolment centre.",
                "overlap": 0.4
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 16Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 3: AADHAAR UPDATE You can update any demographic details (name, address, date of birth, gender, mobile number or email ID), or biometric details (photograph, fingerprints, iris scan) in your Aadhaar from any Aadhaar Enrolment Centre across the country. You can get more than one entry updated in Aadhaar Enrolment Centre at the same time . The fee for update of single entry (such as address) and multiple entries (such as address, mobile phone number, email address etc.) is the same. So upda ting all those en tries t ogether which need t o be upda ted is both c onvenient and c ost e ffective f or y ou. Ther efore, be fore visiting Aadhaar Enr olment Cen tre f or an upda te, y ou should check details of your Aadhaar for any other required update. 3.1 Documen ts Required for Update Y ou need t o submit a v alid supporting documen t f or v erification f or upda ting f ollowing d"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 21,
            "distance": 0.42346474528312683,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Yes, an Aadhaar number holder can request alteration/update of demographic or biometric information.",
                "overlap": 0.4
              },
              {
                "fact": "Updates can be performed through an enrolment centre.",
                "overlap": 0.4
              },
              {
                "fact": "Some demographic updates can also be performed online using the applicable self-service process when the registered mobile number is available.",
                "overlap": 0.3077
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 21 Aadhaar Handbook for Residents 2021-Ver.2.0 3. If the deactiv ation is due t o docu ments r elated r eason, c ontact/visit the c oncerned Aadhaar Regional Office for update after due diligence. 3.8 Aadhaar Upd ate Status Check Y ou can use the 8 digit Update Request Number (URN) mentioned on the upda te ackno wledgement slip t o check the s tatus of your Aadhaar update request from: \u2022 Calling Aadhaar helpline \u2013 1947 \u2022 Sending email t o help@uidai.gov.in \u2022 Visiting uidai.gov.in \u2022 Thr ough mAadhaar App On success ful submission of an online address update request via SSUP , you receive a URN (Update Request Number). This is shown on screen and also sent via SMS to your registered mobile number. Use this URN and your Aadhaar number to track s tatus of y our Aadhaar upda te fr om: h ttps://ssup.uidai. gov.in/checkSSUPStatus/checkupdatestatus. 3.9 P oints to remember for Aadhaar Update at Aadhaar Enrolment Centre 1. An y Aadhaa"
          }
        ]
      },
      "response": {
        "answer": "Yes, a resident can update their Aadhaar information.\n\nAccording to Section 3 of the Aadhaar Handbook (Page 16), you can update any demographic details or biometric details in your Aadhaar from any Aadhaar Enrolment Centre across the country.",
        "latency_seconds": 35.01779463799903,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 3,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 24,
      "question": "What types of information can be updated in Aadhaar?",
      "model": "llama3.2:3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.09493867399942246,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 17
          },
          {
            "source": "UIAI_1.pdf",
            "page": 20
          },
          {
            "source": "UIAI_1.pdf",
            "page": 52
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 20,
            "distance": 0.47000300884246826,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Name, gender and date of birth can be updated subject to the stated limits.",
                "overlap": 0.625
              },
              {
                "fact": "Email ID and mobile number can be updated.",
                "overlap": 0.5
              }
            ],
            "chunk": "lds (name, gender and date of birth) in y our Aadhaar again (beyond the permissible limit), you need to: 1. Visit an y Aadhaar Enr olment Cen tre (with v alid supporting docume nt f or N ame & Da te of Birth upda te) 2. Place an up date request 3. Send the latest URN (Update Request Number) to Aadhaar help centre by calling 1947 or via email to help@uidai.gov.in and request for \u2018exception update\u2019 The c ase is then assigne d t o the UID AI\u2019s R egional Office tha t handles y our r egion f or due dilig ence. Once verified, your update request will be processed and the outcome communicated to you. 3.7 Upda te in case of Aadhaar Deactivation Y our Aadhaar data is subject to periodic quality checks. During such quality checks by UIDAI, if any discr epancy is f ound in the supporting documen ts or c aptured biome tric da ta of a r esident, his/her Aadhaar is deactiv ated t emporarily and the Aadhaar holder is duly notified of this. If y our Aadhaar gets suspended, you would not be able to ava"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 1,
        "expected_fact_count": 5,
        "facts_with_context_support": [
          "Demographic information can be updated.",
          "Address can be updated.",
          "Name, gender and date of birth can be updated subject to the stated limits.",
          "Email ID and mobile number can be updated.",
          "Biometric information such as photograph, fingerprints and iris scans can be updated."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 16,
            "distance": 0.3720545172691345,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Demographic information can be updated.",
                "overlap": 0.3333
              },
              {
                "fact": "Address can be updated.",
                "overlap": 0.5
              },
              {
                "fact": "Name, gender and date of birth can be updated subject to the stated limits.",
                "overlap": 0.375
              },
              {
                "fact": "Email ID and mobile number can be updated.",
                "overlap": 0.5
              }
            ],
            "chunk": "should check details of your Aadhaar for any other required update. 3.1 Documen ts Required for Update Y ou need t o submit a v alid supporting documen t f or v erification f or upda ting f ollowing de tails in y our Aadhaar: \u2022 Name \u2022 Addr ess \u2022 Da te of Birth When you update your Aadhaar, only your Aadhaar details get updated, the Aadhaar number shall remain same."
          },
          {
            "source": "UIAI_1.pdf",
            "page": 16,
            "distance": 0.41792237758636475,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Demographic information can be updated.",
                "overlap": 0.6667
              },
              {
                "fact": "Address can be updated.",
                "overlap": 1.0
              },
              {
                "fact": "Name, gender and date of birth can be updated subject to the stated limits.",
                "overlap": 0.625
              },
              {
                "fact": "Email ID and mobile number can be updated.",
                "overlap": 1.0
              },
              {
                "fact": "Biometric information such as photograph, fingerprints and iris scans can be updated.",
                "overlap": 0.75
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 16Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 3: AADHAAR UPDATE You can update any demographic details (name, address, date of birth, gender, mobile number or email ID), or biometric details (photograph, fingerprints, iris scan) in your Aadhaar from any Aadhaar Enrolment Centre across the country. You can get more than one entry updated in Aadhaar Enrolment Centre at the same time . The fee for update of single entry (such as address) and multiple entries (such as address, mobile phone number, email address etc.) is the same. So upda ting all those en tries t ogether which need t o be upda ted is both c onvenient and c ost e ffective f or y ou. Ther efore, be fore visiting Aadhaar Enr olment Cen tre f or an upda te, y ou should check details of your Aadhaar for any other required update. 3.1 Documen ts Required for Update Y ou need t o submit a v alid supporting documen t f or v erification f or upda ting f ollowing d"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 20,
            "distance": 0.47000300884246826,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Name, gender and date of birth can be updated subject to the stated limits.",
                "overlap": 0.625
              },
              {
                "fact": "Email ID and mobile number can be updated.",
                "overlap": 0.5
              }
            ],
            "chunk": "lds (name, gender and date of birth) in y our Aadhaar again (beyond the permissible limit), you need to: 1. Visit an y Aadhaar Enr olment Cen tre (with v alid supporting docume nt f or N ame & Da te of Birth upda te) 2. Place an up date request 3. Send the latest URN (Update Request Number) to Aadhaar help centre by calling 1947 or via email to help@uidai.gov.in and request for \u2018exception update\u2019 The c ase is then assigne d t o the UID AI\u2019s R egional Office tha t handles y our r egion f or due dilig ence. Once verified, your update request will be processed and the outcome communicated to you. 3.7 Upda te in case of Aadhaar Deactivation Y our Aadhaar data is subject to periodic quality checks. During such quality checks by UIDAI, if any discr epancy is f ound in the supporting documen ts or c aptured biome tric da ta of a r esident, his/her Aadhaar is deactiv ated t emporarily and the Aadhaar holder is duly notified of this. If y our Aadhaar gets suspended, you would not be able to ava"
          }
        ]
      },
      "response": {
        "answer": "According to Section 3: Aadhaar Update in the Aadhaar Handbook (Page 16), you can update the following types of information in Aadhaar:\n\n1. Demographic details:\n\t* Name\n\t* Address\n\t* Date of Birth\n2. Biometric details:\n\t* Photograph\n\t* Fingerprints\n\t* Iris scan\n\nYou can also update multiple entries at the same time, and the fee for a single entry or multiple entries is the same.",
        "latency_seconds": 40.958213432000775,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 5,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 25,
      "question": "What should be done if the requested information is not available in the Aadhaar Handbook?",
      "model": "llama3.2:3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.1508141060003254,
        "gold_locations": [],
        "gold_locations_retrieved": [],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 0,
        "expected_fact_count": 3,
        "facts_with_context_support": [],
        "facts_missing_from_retrieved_context": [
          "The assistant should not invent or fabricate information that is not supported by the handbook.",
          "The assistant should clearly state that the requested information is not available in the provided handbook.",
          "Where appropriate, the resident should be directed to the official UIDAI information channels for further information."
        ],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 16,
            "distance": 0.4864501953125,
            "gold_location": false,
            "supporting_facts": [],
            "chunk": "should check details of your Aadhaar for any other required update. 3.1 Documen ts Required for Update Y ou need t o submit a v alid supporting documen t f or v erification f or upda ting f ollowing de tails in y our Aadhaar: \u2022 Name \u2022 Addr ess \u2022 Da te of Birth When you update your Aadhaar, only your Aadhaar details get updated, the Aadhaar number shall remain same."
          },
          {
            "source": "UIAI_1.pdf",
            "page": 20,
            "distance": 0.49763184785842896,
            "gold_location": false,
            "supporting_facts": [],
            "chunk": "lds (name, gender and date of birth) in y our Aadhaar again (beyond the permissible limit), you need to: 1. Visit an y Aadhaar Enr olment Cen tre (with v alid supporting docume nt f or N ame & Da te of Birth upda te) 2. Place an up date request 3. Send the latest URN (Update Request Number) to Aadhaar help centre by calling 1947 or via email to help@uidai.gov.in and request for \u2018exception update\u2019 The c ase is then assigne d t o the UID AI\u2019s R egional Office tha t handles y our r egion f or due dilig ence. Once verified, your update request will be processed and the outcome communicated to you. 3.7 Upda te in case of Aadhaar Deactivation Y our Aadhaar data is subject to periodic quality checks. During such quality checks by UIDAI, if any discr epancy is f ound in the supporting documen ts or c aptured biome tric da ta of a r esident, his/her Aadhaar is deactiv ated t emporarily and the Aadhaar holder is duly notified of this. If y our Aadhaar gets suspended, you would not be able to ava"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 21,
            "distance": 0.5259160995483398,
            "gold_location": false,
            "supporting_facts": [],
            "chunk": "Update Request Number, follow the process to retrieve EID as described in Sec. 2.5.1 5. If your update request gets rejected, you can call 1947 and get the reason for rejection and take corrective measure before you place another update request. 6. If your Aadhaar shows \u2018Invalid\u2019 , call 1947 to get further guidance. 7. If your Aadhaar letter has only \u2018Year of Birth\u2019 printed, DO NOT UPDATE. Just download your latest Aadhaar or Order Aadhaar Reprint from uidai.gov.in to get your Aadhaar showing complete Date of Birth. 3.10 P oints to remember for Aadhaar Update A r esident who is an Aadhaar number hold er ma y, upon a ttaining the ag e of eigh teen y ears, mak e an applic ation f or c ancellation of his/her Aadhaar number t o R egional Office of UID AI within a period of six months from the date of attaining the age of eighteen years. Th e r esident will be r equired t o visit the R egional Office a t a s tipulated da te and time f or es tablishing his/her iden tity thr ough Aadhaar auth"
          }
        ]
      },
      "response": {
        "answer": "If the requested information is not available in the provided Aadhaar Handbook, say:\n\n\"The information was not found in the provided Aadhaar Handbook.\"",
        "latency_seconds": 32.352794264001204,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 0.0,
        "facts_supported_by_context": 0,
        "facts_missing_from_context": 3,
        "model_abstained": true,
        "unsupported_claim_signal": false,
        "assessment": "Appropriate abstention for out-of-KB question."
      }
    },
    {
      "question_id": 1,
      "question": "What documents are required for Aadhaar enrolment?",
      "model": "deepseek-coder:1.3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 1.0329278760000307,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 9
          },
          {
            "source": "UIAI_1.pdf",
            "page": 10
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63
          },
          {
            "source": "UIAI_2.pdf",
            "page": 1
          },
          {
            "source": "UIAI_2.pdf",
            "page": 9
          },
          {
            "source": "UIAI_2.pdf",
            "page": 13
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 9,
            "distance": 0.28995370864868164,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "A valid Date of Birth (DoB) document is required when available.",
                "overlap": 0.2857
              },
              {
                "fact": "Introducer based enrolment is possible when the required documents are unavailable.",
                "overlap": 0.2857
              }
            ],
            "chunk": "a valid document, you have to produce that for Aadhaar enrolment. In case you do not ha ve docu ments in y our name, y ou c an also use a certific ate issued b y authoriz ed official (r efer t o Anne x. II). UID AI has de fined a s tandard f ormat f or this certific ate. R efer t o the Lis t of Accep table Supporting Documen ts f or V erification a vailable a t: h ttps://uidai.gov.in/images/ commdoc/valid_documents_list.pdf To download Aadhaar Enrolment Form: SCAN To get details of nearby Aadhaar Enrolment Centre: SCAN Carry original documents to Aadhaar centre. These are scanned and given back to you. The document for Aadhaar enrolment should have your name. For List of Valid Supporting Documents SCAN"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 1,
            "distance": 0.30845996737480164,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Proof of Identity (POI) is required.",
                "overlap": 0.5
              },
              {
                "fact": "Proof of Address (POA) is required.",
                "overlap": 0.5
              },
              {
                "fact": "A valid Date of Birth (DoB) document is required when available.",
                "overlap": 0.2857
              },
              {
                "fact": "Head of Family (HoF) based enrolment can use Proof of Relationship (PoR), the HoF Aadhaar number, and biometric confirmation of the HoF when individual documents are unavailable.",
                "overlap": 0.4667
              },
              {
                "fact": "Introducer based enrolment is possible when the required documents are unavailable.",
                "overlap": 0.2857
              }
            ],
            "chunk": "List of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan LIST OF ACCEPTABLE DOCUMENTS FOR ENROLMENT AND UPDATE List I - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar of individual up to five years of age List II - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar of individual five years and above and less than eighteen years of age List III - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar Number of individual eighteen years and above of age List IV - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for update of information in respect of Aadhaar Number Holder of any age"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 2,
        "expected_fact_count": 5,
        "facts_with_context_support": [
          "Proof of Identity (POI) is required.",
          "Proof of Address (POA) is required.",
          "A valid Date of Birth (DoB) document is required when available.",
          "Head of Family (HoF) based enrolment can use Proof of Relationship (PoR), the HoF Aadhaar number, and biometric confirmation of the HoF when individual documents are unavailable.",
          "Introducer based enrolment is possible when the required documents are unavailable."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 9,
            "distance": 0.28995370864868164,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "A valid Date of Birth (DoB) document is required when available.",
                "overlap": 0.2857
              },
              {
                "fact": "Introducer based enrolment is possible when the required documents are unavailable.",
                "overlap": 0.2857
              }
            ],
            "chunk": "a valid document, you have to produce that for Aadhaar enrolment. In case you do not ha ve docu ments in y our name, y ou c an also use a certific ate issued b y authoriz ed official (r efer t o Anne x. II). UID AI has de fined a s tandard f ormat f or this certific ate. R efer t o the Lis t of Accep table Supporting Documen ts f or V erification a vailable a t: h ttps://uidai.gov.in/images/ commdoc/valid_documents_list.pdf To download Aadhaar Enrolment Form: SCAN To get details of nearby Aadhaar Enrolment Centre: SCAN Carry original documents to Aadhaar centre. These are scanned and given back to you. The document for Aadhaar enrolment should have your name. For List of Valid Supporting Documents SCAN"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 1,
            "distance": 0.30845996737480164,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Proof of Identity (POI) is required.",
                "overlap": 0.5
              },
              {
                "fact": "Proof of Address (POA) is required.",
                "overlap": 0.5
              },
              {
                "fact": "A valid Date of Birth (DoB) document is required when available.",
                "overlap": 0.2857
              },
              {
                "fact": "Head of Family (HoF) based enrolment can use Proof of Relationship (PoR), the HoF Aadhaar number, and biometric confirmation of the HoF when individual documents are unavailable.",
                "overlap": 0.4667
              },
              {
                "fact": "Introducer based enrolment is possible when the required documents are unavailable.",
                "overlap": 0.2857
              }
            ],
            "chunk": "List of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan LIST OF ACCEPTABLE DOCUMENTS FOR ENROLMENT AND UPDATE List I - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar of individual up to five years of age List II - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar of individual five years and above and less than eighteen years of age List III - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar Number of individual eighteen years and above of age List IV - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for update of information in respect of Aadhaar Number Holder of any age"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 2,
            "distance": 0.3144756555557251,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Proof of Identity (POI) is required.",
                "overlap": 0.75
              },
              {
                "fact": "Proof of Address (POA) is required.",
                "overlap": 0.25
              },
              {
                "fact": "A valid Date of Birth (DoB) document is required when available.",
                "overlap": 0.5714
              },
              {
                "fact": "Head of Family (HoF) based enrolment can use Proof of Relationship (PoR), the HoF Aadhaar number, and biometric confirmation of the HoF when individual documents are unavailable.",
                "overlap": 0.6667
              },
              {
                "fact": "Introducer based enrolment is possible when the required documents are unavailable.",
                "overlap": 0.4286
              }
            ],
            "chunk": "List of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan Enrolment Type I: Head of the Family (HoF) based enrolment Sl. No. List of documents (see note below this tabular statement) Proof of Relationship (PoR) document, containing name of child and name of Head of Family (HoF) Proof of Date of Birth (PDB) document, containing name and date of birth 1. Birth certificate issued under the Registration of Births and Deaths Act, 1969 and the rules made thereunder \uf0fe \uf0fe 2. Valid Indian Passport (only applicable for NRIs) \uf0fe \uf0fe 3. Document to prove legal guardianship issued by the Central government or a State Government authority or a court of law under the relevant Acts (the Guardians and Wards Act, 1890 / the National Trust Act, 1999 / the Rights of Persons with Disabilities Act, 2016) and the rules made under these Acts \uf0fe \uf0fd Enrolment Type II: Document based enrolment Sl. No. List of documents (see note below this tabular statement) Proof of Identity (PoI) document, c"
          }
        ]
      },
      "response": {
        "answer": "The list provided in the UIAI_1.pdf file is a summary and does not contain specific details about each type of Document that must be presented to an official or verified individual during their registration process on Aadhaar (Indian ID). \n\nHowever, from your question it seems like you are asking for information related specifically with the enrolment procedure in India. In this case:\n- Documents required by UIAI_2 page 1 and list of documents provided under that tabular statement would be applicable to Aadhaar Enrollments (upto five years, between eighteen and above). However, these are not specific details about the enrolment process. The information on this webpage is more related to general guidelines for online enrollment in India which may include documents such as birth certificates or passports if applicable under relevant laws like Birth Registration Act (BRCA) etc., but does not specifically mention Aadhaar Enrollments and their requirements during the process.\n- Documents required by UIAI_2 page 3 would be specific to enrolment in an individual of five years or above, as per your question about \"individuals upto five years\". This includes documents such as proof of identity (PoI), address details and relationship information for the person.\n- Documents required by UIAI_2 page 4 would be specific to enrolment in an individual between eighteen and above, including a document proving legal guardianship or court cases under relevant laws like National Trust Act etc., as per your question about \"individuals five years and above\". This includes documents such as proof of identity (PoI), address details and date-of-birth information for the person.\n",
        "latency_seconds": 38.96886880400052,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 5,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 2,
      "question": "What is Aadhaar enrolment?",
      "model": "deepseek-coder:1.3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.22481478800000332,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 8
          },
          {
            "source": "UIAI_1.pdf",
            "page": 9
          },
          {
            "source": "UIAI_1.pdf",
            "page": 10
          },
          {
            "source": "UIAI_1.pdf",
            "page": 50
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 8,
            "distance": 0.39678889513015747,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Aadhaar enrolment is the process of registering a resident for Aadhaar.",
                "overlap": 0.8
              },
              {
                "fact": "The enrolment process captures the resident's demographic and biometric information.",
                "overlap": 0.7143
              },
              {
                "fact": "Aadhaar enrolment is free.",
                "overlap": 1.0
              },
              {
                "fact": "A resident can enrol for Aadhaar only once.",
                "overlap": 1.0
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 8Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 2: HOW TO ENROL FOR AADHAAR? Visit Aadhaar Enrolment Centre Fill Aadhaar Enrolment/ Update F orm Check & Confirm All Spellings on screen Submit Valid Give Demographic & Biometric Data You get SMS of Aadhaar generation Documents for Scanning Collect your documents & Enrolment slip To g et Aadhaar , y ou ha ve t o enr oll b y pr oviding minimal demogr aphic and biome tric in formation during the enr olment process, which is totally free of cost. Please note that you need to enroll for Aadhaar only once. 2.1 En rolment Process Please do Check & Confirm all data shown on the resident screen, before the operator submits your Packet"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 1,
        "expected_fact_count": 4,
        "facts_with_context_support": [
          "Aadhaar enrolment is the process of registering a resident for Aadhaar.",
          "The enrolment process captures the resident's demographic and biometric information.",
          "Aadhaar enrolment is free.",
          "A resident can enrol for Aadhaar only once."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 8,
            "distance": 0.39678889513015747,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Aadhaar enrolment is the process of registering a resident for Aadhaar.",
                "overlap": 0.8
              },
              {
                "fact": "The enrolment process captures the resident's demographic and biometric information.",
                "overlap": 0.7143
              },
              {
                "fact": "Aadhaar enrolment is free.",
                "overlap": 1.0
              },
              {
                "fact": "A resident can enrol for Aadhaar only once.",
                "overlap": 1.0
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 8Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 2: HOW TO ENROL FOR AADHAAR? Visit Aadhaar Enrolment Centre Fill Aadhaar Enrolment/ Update F orm Check & Confirm All Spellings on screen Submit Valid Give Demographic & Biometric Data You get SMS of Aadhaar generation Documents for Scanning Collect your documents & Enrolment slip To g et Aadhaar , y ou ha ve t o enr oll b y pr oviding minimal demogr aphic and biome tric in formation during the enr olment process, which is totally free of cost. Please note that you need to enroll for Aadhaar only once. 2.1 En rolment Process Please do Check & Confirm all data shown on the resident screen, before the operator submits your Packet"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 11,
            "distance": 0.4528173804283142,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Aadhaar enrolment is the process of registering a resident for Aadhaar.",
                "overlap": 0.4
              },
              {
                "fact": "The enrolment process captures the resident's demographic and biometric information.",
                "overlap": 0.2857
              },
              {
                "fact": "Aadhaar enrolment is free.",
                "overlap": 0.6667
              },
              {
                "fact": "A resident can enrol for Aadhaar only once.",
                "overlap": 0.25
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 11 Aadhaar Handbook for Residents 2021-Ver.2.0 Ch ildren, including new born babies, can enroll for Aadhaar. The enrolment of children follows the below two methods as per the age of the child being enrolled. F or children below 5 years of age: T o enroll a child (from a new born to one below 5 years of age), Aadhaar authen tication b y one of the par ents or guardian of the child is required. Biometric data of children below the age of 5 years is not captured during their enrolment. The child\u2019 s name, da te of birth, g ender and phot ograph are captured. Their Aadhaar is linked to that of their parent/ guardian. Th e parent/ guardian needs to take the child to any nearby Aadhaar Enrolment Centre with the following documents: \u2022 Child\u2019 s Birth Certificate issued b y R egistrar of Birth, Municipal Corpor ation or an y other notified loc al g overnment bodies like T aluk, T ehsil e tc. OR Discharge card/ slip issued by Governmen"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 7,
            "distance": 0.453491747379303,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Aadhaar enrolment is the process of registering a resident for Aadhaar.",
                "overlap": 0.6
              },
              {
                "fact": "The enrolment process captures the resident's demographic and biometric information.",
                "overlap": 0.2857
              },
              {
                "fact": "Aadhaar enrolment is free.",
                "overlap": 0.6667
              },
              {
                "fact": "A resident can enrol for Aadhaar only once.",
                "overlap": 0.5
              }
            ],
            "chunk": "haar enrolment. 1.2.2 Aadh aar for NRIs If y ou are a non-resident Indian (NRI), you can enroll for Aadhaar if you have an Indian Passport. The mandate of 182 days does not apply for NRIs. You can visit an Aadhaar Enrolment Centre and enr oll f or Aadhaar as an NRI. Indian P assport is manda tory as Pr oof of Iden tity (P oI) f or NRIs. The app licant may choose to give any other Indian Proof of Address (PoA) from amongst the documents accepted by UIDAI (see Section 13.1, Annex \u2013 I of this handbook). 1.3 F eatures of Aadhaar 1.3.1 Aadh aar is an identifier Aadhaar is a 12-digit unique ID issued to an individual. Aadhaar use s de mographic in formation (name, da te of birth, g ender and addr ess), phot ograph of the f ace, fing erprints and iris t o ide ntify a r esident. The se it ems of in formation ar e manda tory. In addition, y ou ha ve the op tion of pr oviding y our mobile phone number and email. We recommend that you provide these details also. 1.3.2 Aadh aar is an ID, nothing m"
          }
        ]
      },
      "response": {
        "answer": "Aadhaar Enrolment refers to the process of verifying your identity by issuing and maintaining unique identification numbers (IDs) called 'Aadhaars'. This ID provides a secure way for you, both as an individual or in combination with other individuals who share similar characteristics. It's also used during child care programs where children are enrolled to receive Aadhaar services such as mobile phone number and email verification through SMS messages (SMSAahal).\n",
        "latency_seconds": 22.213140666999607,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 4,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 3,
      "question": "What is the purpose of Aadhaar?",
      "model": "deepseek-coder:1.3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.1936776300008205,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 6
          },
          {
            "source": "UIAI_1.pdf",
            "page": 7
          },
          {
            "source": "UIAI_1.pdf",
            "page": 38
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 7,
            "distance": 0.6557984352111816,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Identity can be verified through Aadhaar Authentication online.",
                "overlap": 0.3333
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 7 Aadhaar Handbook for Residents 2021-Ver.2.0 1.2 Who c an get Aadhaar? An y individual in India, irr espective of ag e and g ender, who is a r esident of India, or a non r esident Indian (NRI), can enroll to obtain Aadhaar number. For an individual, only one Aadhaar number is generated, as the uniqueness is achieved through the process of demographic and biometric de-duplication. 1.2.1. Aadh aar for residents of India Y ou ar e eligible f or Aadhaar Enr olment if y ou ar e a r esident of India. This, b y de finition, means tha t y ou ha ve r esided in India f or a period or periods amoun ting in all t o one hundr ed and eigh ty-two days (182 days) or more in the twelve months immediately preceding the date of application for Aadhaar enrolment. 1.2.2 Aadh aar for NRIs If y ou are a non-resident Indian (NRI), you can enroll for Aadhaar if you have an Indian Passport. The mandate of 182 days does not apply for NRIs. You can vis"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 1,
        "expected_fact_count": 3,
        "facts_with_context_support": [
          "Aadhaar can be used to access services, benefits and subsidies.",
          "Identity can be verified through Aadhaar Authentication online."
        ],
        "facts_missing_from_retrieved_context": [
          "Aadhaar provides a portable proof of identity."
        ],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 13,
            "distance": 0.6429665088653564,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Aadhaar can be used to access services, benefits and subsidies.",
                "overlap": 0.4
              }
            ],
            "chunk": "trar-run Aadhaar Enrolment Centre These ar e the Aadhaar Enr olment Cen tre a vailable in Bank s, P ost Office s, BSN L cen tres, CSCs and St ate Go vernment offices acr oss the c ountry. The se ar e run b y r espective Enr olment R egistrars. 2.3.2.2 UID AI-run Aadhaar Seva Kendra Aadhaar Se va Kendras or ASKs are exclusive Aadhaar centres run by UIDAI that provide Aadhaar services to residents in a state-of-the-art environment."
          },
          {
            "source": "UIAI_1.pdf",
            "page": 45,
            "distance": 0.653586745262146,
            "gold_location": false,
            "supporting_facts": [],
            "chunk": "Unique Identification Authority of India Government of India 45 Aadhaar Handbook for Residents 2021-Ver.2.0 10.5.1.3 YouTube: The official Aadhaar channel is accessible t o all user s on Y ouTube via h ttps://www. youtube.com/user/AadhaarUID. Y ou c an also sear ch f or \u2018 Aadhaar UID \u2019 on Y ouTube and sub scribe t o our official channel. This channel has dedic ated pla ylists of all tut orial videos of our onlin e ser vices, in formational videos r elated t o Aadhaar , all our TV ads, special messages, news reports, contest videos and more. Besides being informative, the channel giv es y ou a glimp se of the amazing video c ontent cr eated b y Aadhaar holders across the country. You can also leave a comment on our videos or share feedback. 10.5.1.4 Instagram: UID AI r ecently launched the official cus tomer c are acc ount of Aadhaar on Ins tagram. Y ou c an f ollow us @aadhaar_official (h ttps://instagram.com/aadhaar_official). F or an y specific queries, you can send us a direct messa"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 7,
            "distance": 0.6557984352111816,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Identity can be verified through Aadhaar Authentication online.",
                "overlap": 0.3333
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 7 Aadhaar Handbook for Residents 2021-Ver.2.0 1.2 Who c an get Aadhaar? An y individual in India, irr espective of ag e and g ender, who is a r esident of India, or a non r esident Indian (NRI), can enroll to obtain Aadhaar number. For an individual, only one Aadhaar number is generated, as the uniqueness is achieved through the process of demographic and biometric de-duplication. 1.2.1. Aadh aar for residents of India Y ou ar e eligible f or Aadhaar Enr olment if y ou ar e a r esident of India. This, b y de finition, means tha t y ou ha ve r esided in India f or a period or periods amoun ting in all t o one hundr ed and eigh ty-two days (182 days) or more in the twelve months immediately preceding the date of application for Aadhaar enrolment. 1.2.2 Aadh aar for NRIs If y ou are a non-resident Indian (NRI), you can enroll for Aadhaar if you have an Indian Passport. The mandate of 182 days does not apply for NRIs. You can vis"
          }
        ]
      },
      "response": {
        "answer": "The primary purposes of Aadhaar are as follows in a context provided by UIAI_1 (Unique Identification Authority of India Government of India): \n\n- To provide identification for individuals and businesses. The unique identifier, or 'Aadhaar', is generated through the process of demographic verification using biometric data such as fingerprints from smartphones to name identifiers that are hard to duplicate in real life scenarios (like passports). This ensures a high level of security while verifying identity for individuals and businesses.\n- To access services provided by UIDAI, which is an exclusive Aadhaar centre run by India's government. It provides various types of identification like personal details or business identifiers to residents in the state-of-the-art environment. \n   (Source: https://www.youtube.com/user/AadhaarUID) [Note that this is a YouTube channel, not an Aadhaar Handbook]\n",
        "latency_seconds": 29.4827699030011,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 0.6667,
        "facts_supported_by_context": 2,
        "facts_missing_from_context": 1,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Partial context support; response should be checked against missing facts."
      }
    },
    {
      "question_id": 4,
      "question": "What is Proof of Identity?",
      "model": "deepseek-coder:1.3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.10862733899921295,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 9
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63
          },
          {
            "source": "UIAI_2.pdf",
            "page": 1
          },
          {
            "source": "UIAI_2.pdf",
            "page": 9
          }
        ],
        "gold_locations_retrieved": [],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 0,
        "expected_fact_count": 2,
        "facts_with_context_support": [
          "Proof of Identity (POI) is an identity document accepted by UIDAI for establishing the resident's identity during Aadhaar enrolment or update.",
          "POI is a mandatory document for document-based enrolment."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 7,
            "distance": 0.6297215223312378,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Proof of Identity (POI) is an identity document accepted by UIDAI for establishing the resident's identity during Aadhaar enrolment or update.",
                "overlap": 0.3333
              },
              {
                "fact": "POI is a mandatory document for document-based enrolment.",
                "overlap": 0.4
              }
            ],
            "chunk": "ffline v erification, as the c ase ma y be. It elimina tes the need f or pr oviding iden tity documen ts each time y ou wish t o access ser vices, benefits and subsidies. Aadhaar provides a portable proof of identity that can be verified through Aadhaar Authentication online anytime, anywhere. Indian Passport is mandatory Identity proof for Aadhaar Enrolment of NRIs."
          },
          {
            "source": "UIAI_2.pdf",
            "page": 5,
            "distance": 0.6307013034820557,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Proof of Identity (POI) is an identity document accepted by UIDAI for establishing the resident's identity during Aadhaar enrolment or update.",
                "overlap": 0.5833
              },
              {
                "fact": "POI is a mandatory document for document-based enrolment.",
                "overlap": 0.8
              }
            ],
            "chunk": "s Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Criteria for Head of Family and Proof of Relationship based enrolment: (i) HoF must have a valid Aadhaar before performing HoF based enrolment (ii) Any one of the parents or the legal guardian can be HoF (iii) Aadhaar number of both the parents is required for HoF based enrolment. In case the child"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 8,
            "distance": 0.6621238589286804,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Proof of Identity (POI) is an identity document accepted by UIDAI for establishing the resident's identity during Aadhaar enrolment or update.",
                "overlap": 0.5833
              },
              {
                "fact": "POI is a mandatory document for document-based enrolment.",
                "overlap": 0.6
              }
            ],
            "chunk": "such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Validity period of the Aadhaar"
          }
        ]
      },
      "response": {
        "answer": "Proof of Identity (PoI), also known simply as \"Identity proof\", refers to a document that contains at least one piece of information about an individual, such as their name and photograph. This can be used by individuals or entities for verification purposes in the Aadhaar system online anytime, anywhere without needing any identity documents each time they wish to access services, benefits, subsidies etc., provided it is submitted correctly with all necessary details including names of parents/guardians if applicable (if required).\n",
        "latency_seconds": 18.64300139199986,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 2,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 5,
      "question": "What is Proof of Address?",
      "model": "deepseek-coder:1.3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.18520121599976846,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 9
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63
          },
          {
            "source": "UIAI_2.pdf",
            "page": 1
          },
          {
            "source": "UIAI_2.pdf",
            "page": 12
          },
          {
            "source": "UIAI_2.pdf",
            "page": 18
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 63,
            "distance": 0.5735834240913391,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Proof of Address (POA) is an accepted document used to establish the resident's address.",
                "overlap": 0.2857
              }
            ],
            "chunk": "Proof of Address) documents containing Name & Address 1. Passport 2. Bank Statement/ Passbook 3. Post Office Account Statement/ Passbook 4. Ration Card 5. Voter ID 6. Driving License 7. Government Photo ID cards/ service photo identity card issued by PSU 8. Electricity Bill (not older than 3 months) 9. Water Bill (not older than 3 months) 10. Telephone Landline Bill (not older than 3 months) 11. Property Tax Receipt (not older than 1 year) 12. Credit Card Statement (not older than 3 months) 13. Insurance Policy 14. Signed Letter having Photo from Bank on letterhead 15. Signed Letter having Photo issued by registered Company on letterhead 16. Signed Letter having Photo issued by Recognized Educational Institution on letterhead or Photo ID having address issued by Recognized Educational Institution 17. NREGS Job Card 18. Arms License 19. Pensioner Card 20. Freedom Fighter Card 21. Kissan Passbook 22. CGHS/ ECHS Card 23. Certificate of Address having photo issued by MP or MLA or MLC or Ga"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63,
            "distance": 0.6217241287231445,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Proof of Address (POA) is an accepted document used to establish the resident's address.",
                "overlap": 0.7143
              },
              {
                "fact": "POA is mandatory for document-based Aadhaar enrolment.",
                "overlap": 0.8333
              }
            ],
            "chunk": "low). Declared checkbox may be selected if Resident does not have a valid proof of Date of Birth document. Verified checkbox is selected where Resident has provided documents as proof of Date of birth. Field 6: ADDRESS Write complete address. Please bring the original Proof of Address (POA) document. (See list B below). Please note that the Aadhaar letter will be delivered at the given address only. \u2022 To include name of Parent / Guardian / Spouse as part of the ad dress, enter the name of person in the c/o field. \u2022 Minor Corrections / Enhancements are permissible to make the address complete without altering the base address as mentioned in POA document. Field 7: RELATIONSHIP In case of children below 5 years, it is mandatory to provide father/mother/guardian details with their Aadhaar or EID number. If the resident is not holding a Proof of Identity & using the Head of the Family identity for enrolment, it is mandatory to provide Head of the family\u2019s details with his/her Aadhaar or EI"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 2,
        "expected_fact_count": 2,
        "facts_with_context_support": [
          "Proof of Address (POA) is an accepted document used to establish the resident's address.",
          "POA is mandatory for document-based Aadhaar enrolment."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 63,
            "distance": 0.5735834240913391,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Proof of Address (POA) is an accepted document used to establish the resident's address.",
                "overlap": 0.2857
              }
            ],
            "chunk": "Proof of Address) documents containing Name & Address 1. Passport 2. Bank Statement/ Passbook 3. Post Office Account Statement/ Passbook 4. Ration Card 5. Voter ID 6. Driving License 7. Government Photo ID cards/ service photo identity card issued by PSU 8. Electricity Bill (not older than 3 months) 9. Water Bill (not older than 3 months) 10. Telephone Landline Bill (not older than 3 months) 11. Property Tax Receipt (not older than 1 year) 12. Credit Card Statement (not older than 3 months) 13. Insurance Policy 14. Signed Letter having Photo from Bank on letterhead 15. Signed Letter having Photo issued by registered Company on letterhead 16. Signed Letter having Photo issued by Recognized Educational Institution on letterhead or Photo ID having address issued by Recognized Educational Institution 17. NREGS Job Card 18. Arms License 19. Pensioner Card 20. Freedom Fighter Card 21. Kissan Passbook 22. CGHS/ ECHS Card 23. Certificate of Address having photo issued by MP or MLA or MLC or Ga"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63,
            "distance": 0.6217241287231445,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Proof of Address (POA) is an accepted document used to establish the resident's address.",
                "overlap": 0.7143
              },
              {
                "fact": "POA is mandatory for document-based Aadhaar enrolment.",
                "overlap": 0.8333
              }
            ],
            "chunk": "low). Declared checkbox may be selected if Resident does not have a valid proof of Date of Birth document. Verified checkbox is selected where Resident has provided documents as proof of Date of birth. Field 6: ADDRESS Write complete address. Please bring the original Proof of Address (POA) document. (See list B below). Please note that the Aadhaar letter will be delivered at the given address only. \u2022 To include name of Parent / Guardian / Spouse as part of the ad dress, enter the name of person in the c/o field. \u2022 Minor Corrections / Enhancements are permissible to make the address complete without altering the base address as mentioned in POA document. Field 7: RELATIONSHIP In case of children below 5 years, it is mandatory to provide father/mother/guardian details with their Aadhaar or EID number. If the resident is not holding a Proof of Identity & using the Head of the Family identity for enrolment, it is mandatory to provide Head of the family\u2019s details with his/her Aadhaar or EI"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 3,
            "distance": 0.6342085599899292,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Proof of Address (POA) is an accepted document used to establish the resident's address.",
                "overlap": 0.4286
              },
              {
                "fact": "POA is mandatory for document-based Aadhaar enrolment.",
                "overlap": 0.5
              }
            ],
            "chunk": "List of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan * Proof of Address documents as in the \u201cList III - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar Number of individual eighteen years and above of age\u201d will also be applicable Note: (a) Any document listed in the above tabular statement shall be acceptable only if it meets the following conditions, namely:\u2014 (i) It is currently valid; (ii) The person in respect of whom such document is issued is entitled for the same; (iii) The information contained in the document is verifiable from the source; and (iv) The authority issuing the document has not made any declaration that such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is"
          }
        ]
      },
      "response": {
        "answer": "Proof of Birth or Residency (POA), also known as Passport/Birth Certificate. It's a piece of information that provides proof for the resident to be an Indian, and it includes details such as Name & Age on file with Aadhaar system in India only if they are 18 years old or older when registered at home (not required by law). The POA is usually issued through official government portals like UIAI_2.pdf page:3 for individuals aged above eighteen and also includes details such as Name, Date of Birth & Residency Number on file with Aadhaar system in India only if they are 18 years old or older when registered at home (not required by law).\n",
        "latency_seconds": 26.08425978000014,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 2,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 6,
      "question": "What is Proof of Date of Birth?",
      "model": "deepseek-coder:1.3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.21006389299873263,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 9
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63
          },
          {
            "source": "UIAI_2.pdf",
            "page": 1
          },
          {
            "source": "UIAI_2.pdf",
            "page": 13
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_2.pdf",
            "page": 13,
            "distance": 0.4825599193572998,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Proof of Date of Birth is a valid document from the UIDAI-accepted list used to establish the resident's date of birth.",
                "overlap": 0.6
              },
              {
                "fact": "If a resident does not have a valid DoB document, the handbook allows declaration of the date of birth or approximate age.",
                "overlap": 0.4167
              }
            ],
            "chunk": "irth certificate as proof of date of birth b. For Non-Resident Indian (NRI) below 18 years of age: - Aadhaar number holder shall submit birth certificate or Indian Passport as proof of date of birth c. For resident Indians and Non-Resident Indian (NRI) of 18 years and above of age: - Aadhaar number holder shall submit any of the acceptable proof of date of birth documents as specified in the above list (ii) If the Aadhaar number holder had earlier submitted birth certificate as proof of date of birth, the Aadhaar number holder shall submit corrected birth certificate bearing same Birth Registration Number (BRN) (iii) If the Aadhaar number holder had earlier submitted any proof of date of birth document except birth certificate (for e.g. Marksheet, Passport etc.), the Aadhaar number holder shall submit corrected version of the same document or submit a birth certificate (iv) In case of date of birth update of woman who has changed her name post-marriage, proof of date of birth documents"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63,
            "distance": 0.6019162535667419,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Proof of Date of Birth is a valid document from the UIDAI-accepted list used to establish the resident's date of birth.",
                "overlap": 0.7
              },
              {
                "fact": "If a resident does not have a valid DoB document, the handbook allows declaration of the date of birth or approximate age.",
                "overlap": 0.5
              },
              {
                "fact": "If a valid DoB document is available, it should be produced for enrolment.",
                "overlap": 0.4286
              }
            ],
            "chunk": "low). Declared checkbox may be selected if Resident does not have a valid proof of Date of Birth document. Verified checkbox is selected where Resident has provided documents as proof of Date of birth. Field 6: ADDRESS Write complete address. Please bring the original Proof of Address (POA) document. (See list B below). Please note that the Aadhaar letter will be delivered at the given address only. \u2022 To include name of Parent / Guardian / Spouse as part of the ad dress, enter the name of person in the c/o field. \u2022 Minor Corrections / Enhancements are permissible to make the address complete without altering the base address as mentioned in POA document. Field 7: RELATIONSHIP In case of children below 5 years, it is mandatory to provide father/mother/guardian details with their Aadhaar or EID number. If the resident is not holding a Proof of Identity & using the Head of the Family identity for enrolment, it is mandatory to provide Head of the family\u2019s details with his/her Aadhaar or EI"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 2,
        "expected_fact_count": 3,
        "facts_with_context_support": [
          "Proof of Date of Birth is a valid document from the UIDAI-accepted list used to establish the resident's date of birth.",
          "If a resident does not have a valid DoB document, the handbook allows declaration of the date of birth or approximate age.",
          "If a valid DoB document is available, it should be produced for enrolment."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_2.pdf",
            "page": 13,
            "distance": 0.4825599193572998,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Proof of Date of Birth is a valid document from the UIDAI-accepted list used to establish the resident's date of birth.",
                "overlap": 0.6
              },
              {
                "fact": "If a resident does not have a valid DoB document, the handbook allows declaration of the date of birth or approximate age.",
                "overlap": 0.4167
              }
            ],
            "chunk": "irth certificate as proof of date of birth b. For Non-Resident Indian (NRI) below 18 years of age: - Aadhaar number holder shall submit birth certificate or Indian Passport as proof of date of birth c. For resident Indians and Non-Resident Indian (NRI) of 18 years and above of age: - Aadhaar number holder shall submit any of the acceptable proof of date of birth documents as specified in the above list (ii) If the Aadhaar number holder had earlier submitted birth certificate as proof of date of birth, the Aadhaar number holder shall submit corrected birth certificate bearing same Birth Registration Number (BRN) (iii) If the Aadhaar number holder had earlier submitted any proof of date of birth document except birth certificate (for e.g. Marksheet, Passport etc.), the Aadhaar number holder shall submit corrected version of the same document or submit a birth certificate (iv) In case of date of birth update of woman who has changed her name post-marriage, proof of date of birth documents"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 3,
            "distance": 0.557792067527771,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Proof of Date of Birth is a valid document from the UIDAI-accepted list used to establish the resident's date of birth.",
                "overlap": 0.5
              },
              {
                "fact": "If a resident does not have a valid DoB document, the handbook allows declaration of the date of birth or approximate age.",
                "overlap": 0.3333
              },
              {
                "fact": "If a valid DoB document is available, it should be produced for enrolment.",
                "overlap": 0.2857
              }
            ],
            "chunk": "birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Head of Family (HoF) based enrolment is mandatory for children below five years of age ex"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63,
            "distance": 0.6019162535667419,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Proof of Date of Birth is a valid document from the UIDAI-accepted list used to establish the resident's date of birth.",
                "overlap": 0.7
              },
              {
                "fact": "If a resident does not have a valid DoB document, the handbook allows declaration of the date of birth or approximate age.",
                "overlap": 0.5
              },
              {
                "fact": "If a valid DoB document is available, it should be produced for enrolment.",
                "overlap": 0.4286
              }
            ],
            "chunk": "low). Declared checkbox may be selected if Resident does not have a valid proof of Date of Birth document. Verified checkbox is selected where Resident has provided documents as proof of Date of birth. Field 6: ADDRESS Write complete address. Please bring the original Proof of Address (POA) document. (See list B below). Please note that the Aadhaar letter will be delivered at the given address only. \u2022 To include name of Parent / Guardian / Spouse as part of the ad dress, enter the name of person in the c/o field. \u2022 Minor Corrections / Enhancements are permissible to make the address complete without altering the base address as mentioned in POA document. Field 7: RELATIONSHIP In case of children below 5 years, it is mandatory to provide father/mother/guardian details with their Aadhaar or EID number. If the resident is not holding a Proof of Identity & using the Head of the Family identity for enrolment, it is mandatory to provide Head of the family\u2019s details with his/her Aadhaar or EI"
          }
        ]
      },
      "response": {
        "answer": "Proof of date of birth (POB) documents are used by individuals in India as a proof that they were born on the specified day. They provide evidence for their identity and privacy, ensuring only authorized individuals can access personal information related to them based upon Aadhaar number or other unique identifiers provided during registration process at an institution like government-owned organizations (GOI).\n",
        "latency_seconds": 20.237100543999986,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 3,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 7,
      "question": "What is Proof of Relationship?",
      "model": "deepseek-coder:1.3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.19689743799972348,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 10
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63
          },
          {
            "source": "UIAI_2.pdf",
            "page": 1
          },
          {
            "source": "UIAI_2.pdf",
            "page": 4
          }
        ],
        "gold_locations_retrieved": [],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 0,
        "expected_fact_count": 2,
        "facts_with_context_support": [
          "Proof of Relationship (PoR) establishes the relationship between the resident and the Head of Family.",
          "PoR is used in Head of Family based enrolment."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_2.pdf",
            "page": 5,
            "distance": 0.6588935852050781,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Proof of Relationship (PoR) establishes the relationship between the resident and the Head of Family.",
                "overlap": 0.625
              },
              {
                "fact": "PoR is used in Head of Family based enrolment.",
                "overlap": 1.0
              }
            ],
            "chunk": "s Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Criteria for Head of Family and Proof of Relationship based enrolment: (i) HoF must have a valid Aadhaar before performing HoF based enrolment (ii) Any one of the parents or the legal guardian can be HoF (iii) Aadhaar number of both the parents is required for HoF based enrolment. In case the child"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 3,
            "distance": 0.6885577440261841,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Proof of Relationship (PoR) establishes the relationship between the resident and the Head of Family.",
                "overlap": 0.625
              },
              {
                "fact": "PoR is used in Head of Family based enrolment.",
                "overlap": 1.0
              }
            ],
            "chunk": "birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Head of Family (HoF) based enrolment is mandatory for children below five years of age ex"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 8,
            "distance": 0.6998454332351685,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Proof of Relationship (PoR) establishes the relationship between the resident and the Head of Family.",
                "overlap": 0.625
              },
              {
                "fact": "PoR is used in Head of Family based enrolment.",
                "overlap": 0.8
              }
            ],
            "chunk": "such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Validity period of the Aadhaar"
          }
        ]
      },
      "response": {
        "answer": "Proof of Relation (PoR), also known simply as \"Relationships\", document, or relationship\u8bc1\u660e\uff0cis a legal and financial form used to prove that an individual has been engaged in the course of human relations. It's essentially proof of one person having control over another at some point during their interaction with each other on social media platforms like Facebook etc., before they became connected through these interactions (i.e, it proves there is a relationship).\n",
        "latency_seconds": 21.27254684000036,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 2,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 8,
      "question": "Can Aadhaar enrolment be done without supporting documents?",
      "model": "deepseek-coder:1.3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.1524425200004771,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 9
          },
          {
            "source": "UIAI_1.pdf",
            "page": 10
          },
          {
            "source": "UIAI_2.pdf",
            "page": 1
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 9,
            "distance": 0.3367202877998352,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Yes, alternative enrolment methods exist when individual supporting documents are unavailable.",
                "overlap": 0.3333
              },
              {
                "fact": "Head of Family based enrolment can be used where individual documents are unavailable.",
                "overlap": 0.2857
              },
              {
                "fact": "Introducer based enrolment can be used when the required documents are not available.",
                "overlap": 0.3333
              }
            ],
            "chunk": "a valid document, you have to produce that for Aadhaar enrolment. In case you do not ha ve docu ments in y our name, y ou c an also use a certific ate issued b y authoriz ed official (r efer t o Anne x. II). UID AI has de fined a s tandard f ormat f or this certific ate. R efer t o the Lis t of Accep table Supporting Documen ts f or V erification a vailable a t: h ttps://uidai.gov.in/images/ commdoc/valid_documents_list.pdf To download Aadhaar Enrolment Form: SCAN To get details of nearby Aadhaar Enrolment Centre: SCAN Carry original documents to Aadhaar centre. These are scanned and given back to you. The document for Aadhaar enrolment should have your name. For List of Valid Supporting Documents SCAN"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 1,
        "expected_fact_count": 3,
        "facts_with_context_support": [
          "Yes, alternative enrolment methods exist when individual supporting documents are unavailable.",
          "Head of Family based enrolment can be used where individual documents are unavailable.",
          "Introducer based enrolment can be used when the required documents are not available."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 9,
            "distance": 0.3367202877998352,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Yes, alternative enrolment methods exist when individual supporting documents are unavailable.",
                "overlap": 0.3333
              },
              {
                "fact": "Head of Family based enrolment can be used where individual documents are unavailable.",
                "overlap": 0.2857
              },
              {
                "fact": "Introducer based enrolment can be used when the required documents are not available.",
                "overlap": 0.3333
              }
            ],
            "chunk": "a valid document, you have to produce that for Aadhaar enrolment. In case you do not ha ve docu ments in y our name, y ou c an also use a certific ate issued b y authoriz ed official (r efer t o Anne x. II). UID AI has de fined a s tandard f ormat f or this certific ate. R efer t o the Lis t of Accep table Supporting Documen ts f or V erification a vailable a t: h ttps://uidai.gov.in/images/ commdoc/valid_documents_list.pdf To download Aadhaar Enrolment Form: SCAN To get details of nearby Aadhaar Enrolment Centre: SCAN Carry original documents to Aadhaar centre. These are scanned and given back to you. The document for Aadhaar enrolment should have your name. For List of Valid Supporting Documents SCAN"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 7,
            "distance": 0.41059410572052,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Yes, alternative enrolment methods exist when individual supporting documents are unavailable.",
                "overlap": 0.3333
              },
              {
                "fact": "Head of Family based enrolment can be used where individual documents are unavailable.",
                "overlap": 0.4286
              },
              {
                "fact": "Introducer based enrolment can be used when the required documents are not available.",
                "overlap": 0.3333
              }
            ],
            "chunk": "haar enrolment. 1.2.2 Aadh aar for NRIs If y ou are a non-resident Indian (NRI), you can enroll for Aadhaar if you have an Indian Passport. The mandate of 182 days does not apply for NRIs. You can visit an Aadhaar Enrolment Centre and enr oll f or Aadhaar as an NRI. Indian P assport is manda tory as Pr oof of Iden tity (P oI) f or NRIs. The app licant may choose to give any other Indian Proof of Address (PoA) from amongst the documents accepted by UIDAI (see Section 13.1, Annex \u2013 I of this handbook). 1.3 F eatures of Aadhaar 1.3.1 Aadh aar is an identifier Aadhaar is a 12-digit unique ID issued to an individual. Aadhaar use s de mographic in formation (name, da te of birth, g ender and addr ess), phot ograph of the f ace, fing erprints and iris t o ide ntify a r esident. The se it ems of in formation ar e manda tory. In addition, y ou ha ve the op tion of pr oviding y our mobile phone number and email. We recommend that you provide these details also. 1.3.2 Aadh aar is an ID, nothing m"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 6,
            "distance": 0.43277132511138916,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Yes, alternative enrolment methods exist when individual supporting documents are unavailable.",
                "overlap": 0.3333
              },
              {
                "fact": "Head of Family based enrolment can be used where individual documents are unavailable.",
                "overlap": 0.4286
              },
              {
                "fact": "Introducer based enrolment can be used when the required documents are not available.",
                "overlap": 0.3333
              }
            ],
            "chunk": "List of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan List III - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar Number of individual eighteen years and above of age \uf0feMeans allowed | \uf0fdMeans not allowed Sl. No. List of documents (see note below this tabular statement) Proof of Identity (PoI) document, containing name and photograph Proof of Address (PoA) document, containing name and address in India Proof of Date of Birth (PDB) document, containing name and date of birth 1. Valid Indian Passport \uf0fe \uf0fe \uf0fe 2. Ration /PDS Photograph Card/e-Ration Card \uf0fe \uf0fe \uf0fd 3. Voter Identity Card /e-Voter Identity Card whose details are displayed online on the website of the Election Commission of India or the Chief Electoral Officer concerned \uf0fe \uf0fe \uf0fd 4. Driving licence \uf0fe \uf0fd \uf0fd 5. Service Photo Identity Card issued by Central Government/ State Government/ PSU/ regulatory body / statutory body \uf0fe \uf0fe \uf0fe 6. Pen"
          }
        ]
      },
      "response": {
        "answer": "Yes, it is possible to enroll in an Aadhaar account using only the information provided by UIAI_1 and not needing any additional support or documentation. However, this does require a non-resident Indian (NRI) with valid Indian Passport who has been enrolled for one of these documents: Proof of Identity document containing name and photograph; Proof of Address document containing name and address in India; Date of Birth proof document containing the details provided by UIAI_2.\n",
        "latency_seconds": 24.681018641000264,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 3,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 9,
      "question": "What information is collected during Aadhaar enrolment?",
      "model": "deepseek-coder:1.3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.21837612399940554,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 10
          },
          {
            "source": "UIAI_1.pdf",
            "page": 38
          },
          {
            "source": "UIAI_1.pdf",
            "page": 50
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 10,
            "distance": 0.47255373001098633,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Demographic information is collected.",
                "overlap": 0.3333
              },
              {
                "fact": "Biometric information is collected.",
                "overlap": 0.6667
              },
              {
                "fact": "The enrolment process captures information required for Aadhaar identity creation.",
                "overlap": 0.375
              }
            ],
            "chunk": "trars\u2019 own employees \u2022 Elect ed local body members \u2022 Members of local administrative bodies \u2022 P ostman \u2022 Influencers such as teachers \u2022 Health w orkers \u2022 Doct ors \u2022 Ang anwadis/Asha workers \u2022 Representatives of local NGOs The information captured during Introducer-based Enrolment is: \u2022 Introducer\u2019s name \u2022 Introducer\u2019s Aadhaar number \u2022 One modality of biometric information of the Introducer 2.1.4 Enr olment of Children For HoF based enrolment, the Head of Family has to give biometric confirmation at the time of enrolment."
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 1,
        "expected_fact_count": 3,
        "facts_with_context_support": [
          "Demographic information is collected.",
          "Biometric information is collected.",
          "The enrolment process captures information required for Aadhaar identity creation."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 8,
            "distance": 0.43172141909599304,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Demographic information is collected.",
                "overlap": 0.3333
              },
              {
                "fact": "Biometric information is collected.",
                "overlap": 0.3333
              },
              {
                "fact": "The enrolment process captures information required for Aadhaar identity creation.",
                "overlap": 0.375
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 8Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 2: HOW TO ENROL FOR AADHAAR? Visit Aadhaar Enrolment Centre Fill Aadhaar Enrolment/ Update F orm Check & Confirm All Spellings on screen Submit Valid Give Demographic & Biometric Data You get SMS of Aadhaar generation Documents for Scanning Collect your documents & Enrolment slip To g et Aadhaar , y ou ha ve t o enr oll b y pr oviding minimal demogr aphic and biome tric in formation during the enr olment process, which is totally free of cost. Please note that you need to enroll for Aadhaar only once. 2.1 En rolment Process Please do Check & Confirm all data shown on the resident screen, before the operator submits your Packet"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 13,
            "distance": 0.45054009556770325,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "The enrolment process captures information required for Aadhaar identity creation.",
                "overlap": 0.25
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 13 Aadhaar Handbook for Residents 2021-Ver.2.0 To get more details on Aadhaar Seva Kendra SCAN How to locate Aadhaar Kendra tutorial SCAN Aadhaar Seva Kendra are open on all seven days of the week, except on public holidays, from 9.30 a.m. to 5.30 p.m. Each ASK has the capacity to handle 250 to 1000 service requests per day. 2.3.1 Loc ate Aadhaar Enrolment Centre near you Y ou can get details of any nearby Aadhaar Enrolment Centre from: \u2022 B y calling 1947 \u2022 Fr om Aadhaar website: https://appointments.uidai.gov.in/easearch.aspx \u2022 Fr om mAadhaar App 2.3.2 T ypes of Enrolment Centres Th e Aadhaar En rolment Cen tres c an be br oadly classified in to tw o c ategories based on the f ormat of service delivery. These are: 2.3.2.1 R egistrar-run Aadhaar Enrolment Centre These ar e the Aadhaar Enr olment Cen tre a vailable in Bank s, P ost Office s, BSN L cen tres, CSCs and St ate Go vernment offices acr oss the c ountry. The se ar e"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 10,
            "distance": 0.47255373001098633,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Demographic information is collected.",
                "overlap": 0.3333
              },
              {
                "fact": "Biometric information is collected.",
                "overlap": 0.6667
              },
              {
                "fact": "The enrolment process captures information required for Aadhaar identity creation.",
                "overlap": 0.375
              }
            ],
            "chunk": "trars\u2019 own employees \u2022 Elect ed local body members \u2022 Members of local administrative bodies \u2022 P ostman \u2022 Influencers such as teachers \u2022 Health w orkers \u2022 Doct ors \u2022 Ang anwadis/Asha workers \u2022 Representatives of local NGOs The information captured during Introducer-based Enrolment is: \u2022 Introducer\u2019s name \u2022 Introducer\u2019s Aadhaar number \u2022 One modality of biometric information of the Introducer 2.1.4 Enr olment of Children For HoF based enrolment, the Head of Family has to give biometric confirmation at the time of enrolment."
          }
        ]
      },
      "response": {
        "answer": "During an Aadhaar enrollment process for residents in India, a variety of personal and demographic data are gathered from various sources including the user's device (Aadhaar Enrollment Centre), smartphone or computer system. The specific information collected can vary based on different factors like location type(Bank/Post Office etc.), service delivery method used by users such as online, offline services in a local body member organization and so forth.\n",
        "latency_seconds": 20.698070100001132,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 3,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 10,
      "question": "What biometric information is collected for Aadhaar?",
      "model": "deepseek-coder:1.3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.1221604929996829,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 19
          },
          {
            "source": "UIAI_1.pdf",
            "page": 50
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63
          }
        ],
        "gold_locations_retrieved": [],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 0,
        "expected_fact_count": 4,
        "facts_with_context_support": [],
        "facts_missing_from_retrieved_context": [
          "Photograph is collected.",
          "Fingerprints are collected.",
          "Iris scans are collected.",
          "For children, fingerprints, iris scans and photographs are captured during mandatory biometric updates."
        ],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 37,
            "distance": 0.3628368377685547,
            "gold_location": false,
            "supporting_facts": [],
            "chunk": "Unique Identification Authority of India Government of India 37 Aadhaar Handbook for Residents 2021-Ver.2.0 To read FAQs SCAN \u2022 Aadhaar Authentication History: Using this service, you can g et de tails of authen tication perf ormed b y y ou in pas t 6 mon ths. The OTP for this service will be sent to your registered mobile number. \u2022 Offline eKYC Service: Using this service, you can generate your digitally signed Aadhaar details that you may use for KYC purposes. To know more about Aadhaar Authentication History SCAN To know more about Aadhaar Paperless Offline eKYC: SCAN 8.3 Fr equently Asked Questions UID AI also has e xtensive F AQs section on the w ebsite and mAadhaar app to help residents understand Aadhaar process, services and products."
          },
          {
            "source": "UIAI_1.pdf",
            "page": 64,
            "distance": 0.38319915533065796,
            "gold_location": false,
            "supporting_facts": [],
            "chunk": "Unique Identification Authority of India Government of India 64Aadhaar Handbook for Residents 2021-Ver.2.0 Verify Aadhaar SCAN Lock/ Unlock Aadhaar SCAN Check your Aadhaar Update History SCAN Update Address Without Documents SCAN Secure QR Code SCAN Locate Aadhaar Enrolment Centre SCAN Verify Digital Signature SCAN Get back your lost Aadhaar number or Enrolment ID SCAN Check status of your Aadhaar enrolment or update request SCAN mAadhaar App SCAN Download Aadhaar SCAN Generate/ Retrieve VID SCAN Check your Aadhaar Authentication History SCAN Check Status of your online update request SCAN Online Appointment Booking SCAN Update Address Online SCAN What is EID SCAN Lock/ Unlock Biometrics SCAN Order Aadhaar Reprint SCAN Aadhaar Chatbot SCAN 13.5 Aadhaar T utorial Videos"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 32,
            "distance": 0.40078648924827576,
            "gold_location": false,
            "supporting_facts": [],
            "chunk": "Unique Identification Authority of India Government of India 32Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 7: VERIFICATION OF AADHAAR Not every 12 digit number is Aadhaar Verify Aadhaar Online To watch tutorial on Verify Aadhaar Service SCAN 7.1 V erify any Aadhaar Online An y Aadhaar number c an be v erified onli ne fr om uidai. gov. in. Y ou c an use this ser vice t o check the authen ticity of an y Aadhaar number tha t is presented to you. For the entered Aadhaar number, you get the following details of the Aadhaar holder: \u2022 If the Aadhaar number e xists \u2022 Ag e band \u2022 Gender \u2022 St ate of residence \u2022 Mobile Number (in mask ed form showing only last 4 digits) Be sides, a service provider can also verify the Aadhaar presented by a person using following services: 1. Online from: https://resident.uidai.gov.in/verify 2. Fr om mAadhaar App 3. Sc an the QR Code on presented Aadhaar using the Aadhaar QR Code Scanner App or mAadhaar App"
          }
        ]
      },
      "response": {
        "answer": "Biometrics, also known as fingerprints and facial recognition data (FRD), are a type of unique identification method that uses physical characteristics such as the shape or size of an object to verify someone's identity. \n\nIn Aadhaar system, biometric information is collected for verification purposes:\n1. Fingerprint Data - This includes finger print patterns and sizes used by users in daily life activities like walking, sitting, standing etc., which are unique identifiers that can be scanned or captured using a device with an infrared sensor (like smartphones). \n2. Face Recognition data- Aadhaar uses facial recognition technology to verify the identity of individuals who use their mobile phones and computers for daily life activities like walking, sitting etc., by comparing face images in real time from users' devices or cameras using algorithms that are trained on a large database containing pictures of people with known identities.\n3. Voice Recognition data - Aadhaar also uses voice recognition technology to verify the identity and authenticity of individuals who use their mobile phones for daily life activities, by comparing spoken language patterns in real time from users' devices or microphones using algorithms that are trained on a large database containing recordings (sounds) of people with known identities.\n4. Hardware Tokens - These tokens generated during the enrollment process can be used to verify Aadhaar ID, which includes fingerprint data and face/voice recognition information from users' devices or smartphones in future transactions for secure authentication purposes. \n5. Biometric Verification Data- This is a unique identifier that uniquely identifies an individual using biometrics (finger print patterns) to verify their identity at the point of registration, during online services and on mobile applications like UID AI etc., which are used by government authorities for verification in Aadhaar systems.\n",
        "latency_seconds": 42.14163520200054,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 0.0,
        "facts_supported_by_context": 0,
        "facts_missing_from_context": 4,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Context insufficient, but model answered. Review for unsupported claims."
      }
    },
    {
      "question_id": 11,
      "question": "What demographic information is collected during enrolment?",
      "model": "deepseek-coder:1.3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.2291368739988684,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 3
          },
          {
            "source": "UIAI_1.pdf",
            "page": 10
          },
          {
            "source": "UIAI_1.pdf",
            "page": 50
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 50,
            "distance": 0.5529363751411438,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Address is demographic information.",
                "overlap": 0.3333
              }
            ],
            "chunk": "ose. 4. Demo graphic information required for enrolment. \u2014 (1) The f ollowing demogr aphic in formation shall be c ollected fr om all individuals under going enrolment (other than children below five years of age):"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 10,
            "distance": 0.6497888565063477,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Demographic information includes personal identity and address-related information captured during enrolment.",
                "overlap": 0.4
              },
              {
                "fact": "Name and date of birth are examples of demographic information.",
                "overlap": 0.3333
              },
              {
                "fact": "Address is demographic information.",
                "overlap": 0.3333
              },
              {
                "fact": "Mobile number and email are part of the demographic information fields, where provided.",
                "overlap": 0.2857
              }
            ],
            "chunk": "trars\u2019 own employees \u2022 Elect ed local body members \u2022 Members of local administrative bodies \u2022 P ostman \u2022 Influencers such as teachers \u2022 Health w orkers \u2022 Doct ors \u2022 Ang anwadis/Asha workers \u2022 Representatives of local NGOs The information captured during Introducer-based Enrolment is: \u2022 Introducer\u2019s name \u2022 Introducer\u2019s Aadhaar number \u2022 One modality of biometric information of the Introducer 2.1.4 Enr olment of Children For HoF based enrolment, the Head of Family has to give biometric confirmation at the time of enrolment."
          },
          {
            "source": "UIAI_1.pdf",
            "page": 50,
            "distance": 0.6530028581619263,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Address is demographic information.",
                "overlap": 0.3333
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 50Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 12 AADHAAR (ENROLMENT AND UPDATE) REGULATIONS, 2016 Your enr olment and upda te is g overned b y the Aadhaar (Enr olment and Upda te) R egulations, 2016. R egulations of direct relevance to you are reproduced below for your information: 12.1 CHAP TER II - Resident Enrolment Process 3. Biom etric information required for enrolment. \u2014 (1) The f ollowing bio metric in formation shall be c ollected fr om all individuals under going enrolment (other than children below five years of age): (i) Facial image; (ii) All ten fingerprints; and (iii) Sc ans of both irises. (2) The s tandards f or c ollecting the biome tric in formation shall be as specified b y the Authority f or this purpose. 4. Demo graphic information required for enrolment. \u2014 (1) The f ollowing demogr aphic in formation shall be c ollected fr om all individuals under going enrolment (other than children below five"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 3,
        "expected_fact_count": 4,
        "facts_with_context_support": [
          "Demographic information includes personal identity and address-related information captured during enrolment.",
          "Name and date of birth are examples of demographic information.",
          "Address is demographic information.",
          "Mobile number and email are part of the demographic information fields, where provided."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 50,
            "distance": 0.5529363751411438,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Address is demographic information.",
                "overlap": 0.3333
              }
            ],
            "chunk": "ose. 4. Demo graphic information required for enrolment. \u2014 (1) The f ollowing demogr aphic in formation shall be c ollected fr om all individuals under going enrolment (other than children below five years of age):"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 10,
            "distance": 0.6497888565063477,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Demographic information includes personal identity and address-related information captured during enrolment.",
                "overlap": 0.4
              },
              {
                "fact": "Name and date of birth are examples of demographic information.",
                "overlap": 0.3333
              },
              {
                "fact": "Address is demographic information.",
                "overlap": 0.3333
              },
              {
                "fact": "Mobile number and email are part of the demographic information fields, where provided.",
                "overlap": 0.2857
              }
            ],
            "chunk": "trars\u2019 own employees \u2022 Elect ed local body members \u2022 Members of local administrative bodies \u2022 P ostman \u2022 Influencers such as teachers \u2022 Health w orkers \u2022 Doct ors \u2022 Ang anwadis/Asha workers \u2022 Representatives of local NGOs The information captured during Introducer-based Enrolment is: \u2022 Introducer\u2019s name \u2022 Introducer\u2019s Aadhaar number \u2022 One modality of biometric information of the Introducer 2.1.4 Enr olment of Children For HoF based enrolment, the Head of Family has to give biometric confirmation at the time of enrolment."
          },
          {
            "source": "UIAI_1.pdf",
            "page": 50,
            "distance": 0.6530028581619263,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Address is demographic information.",
                "overlap": 0.3333
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 50Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 12 AADHAAR (ENROLMENT AND UPDATE) REGULATIONS, 2016 Your enr olment and upda te is g overned b y the Aadhaar (Enr olment and Upda te) R egulations, 2016. R egulations of direct relevance to you are reproduced below for your information: 12.1 CHAP TER II - Resident Enrolment Process 3. Biom etric information required for enrolment. \u2014 (1) The f ollowing bio metric in formation shall be c ollected fr om all individuals under going enrolment (other than children below five years of age): (i) Facial image; (ii) All ten fingerprints; and (iii) Sc ans of both irises. (2) The s tandards f or c ollecting the biome tric in formation shall be as specified b y the Authority f or this purpose. 4. Demo graphic information required for enrolment. \u2014 (1) The f ollowing demogr aphic in formation shall be c ollected fr om all individuals under going enrolment (other than children below five"
          }
        ]
      },
      "response": {
        "answer": "During the resident enrollment process, biometric information such as facial images (i), fingerprints with ten fingers scanned and both irises' scan results are required. The Aadhaar handbook provides more details about this in Section 12 of its guidelines for residents enrolling at UIAI_1:\n\n- Facial image - This is a biometric identification method used by individuals to verify their identity, often done through facial recognition technology or an app like Google's Face ID. The information captured during the introducer based enrollment (other than children under five years of age) includes Introducer\u2019s name and Aadhaar number along with one modality of biometric identification for each child in House-of-Fame enrolments, where a Head of Family must provide biometric confirmation at time of enrolment.\n  \nPlease note that the specific details may vary depending on your location or country's local laws and regulations regarding Aadhaar enrollment process as per UIAI_1:50 (Page 4). Also, it is important to ensure you are following all relevant privacy guidelines when collecting such sensitive information. For more accurate responses based solely upon the provided context in this document, please consult with a legal expert or an AI model trained specifically on Aadhaar data for your specific location and country's regulations regarding enrolment process of individuals under UIAI_1:50 (Page 4).\n",
        "latency_seconds": 30.23316178099958,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 4,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 12,
      "question": "What happens after Aadhaar enrolment?",
      "model": "deepseek-coder:1.3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.08090387399897736,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 3
          },
          {
            "source": "UIAI_1.pdf",
            "page": 15
          },
          {
            "source": "UIAI_1.pdf",
            "page": 26
          },
          {
            "source": "UIAI_1.pdf",
            "page": 27
          }
        ],
        "gold_locations_retrieved": [],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 0,
        "expected_fact_count": 3,
        "facts_with_context_support": [
          "The enrolment information is processed for Aadhaar generation.",
          "The resident can use the enrolment information or enrolment ID to check generation/status information."
        ],
        "facts_missing_from_retrieved_context": [
          "Aadhaar can subsequently be downloaded or received as an Aadhaar letter when generated."
        ],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 8,
            "distance": 0.5121980309486389,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "The enrolment information is processed for Aadhaar generation.",
                "overlap": 0.6
              },
              {
                "fact": "The resident can use the enrolment information or enrolment ID to check generation/status information.",
                "overlap": 0.6667
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 8Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 2: HOW TO ENROL FOR AADHAAR? Visit Aadhaar Enrolment Centre Fill Aadhaar Enrolment/ Update F orm Check & Confirm All Spellings on screen Submit Valid Give Demographic & Biometric Data You get SMS of Aadhaar generation Documents for Scanning Collect your documents & Enrolment slip To g et Aadhaar , y ou ha ve t o enr oll b y pr oviding minimal demogr aphic and biome tric in formation during the enr olment process, which is totally free of cost. Please note that you need to enroll for Aadhaar only once. 2.1 En rolment Process Please do Check & Confirm all data shown on the resident screen, before the operator submits your Packet"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 7,
            "distance": 0.5623500943183899,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "The enrolment information is processed for Aadhaar generation.",
                "overlap": 0.4
              },
              {
                "fact": "The resident can use the enrolment information or enrolment ID to check generation/status information.",
                "overlap": 0.3333
              }
            ],
            "chunk": "haar enrolment. 1.2.2 Aadh aar for NRIs If y ou are a non-resident Indian (NRI), you can enroll for Aadhaar if you have an Indian Passport. The mandate of 182 days does not apply for NRIs. You can visit an Aadhaar Enrolment Centre and enr oll f or Aadhaar as an NRI. Indian P assport is manda tory as Pr oof of Iden tity (P oI) f or NRIs. The app licant may choose to give any other Indian Proof of Address (PoA) from amongst the documents accepted by UIDAI (see Section 13.1, Annex \u2013 I of this handbook). 1.3 F eatures of Aadhaar 1.3.1 Aadh aar is an identifier Aadhaar is a 12-digit unique ID issued to an individual. Aadhaar use s de mographic in formation (name, da te of birth, g ender and addr ess), phot ograph of the f ace, fing erprints and iris t o ide ntify a r esident. The se it ems of in formation ar e manda tory. In addition, y ou ha ve the op tion of pr oviding y our mobile phone number and email. We recommend that you provide these details also. 1.3.2 Aadh aar is an ID, nothing m"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 21,
            "distance": 0.5644844770431519,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "The enrolment information is processed for Aadhaar generation.",
                "overlap": 0.4
              }
            ],
            "chunk": "er to track s tatus of y our Aadhaar upda te fr om: h ttps://ssup.uidai. gov.in/checkSSUPStatus/checkupdatestatus. 3.9 P oints to remember for Aadhaar Update at Aadhaar Enrolment Centre 1. An y Aadhaar holder can request for Aadhaar, update 2. Aadhaar upda te r equest r equires authen tication b y the Aadhaar holde r . This authen tication is done e ither as biome tric authen tication a t Aadhaar Enr olment Cen tre or O TP authen tication f or online addr ess upda te. F or childr en be low 5 y ears of ag e, this authen tication is done b y the parent/ guardian whose Aadhaar was linked to the child\u2019s at the time of enrolment 3. In c ase of children below the age of 18 consent of the parent/guardian is collected for updating the Aadhaar . 4. If y ou lose your update slip or do not have your Update Request Number, follow the process to retrieve EID as described in Sec. 2.5.1 5. If your update request gets rejected, you can call 1947 and get the reason for rejection and take corrective mea"
          }
        ]
      },
      "response": {
        "answer": "After completing an Aadhaar enrollment process on your mobile device, you will receive a unique ID (Aadhaar) that is issued to the person. This information can be used for various purposes such as verification in online banking systems or accessing services like UIDAI and other governmental applications within India.\n",
        "latency_seconds": 23.955974126,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 0.6667,
        "facts_supported_by_context": 2,
        "facts_missing_from_context": 1,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Partial context support; response should be checked against missing facts."
      }
    },
    {
      "question_id": 13,
      "question": "What documents can be used as proof of identity?",
      "model": "deepseek-coder:1.3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.14912318299866456,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 63
          },
          {
            "source": "UIAI_2.pdf",
            "page": 1
          },
          {
            "source": "UIAI_2.pdf",
            "page": 9
          }
        ],
        "gold_locations_retrieved": [],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 0,
        "expected_fact_count": 2,
        "facts_with_context_support": [
          "Only documents from the UIDAI-valid supporting-document list should be presented as POI.",
          "The handbook provides a specific list of acceptable POI documents."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_2.pdf",
            "page": 8,
            "distance": 0.4320237636566162,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Only documents from the UIDAI-valid supporting-document list should be presented as POI.",
                "overlap": 0.5556
              },
              {
                "fact": "The handbook provides a specific list of acceptable POI documents.",
                "overlap": 0.2857
              }
            ],
            "chunk": "such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Validity period of the Aadhaar"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 3,
            "distance": 0.49322202801704407,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Only documents from the UIDAI-valid supporting-document list should be presented as POI.",
                "overlap": 0.5556
              },
              {
                "fact": "The handbook provides a specific list of acceptable POI documents.",
                "overlap": 0.2857
              }
            ],
            "chunk": "birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Head of Family (HoF) based enrolment is mandatory for children below five years of age ex"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 3,
            "distance": 0.49736079573631287,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Only documents from the UIDAI-valid supporting-document list should be presented as POI.",
                "overlap": 0.5556
              },
              {
                "fact": "The handbook provides a specific list of acceptable POI documents.",
                "overlap": 0.4286
              }
            ],
            "chunk": "List of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan * Proof of Address documents as in the \u201cList III - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar Number of individual eighteen years and above of age\u201d will also be applicable Note: (a) Any document listed in the above tabular statement shall be acceptable only if it meets the following conditions, namely:\u2014 (i) It is currently valid; (ii) The person in respect of whom such document is issued is entitled for the same; (iii) The information contained in the document is verifiable from the source; and (iv) The authority issuing the document has not made any declaration that such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is"
          }
        ]
      },
      "response": {
        "answer": "The list provided in UIAI_2.pdf page number three (Criteria for acceptability of the documents submitted to evidence Identity, Address and Date Of Birth) does not contain specific criteria that all Aadhaar Proofs should meet before they can be used as proof of identity or address/date-of-birth information in a user's context. \n\nHowever, it is generally accepted among the users (and legal entities), for any document to serve as evidence Identity and Address will need at least:\n1) To contain an image with name along side date & time of creation or last update; this can be done using Aadhaar card itself. \n2) The information should not have been tampered in the process, ie., it must remain unchanged after being created/updated on a physical device (like smartphone). This is to ensure that even if someone else accesses your data from another source or location they cannot alter this document for themselves without changing its content.\n3) The name of person should be mentioned along with the image in such documents, so as not only can it serve identity but also serves a purpose (like proofing an event). \n4) It must contain at least one date-of-birth and/or birth certificate if applicable for children under five years. This is to ensure that even though they are younger than sixteen the document will be valid, as per Aadhaar's rules of dating from a child (five or more).\n5) The documents should not contain any other information apart from these four mentioned above which can serve identity and address/date-of-birth. \n6) It must have been submitted in the name that is being enrolled, otherwise it cannot be used as proof of Identity for a person under sixteen years old or older because Aadhaar rules do not allow this (unless they are children). This can also serve to prove their identity if someone else accesses your data from another source.\n",
        "latency_seconds": 45.99181317500006,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 2,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 14,
      "question": "What documents can be used as proof of address?",
      "model": "deepseek-coder:1.3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.08721096800036321,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 63
          },
          {
            "source": "UIAI_2.pdf",
            "page": 1
          },
          {
            "source": "UIAI_2.pdf",
            "page": 12
          },
          {
            "source": "UIAI_2.pdf",
            "page": 18
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 63,
            "distance": 0.4018175005912781,
            "gold_location": true,
            "supporting_facts": [],
            "chunk": "Proof of Address) documents containing Name & Address 1. Passport 2. Bank Statement/ Passbook 3. Post Office Account Statement/ Passbook 4. Ration Card 5. Voter ID 6. Driving License 7. Government Photo ID cards/ service photo identity card issued by PSU 8. Electricity Bill (not older than 3 months) 9. Water Bill (not older than 3 months) 10. Telephone Landline Bill (not older than 3 months) 11. Property Tax Receipt (not older than 1 year) 12. Credit Card Statement (not older than 3 months) 13. Insurance Policy 14. Signed Letter having Photo from Bank on letterhead 15. Signed Letter having Photo issued by registered Company on letterhead 16. Signed Letter having Photo issued by Recognized Educational Institution on letterhead or Photo ID having address issued by Recognized Educational Institution 17. NREGS Job Card 18. Arms License 19. Pensioner Card 20. Freedom Fighter Card 21. Kissan Passbook 22. CGHS/ ECHS Card 23. Certificate of Address having photo issued by MP or MLA or MLC or Ga"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 1,
        "expected_fact_count": 3,
        "facts_with_context_support": [
          "Only documents from the UIDAI-valid supporting-document list should be presented as POA.",
          "The handbook provides a specific list of acceptable POA documents.",
          "Examples include accepted utility or property-related documents where they satisfy the stated validity conditions."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_2.pdf",
            "page": 3,
            "distance": 0.40162307024002075,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Only documents from the UIDAI-valid supporting-document list should be presented as POA.",
                "overlap": 0.5556
              },
              {
                "fact": "The handbook provides a specific list of acceptable POA documents.",
                "overlap": 0.4286
              }
            ],
            "chunk": "List of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan * Proof of Address documents as in the \u201cList III - Documents that may be presented to evidence Proof of Identity, Address, Relationship or Date of Birth for enrolment for Aadhaar Number of individual eighteen years and above of age\u201d will also be applicable Note: (a) Any document listed in the above tabular statement shall be acceptable only if it meets the following conditions, namely:\u2014 (i) It is currently valid; (ii) The person in respect of whom such document is issued is entitled for the same; (iii) The information contained in the document is verifiable from the source; and (iv) The authority issuing the document has not made any declaration that such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63,
            "distance": 0.4018175005912781,
            "gold_location": true,
            "supporting_facts": [],
            "chunk": "Proof of Address) documents containing Name & Address 1. Passport 2. Bank Statement/ Passbook 3. Post Office Account Statement/ Passbook 4. Ration Card 5. Voter ID 6. Driving License 7. Government Photo ID cards/ service photo identity card issued by PSU 8. Electricity Bill (not older than 3 months) 9. Water Bill (not older than 3 months) 10. Telephone Landline Bill (not older than 3 months) 11. Property Tax Receipt (not older than 1 year) 12. Credit Card Statement (not older than 3 months) 13. Insurance Policy 14. Signed Letter having Photo from Bank on letterhead 15. Signed Letter having Photo issued by registered Company on letterhead 16. Signed Letter having Photo issued by Recognized Educational Institution on letterhead or Photo ID having address issued by Recognized Educational Institution 17. NREGS Job Card 18. Arms License 19. Pensioner Card 20. Freedom Fighter Card 21. Kissan Passbook 22. CGHS/ ECHS Card 23. Certificate of Address having photo issued by MP or MLA or MLC or Ga"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 13,
            "distance": 0.41209468245506287,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Only documents from the UIDAI-valid supporting-document list should be presented as POA.",
                "overlap": 0.5556
              },
              {
                "fact": "The handbook provides a specific list of acceptable POA documents.",
                "overlap": 0.4286
              },
              {
                "fact": "Examples include accepted utility or property-related documents where they satisfy the stated validity conditions.",
                "overlap": 0.2727
              }
            ],
            "chunk": "List of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan * Proof of Address documents as in the above list will also be applicable. Note: (a) Any document listed in the above tabular statement shall be acceptable only if it meets the following conditions, namely: \u2014 (i) It is currently valid (ii) The person in respect of whom such document is issued is entitled for the same; (iii) The information contained in the document is verifiable from the source; and (iv) The authority issuing the document has not made any declaration that such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) A document is accepted as Proof of Relationship (PoR) docume"
          }
        ]
      },
      "response": {
        "answer": "The list provided in UIAI_2.pdf page 13, \"List of Acceptable Documents for Enrolment and Update Mera Aadhaar , Meri Pehchaan * Proof of Address documents\", includes the following types of proof-of-address (PoA) documents:\n\nProof of Identity Document(s): Name & photograph 1. Passport, ID card number or government photo identity cards issued by PSU and Electricity Bill not older than three months; Water bill not older than three months ; Telephone landline bills not older than three months (not more recent); Property tax receipt not over a year old; Credit Card statement not longer than 3 months in use, Insurance policy.\nProof of Address Document(s): Name & address details such as passport ID card number or government photo identity cards issued by PSU and Electricity Bill older than three years (not more recent); Water bill newer than two years but less then four; Telephone landline bills not longer in use, Property tax receipt over a year old with no renewal required ; Credit Card statement new for 3 months of usage or insurance policy.\n",
        "latency_seconds": 34.76987366399953,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 3,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": true,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 15,
      "question": "What documents can be used as proof of date of birth?",
      "model": "deepseek-coder:1.3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.23692464399937307,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 63
          },
          {
            "source": "UIAI_2.pdf",
            "page": 1
          },
          {
            "source": "UIAI_2.pdf",
            "page": 4
          },
          {
            "source": "UIAI_2.pdf",
            "page": 13
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_2.pdf",
            "page": 13,
            "distance": 0.4209522008895874,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Only documents from the UIDAI-valid supporting-document list should be used as DoB proof.",
                "overlap": 0.4444
              },
              {
                "fact": "Birth certificate is an example of an accepted DoB document in the handbook's document list.",
                "overlap": 0.5
              }
            ],
            "chunk": "irth certificate as proof of date of birth b. For Non-Resident Indian (NRI) below 18 years of age: - Aadhaar number holder shall submit birth certificate or Indian Passport as proof of date of birth c. For resident Indians and Non-Resident Indian (NRI) of 18 years and above of age: - Aadhaar number holder shall submit any of the acceptable proof of date of birth documents as specified in the above list (ii) If the Aadhaar number holder had earlier submitted birth certificate as proof of date of birth, the Aadhaar number holder shall submit corrected birth certificate bearing same Birth Registration Number (BRN) (iii) If the Aadhaar number holder had earlier submitted any proof of date of birth document except birth certificate (for e.g. Marksheet, Passport etc.), the Aadhaar number holder shall submit corrected version of the same document or submit a birth certificate (iv) In case of date of birth update of woman who has changed her name post-marriage, proof of date of birth documents"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 1,
        "expected_fact_count": 2,
        "facts_with_context_support": [
          "Only documents from the UIDAI-valid supporting-document list should be used as DoB proof.",
          "Birth certificate is an example of an accepted DoB document in the handbook's document list."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_2.pdf",
            "page": 13,
            "distance": 0.4209522008895874,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Only documents from the UIDAI-valid supporting-document list should be used as DoB proof.",
                "overlap": 0.4444
              },
              {
                "fact": "Birth certificate is an example of an accepted DoB document in the handbook's document list.",
                "overlap": 0.5
              }
            ],
            "chunk": "irth certificate as proof of date of birth b. For Non-Resident Indian (NRI) below 18 years of age: - Aadhaar number holder shall submit birth certificate or Indian Passport as proof of date of birth c. For resident Indians and Non-Resident Indian (NRI) of 18 years and above of age: - Aadhaar number holder shall submit any of the acceptable proof of date of birth documents as specified in the above list (ii) If the Aadhaar number holder had earlier submitted birth certificate as proof of date of birth, the Aadhaar number holder shall submit corrected birth certificate bearing same Birth Registration Number (BRN) (iii) If the Aadhaar number holder had earlier submitted any proof of date of birth document except birth certificate (for e.g. Marksheet, Passport etc.), the Aadhaar number holder shall submit corrected version of the same document or submit a birth certificate (iv) In case of date of birth update of woman who has changed her name post-marriage, proof of date of birth documents"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 3,
            "distance": 0.42837268114089966,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Only documents from the UIDAI-valid supporting-document list should be used as DoB proof.",
                "overlap": 0.4444
              },
              {
                "fact": "Birth certificate is an example of an accepted DoB document in the handbook's document list.",
                "overlap": 0.375
              }
            ],
            "chunk": "birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the individual seeking enrolment (iii) A document is accepted as Proof of Relationship (PoR) document only if it contains at least the name of individual and name of Head of Family (HoF) (iv) Name of the individual as mentioned in the supporting document, will be replicated as such in the individual\u2019s Aadhaar. No additional information will be considered for inclusion in the name (v) Name and date of birth of the individual across all the documents submitted as PoI, PoR and PDB must be uniform (c) Head of Family (HoF) based enrolment is mandatory for children below five years of age ex"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 5,
            "distance": 0.4645431339740753,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Only documents from the UIDAI-valid supporting-document list should be used as DoB proof.",
                "overlap": 0.4444
              },
              {
                "fact": "Birth certificate is an example of an accepted DoB document in the handbook's document list.",
                "overlap": 0.375
              }
            ],
            "chunk": "tionship or Date of Birth for enrolment for Aadhaar Number of individual eighteen years and above of age\u201d will also be applicable Note: (a) Any document listed in the above tabular statement shall be acceptable only if it meets the following conditions, namely:\u2014 (i) It is currently valid (ii) The person in respect of whom such document is issued is entitled for the same; (iii) The information contained in the document is verifiable from the source; and (iv) The authority issuing the document has not made any declaration that such document is not a proof of identity, address, date of birth or relationship for which such a document is presented (b) Criteria for acceptability of the documents submitted to evidence identity, address, date of birth and relationship: (i) A document is accepted as Proof of Identity (PoI) document only if it contains at least the name and photograph of the individual (ii) PoI, PoA, PoR and PDB documents submitted for enrolment must be issued in the name of the"
          }
        ]
      },
      "response": {
        "answer": "The Aadhaar Handbook provides a list of acceptable proofs of identity, address (AADHAAR), and dates of birth for residents. For non-residents or individuals under 18 years old who are not resident Indians as per the UIAI_2 document provided in source page number \"3\", only documents related to date of birth can be used:\n\ni) Birth certificate (for Non-Resident Indian NRI below 18): This is a digital or physical form that contains information such as name, gender and age. It's usually obtained from the government department in India for residents who are not resident Indians under 18 years of old. For non-residents above this year (NRI), only birth certificate can be used to prove their date of birth which is a physical document that contains information such as name, gender and age on it or any other proof they have obtained from the government department in India for residents who are not resident Indians under 18 years old.\n\nii) Indian Passport (for Resident Individuals): This can be either an original passport with a digital photo ID card attached to one side, as well as another copy on both sides of each document or any other proof they have obtained from the government department in India for residents who are not resident Indians under 18 years old.\n",
        "latency_seconds": 35.733794391999254,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 2,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 16,
      "question": "What is the role of the enrolment operator?",
      "model": "deepseek-coder:1.3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.06442495199917175,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 3
          },
          {
            "source": "UIAI_1.pdf",
            "page": 10
          },
          {
            "source": "UIAI_1.pdf",
            "page": 50
          },
          {
            "source": "UIAI_1.pdf",
            "page": 62
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 10,
            "distance": 0.7259753942489624,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "The operator assists with the Aadhaar enrolment process.",
                "overlap": 0.4
              },
              {
                "fact": "The operator is involved in capturing and entering resident information into the enrolment system.",
                "overlap": 0.25
              }
            ],
            "chunk": "trars\u2019 own employees \u2022 Elect ed local body members \u2022 Members of local administrative bodies \u2022 P ostman \u2022 Influencers such as teachers \u2022 Health w orkers \u2022 Doct ors \u2022 Ang anwadis/Asha workers \u2022 Representatives of local NGOs The information captured during Introducer-based Enrolment is: \u2022 Introducer\u2019s name \u2022 Introducer\u2019s Aadhaar number \u2022 One modality of biometric information of the Introducer 2.1.4 Enr olment of Children For HoF based enrolment, the Head of Family has to give biometric confirmation at the time of enrolment."
          },
          {
            "source": "UIAI_1.pdf",
            "page": 50,
            "distance": 0.7597264051437378,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "The operator is involved in capturing and entering resident information into the enrolment system.",
                "overlap": 0.25
              }
            ],
            "chunk": "ose. 4. Demo graphic information required for enrolment. \u2014 (1) The f ollowing demogr aphic in formation shall be c ollected fr om all individuals under going enrolment (other than children below five years of age):"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 2,
        "expected_fact_count": 3,
        "facts_with_context_support": [
          "The operator assists with the Aadhaar enrolment process.",
          "The operator is involved in capturing and entering resident information into the enrolment system.",
          "The operator assists residents at the enrolment centre."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 10,
            "distance": 0.7259753942489624,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "The operator assists with the Aadhaar enrolment process.",
                "overlap": 0.4
              },
              {
                "fact": "The operator is involved in capturing and entering resident information into the enrolment system.",
                "overlap": 0.25
              }
            ],
            "chunk": "trars\u2019 own employees \u2022 Elect ed local body members \u2022 Members of local administrative bodies \u2022 P ostman \u2022 Influencers such as teachers \u2022 Health w orkers \u2022 Doct ors \u2022 Ang anwadis/Asha workers \u2022 Representatives of local NGOs The information captured during Introducer-based Enrolment is: \u2022 Introducer\u2019s name \u2022 Introducer\u2019s Aadhaar number \u2022 One modality of biometric information of the Introducer 2.1.4 Enr olment of Children For HoF based enrolment, the Head of Family has to give biometric confirmation at the time of enrolment."
          },
          {
            "source": "UIAI_1.pdf",
            "page": 52,
            "distance": 0.7478420734405518,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "The operator assists with the Aadhaar enrolment process.",
                "overlap": 0.6
              },
              {
                "fact": "The operator is involved in capturing and entering resident information into the enrolment system.",
                "overlap": 0.5
              },
              {
                "fact": "The operator assists residents at the enrolment centre.",
                "overlap": 0.8
              }
            ],
            "chunk": "vide f or han dling of such e xceptions in the enrolment and upda te software, and such enr olment shall be carried out as per the procedure as may be specified by the Authority for this purpose. 12.2 CHAP TER IV - Update of Resident Information 16. R equest for update of identity information. \u2014 An Aadhaar number holder ma y seek alt eration of his demogr aphic in formation or biome tric in formation in c ases specified under Section 31 of the Act in acc ordance with update procedure specified in this Chapter . 17. Mand atory update for children. \u2014 The Authority shall r equire the bio metric in formation of childr en t o be upda ted upon a ttaining fiv e y ears of ag e and fift een y ears of ag e in acc ordance with the pr ocedure specified by the Authority. 19. Mode of upda ting residents\u2019 information. \u2014 The pr ocess of upda ting r esidents\u2019 in formation in the CIDR ma y be c arried out thr ough the following modes:\u2014 (a) A t any enrolment centre with the assistance of the operator and"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 50,
            "distance": 0.7597264051437378,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "The operator is involved in capturing and entering resident information into the enrolment system.",
                "overlap": 0.25
              }
            ],
            "chunk": "ose. 4. Demo graphic information required for enrolment. \u2014 (1) The f ollowing demogr aphic in formation shall be c ollected fr om all individuals under going enrolment (other than children below five years of age):"
          }
        ]
      },
      "response": {
        "answer": "The Enrollment Operator's main function in an Aadhaar system, as per UIAI_1.pdf page 50 and source mentioned above (Source :UIAI_1.pdf), is to provide information about the enrollee such as their name, aadhar number etc., for further verification during enrollment process or identification of an existing user in case they have already registered with Aadhaar system beforehand using biometric data provided by them at registration time (as per UIAI_1.pdf page 52).\n",
        "latency_seconds": 19.105572766000478,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 3,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 17,
      "question": "What is the role of the verifier?",
      "model": "deepseek-coder:1.3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.133989174000817,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 62
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63
          }
        ],
        "gold_locations_retrieved": [],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 0,
        "expected_fact_count": 2,
        "facts_with_context_support": [],
        "facts_missing_from_retrieved_context": [
          "The verifier is involved in verification of the resident's enrolment/update information and supporting documentation.",
          "The enrolment/update form contains a verifier stamp and signature as part of the verification process."
        ],
        "chunk_analysis": [
          {
            "source": "UIAI_2.pdf",
            "page": 19,
            "distance": 0.8584055304527283,
            "gold_location": false,
            "supporting_facts": [],
            "chunk": "he certifier 5. Certifier Type \u2022 Mention the certifier type by tick mark one of box from below categories: \u2023 MP / MLA / MLC / Municipal Councillor \u2023 Gazetted Officer Group \u2018A\u2019/ Employees Provident Fund Organisation (EPFO) Officer \u2023 Tehsildar/ Gazetted Officer Group \u2018B\u2019 \u2023 Gazetted Officer at National AIDS Control Organisation (NACO)/State Health Department / Project Director of the State AIDS Control Society or his nominee \u2023 Head of recognised educational institution (only for the institute students concerned) \u2023 Village Panchayat Head/ President or Mukhiya/ Gaon Bura/ equivalent authority (for rural areas)/ Village Panchayat Secretary/ Village Revenue Officer or equivalent (for rural areas) 6. Checklist for Certifier \u2022 Verify the below checklist by tick mark the boxes: \u2023 No overwriting \u2023 Issue date is filled \u2023 Individual seeking to enrol / Aaadhaar number holder\u2019s signature is available \u2023 Certifier\u2019s details is filled \u2023 Individual seeking to enrol / Aaadhaar number holder\u2019s Photo is cro"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 49,
            "distance": 0.9198484420776367,
            "gold_location": false,
            "supporting_facts": [],
            "chunk": "Unique Identification Authority of India Government of India 49 Aadhaar Handbook for Residents 2021-Ver.2.0 11.1 R esponsibilities of UIDAI UID AI is r esponsible f or Aadhaar enr olment and authen tication under the Aadhaar Act 2016. The responsibilities include: \u2022 Operation and management of all stages of Aadhaar life cycle \u2022 P olicy development \u2022 Pr ocedure and system for issuing Aadhaar numbers to individuals \u2022 Authentication performance To download a copy of The Aadhaar Act 2016 SCAN"
          },
          {
            "source": "UIAI_2.pdf",
            "page": 15,
            "distance": 0.9262070655822754,
            "gold_location": false,
            "supporting_facts": [],
            "chunk": "y above mentioned details of the Individual seeking to enrol /Aadhaar number holder and i am a.... (Tick appropriate box below) *To be used as Proof of Identify (PoI) only in specific cases as mentioned in the list of applicable supporting documents. CERTIFIER\u2019S DETAILS (TO BE FILLED BY THE CERTIFIER ONLY) No overwriting Issue date is filled Resident\u2019s signature Certifier\u2019s details Resident\u2019s Photo is cross signed and cross stamped (paper to photo or photo to paper) CHECKLIST FOR CERTIFIER Signature & Stamp of ther Certifier"
          }
        ]
      },
      "response": {
        "answer": "The Verifier in an Aadhaar system plays a crucial role. It's responsible for validating and confirming information related to individuals, including their personal details like name, date of birth etc., as well as authenticity through digital signatures or photos taken during the enrollment process by users who want to register themselves on this platform (like Aadhaar).\n",
        "latency_seconds": 18.692216137998912,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 0.0,
        "facts_supported_by_context": 0,
        "facts_missing_from_context": 2,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Context insufficient, but model answered. Review for unsupported claims."
      }
    },
    {
      "question_id": 18,
      "question": "How is an Aadhaar number generated?",
      "model": "deepseek-coder:1.3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.13767981999990297,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 6
          },
          {
            "source": "UIAI_1.pdf",
            "page": 15
          },
          {
            "source": "UIAI_1.pdf",
            "page": 26
          },
          {
            "source": "UIAI_1.pdf",
            "page": 31
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 6,
            "distance": 0.47015380859375,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "The Aadhaar number is generated by UIDAI's system rather than manually assigned by the resident or operator.",
                "overlap": 0.2727
              },
              {
                "fact": "The Aadhaar number is a unique 12-digit identity number.",
                "overlap": 0.8
              }
            ],
            "chunk": "one to visit the relevant webpage or watch a video tutorial on the mentioned service. Le t\u2019s begin y our Aadhaar journe y with a sneak peek in to the w orld of Aadhaar , the r elated pr ocesses, the ser vices available for you and the power of this 12-digit number that is unique to you. 1.1 Aadhaar Ov erview Aadhaar is a 12-digit unique iden tification number issue b y the Unique Identification Authority of India (UIDAI) t o the r esidents of India a fter sa tisfying the v erification pr ocess (described in Section 2) laid down by the Authority."
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 1,
        "expected_fact_count": 3,
        "facts_with_context_support": [
          "The Aadhaar number is generated by UIDAI's system rather than manually assigned by the resident or operator.",
          "The Aadhaar number is a unique 12-digit identity number."
        ],
        "facts_missing_from_retrieved_context": [
          "Aadhaar generation occurs after enrolment information has been submitted and processed."
        ],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 32,
            "distance": 0.46779030561447144,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "The Aadhaar number is generated by UIDAI's system rather than manually assigned by the resident or operator.",
                "overlap": 0.3636
              },
              {
                "fact": "The Aadhaar number is a unique 12-digit identity number.",
                "overlap": 0.8
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 32Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 7: VERIFICATION OF AADHAAR Not every 12 digit number is Aadhaar Verify Aadhaar Online To watch tutorial on Verify Aadhaar Service SCAN 7.1 V erify any Aadhaar Online An y Aadhaar number c an be v erified onli ne fr om uidai. gov. in. Y ou c an use this ser vice t o check the authen ticity of an y Aadhaar number tha t is presented to you. For the entered Aadhaar number, you get the following details of the Aadhaar holder: \u2022 If the Aadhaar number e xists \u2022 Ag e band \u2022 Gender \u2022 St ate of residence \u2022 Mobile Number (in mask ed form showing only last 4 digits) Be sides, a service provider can also verify the Aadhaar presented by a person using following services: 1. Online from: https://resident.uidai.gov.in/verify 2. Fr om mAadhaar App 3. Sc an the QR Code on presented Aadhaar using the Aadhaar QR Code Scanner App or mAadhaar App"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 6,
            "distance": 0.47015380859375,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "The Aadhaar number is generated by UIDAI's system rather than manually assigned by the resident or operator.",
                "overlap": 0.2727
              },
              {
                "fact": "The Aadhaar number is a unique 12-digit identity number.",
                "overlap": 0.8
              }
            ],
            "chunk": "one to visit the relevant webpage or watch a video tutorial on the mentioned service. Le t\u2019s begin y our Aadhaar journe y with a sneak peek in to the w orld of Aadhaar , the r elated pr ocesses, the ser vices available for you and the power of this 12-digit number that is unique to you. 1.1 Aadhaar Ov erview Aadhaar is a 12-digit unique iden tification number issue b y the Unique Identification Authority of India (UIDAI) t o the r esidents of India a fter sa tisfying the v erification pr ocess (described in Section 2) laid down by the Authority."
          },
          {
            "source": "UIAI_1.pdf",
            "page": 7,
            "distance": 0.4744594693183899,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "The Aadhaar number is generated by UIDAI's system rather than manually assigned by the resident or operator.",
                "overlap": 0.3636
              },
              {
                "fact": "The Aadhaar number is a unique 12-digit identity number.",
                "overlap": 0.6
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 7 Aadhaar Handbook for Residents 2021-Ver.2.0 1.2 Who c an get Aadhaar? An y individual in India, irr espective of ag e and g ender, who is a r esident of India, or a non r esident Indian (NRI), can enroll to obtain Aadhaar number. For an individual, only one Aadhaar number is generated, as the uniqueness is achieved through the process of demographic and biometric de-duplication. 1.2.1. Aadh aar for residents of India Y ou ar e eligible f or Aadhaar Enr olment if y ou ar e a r esident of India. This, b y de finition, means tha t y ou ha ve r esided in India f or a period or periods amoun ting in all t o one hundr ed and eigh ty-two days (182 days) or more in the twelve months immediately preceding the date of application for Aadhaar enrolment. 1.2.2 Aadh aar for NRIs If y ou are a non-resident Indian (NRI), you can enroll for Aadhaar if you have an Indian Passport. The mandate of 182 days does not apply for NRIs. You can vis"
          }
        ]
      },
      "response": {
        "answer": null,
        "latency_seconds": null,
        "error": "HTTPConnectionPool(host='localhost', port=11434): Read timed out. (read timeout=300)"
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 0.6667,
        "facts_supported_by_context": 2,
        "facts_missing_from_context": 1,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Partial context support; response should be checked against missing facts."
      }
    },
    {
      "question_id": 19,
      "question": "What should a resident do if there is an error in their Aadhaar information?",
      "model": "deepseek-coder:1.3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 1.0760678330007067,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 17
          },
          {
            "source": "UIAI_1.pdf",
            "page": 18
          },
          {
            "source": "UIAI_1.pdf",
            "page": 20
          },
          {
            "source": "UIAI_1.pdf",
            "page": 63
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 20,
            "distance": 0.4807325005531311,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "The resident should request an update/correction of the incorrect information.",
                "overlap": 0.2857
              },
              {
                "fact": "Updates can be performed through the applicable Aadhaar update process.",
                "overlap": 0.2857
              }
            ],
            "chunk": "lds (name, gender and date of birth) in y our Aadhaar again (beyond the permissible limit), you need to: 1. Visit an y Aadhaar Enr olment Cen tre (with v alid supporting docume nt f or N ame & Da te of Birth upda te) 2. Place an up date request 3. Send the latest URN (Update Request Number) to Aadhaar help centre by calling 1947 or via email to help@uidai.gov.in and request for \u2018exception update\u2019 The c ase is then assigne d t o the UID AI\u2019s R egional Office tha t handles y our r egion f or due dilig ence. Once verified, your update request will be processed and the outcome communicated to you. 3.7 Upda te in case of Aadhaar Deactivation Y our Aadhaar data is subject to periodic quality checks. During such quality checks by UIDAI, if any discr epancy is f ound in the supporting documen ts or c aptured biome tric da ta of a r esident, his/her Aadhaar is deactiv ated t emporarily and the Aadhaar holder is duly notified of this. If y our Aadhaar gets suspended, you would not be able to ava"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 1,
        "expected_fact_count": 3,
        "facts_with_context_support": [
          "The resident should request an update/correction of the incorrect information.",
          "Updates can be performed through the applicable Aadhaar update process.",
          "Valid supporting documents may be required depending on the field being corrected."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 20,
            "distance": 0.4807325005531311,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "The resident should request an update/correction of the incorrect information.",
                "overlap": 0.2857
              },
              {
                "fact": "Updates can be performed through the applicable Aadhaar update process.",
                "overlap": 0.2857
              }
            ],
            "chunk": "lds (name, gender and date of birth) in y our Aadhaar again (beyond the permissible limit), you need to: 1. Visit an y Aadhaar Enr olment Cen tre (with v alid supporting docume nt f or N ame & Da te of Birth upda te) 2. Place an up date request 3. Send the latest URN (Update Request Number) to Aadhaar help centre by calling 1947 or via email to help@uidai.gov.in and request for \u2018exception update\u2019 The c ase is then assigne d t o the UID AI\u2019s R egional Office tha t handles y our r egion f or due dilig ence. Once verified, your update request will be processed and the outcome communicated to you. 3.7 Upda te in case of Aadhaar Deactivation Y our Aadhaar data is subject to periodic quality checks. During such quality checks by UIDAI, if any discr epancy is f ound in the supporting documen ts or c aptured biome tric da ta of a r esident, his/her Aadhaar is deactiv ated t emporarily and the Aadhaar holder is duly notified of this. If y our Aadhaar gets suspended, you would not be able to ava"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 25,
            "distance": 0.4891921877861023,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "The resident should request an update/correction of the incorrect information.",
                "overlap": 0.2857
              },
              {
                "fact": "Updates can be performed through the applicable Aadhaar update process.",
                "overlap": 0.2857
              },
              {
                "fact": "Valid supporting documents may be required depending on the field being corrected.",
                "overlap": 0.25
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 25 Aadhaar Handbook for Residents 2021-Ver.2.0 To file a complaint SCAN can download and print the Aadhaar Enrolment/Update from the link below https://www. uidai.gov.in/images/commdoc/valid_documents_list.pdf. R esident c an bring the filled f orm t o an y centre to avoid mistakes 5.2 Ho w to complaint if the centre charges you extra or if you are not satisfied with the service If the centre charged you more than the prescribed service charge men tioned abo ve, y ou c an file a c omplaint in f ollowing w ays: \u2022 Call 1947 and r egister a complaint \u2022 Email the cen tre details along with your URN and contact details to help@uidai.gov.in \u2022 File a c omplaint online fr om: h ttps://resident.uidai. gov.in/file-complaint \u2022 R esident can complaint with the concerned Registrar, details of the registrar are available at your centre."
          },
          {
            "source": "UIAI_1.pdf",
            "page": 5,
            "distance": 0.498706579208374,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "The resident should request an update/correction of the incorrect information.",
                "overlap": 0.4286
              },
              {
                "fact": "Updates can be performed through the applicable Aadhaar update process.",
                "overlap": 0.4286
              },
              {
                "fact": "Valid supporting documents may be required depending on the field being corrected.",
                "overlap": 0.375
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 5 Aadhaar Handbook for Residents 2021-Ver.2.0 9.3 How you can further protect your Aadhaar Information 39 SE CTION 10: GRIEVANCE HANDLING 40 10.1 Aadhaar Sampa rk Kendra - Helpline 1947 40 10.2 Help via Email 41 10.3 Aadhaar W ebsite 41 10.4 Aadhaar Cha tbot 42 10.5 So cial Media 43 10.5.1 Official Social Media Profiles: 43 10.5.2 Beware of Fake Profiles/ User Accounts 45 10.6 Aadhaar Regional Offices 46 SE CTION 11: THE AADHAAR ACT 2016 48 11.1 Responsibilities of UIDAI 49 SE CTION 12: AADHAAR ( ENROLMENT AN D UPD ATE) RE GULATIONS, 2 016 50 12.1 CHAP TER II - Resident Enrolment Process 50 12.2 CHAPTER IV - Update of Resident Information 52 12.3 CHAPTER VI - Omission or Deactivation of Aadhaar Number and Identity Information 53 SE CTION 13: APPENDIX 56 13.1 Annexure I - List of valid supporting documents 56 13.2 Annexure II \u2013 Format for Certificate (For Aadhaar Enrolment/ Update) 58 13.3 Annexure III \u2013 How to fill (Certifica"
          }
        ]
      },
      "response": {
        "answer": "The user needs to contact the UID AI's regional office, which handles all residents for due diligence. They can then file a complaint with them and provide necessary details such as your name (name), gender(gender) , date of birth (date of Birth). The unique identification authority will process this request once verified by their official channels or through email to help@uidai.gov.in .\n",
        "latency_seconds": 27.464832727999237,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 3,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 20,
      "question": "What is demographic authentication?",
      "model": "deepseek-coder:1.3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.11473259200101893,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 36
          },
          {
            "source": "UIAI_1.pdf",
            "page": 37
          },
          {
            "source": "UIAI_1.pdf",
            "page": 39
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 36,
            "distance": 0.6933571100234985,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Demographic authentication is authentication using demographic information associated with Aadhaar.",
                "overlap": 0.6
              },
              {
                "fact": "It is one of the modes of Aadhaar authentication.",
                "overlap": 0.75
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 36Aadhaar Handbook for Residents 2021-Ver.2.0 You will receive any Aadhaar-based credits in only one account that you have mapped to the NPCI mapper. \u2022 Upda te Demographic Online: If you have your Aadhaar registered mobile number, you can place an online demographic details update request using the SSUP (self- service update portal) of Aadhaar. This service requires mandatory OTP authentication \u2022 Aadhaar Bank Linking Status: You can check your Aadhaar and Bank Account Linking Status in NPCI mapper using this service. This service requires mandatory OTP authentication. \u2022 Aadhaar Update History: You can use this service to get a chronological history of all updates done in your Aadhaar. The OTP for this service will be sent to your registered mobile number \u2022 V erify Email/ Mobile Number: You can use this service to verify their email or mobile number in your Aadhaar. The OTP for this service will be sent to your registered mobi"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 1,
        "expected_fact_count": 2,
        "facts_with_context_support": [
          "Demographic authentication is authentication using demographic information associated with Aadhaar.",
          "It is one of the modes of Aadhaar authentication."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 36,
            "distance": 0.6933571100234985,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Demographic authentication is authentication using demographic information associated with Aadhaar.",
                "overlap": 0.6
              },
              {
                "fact": "It is one of the modes of Aadhaar authentication.",
                "overlap": 0.75
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 36Aadhaar Handbook for Residents 2021-Ver.2.0 You will receive any Aadhaar-based credits in only one account that you have mapped to the NPCI mapper. \u2022 Upda te Demographic Online: If you have your Aadhaar registered mobile number, you can place an online demographic details update request using the SSUP (self- service update portal) of Aadhaar. This service requires mandatory OTP authentication \u2022 Aadhaar Bank Linking Status: You can check your Aadhaar and Bank Account Linking Status in NPCI mapper using this service. This service requires mandatory OTP authentication. \u2022 Aadhaar Update History: You can use this service to get a chronological history of all updates done in your Aadhaar. The OTP for this service will be sent to your registered mobile number \u2022 V erify Email/ Mobile Number: You can use this service to verify their email or mobile number in your Aadhaar. The OTP for this service will be sent to your registered mobi"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 33,
            "distance": 0.7304410338401794,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Demographic authentication is authentication using demographic information associated with Aadhaar.",
                "overlap": 0.4
              },
              {
                "fact": "It is one of the modes of Aadhaar authentication.",
                "overlap": 0.25
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 33 Aadhaar Handbook for Residents 2021-Ver.2.0 7.2 Secur e QR Code on Aadhaar Th e Aadhaar letter, Aadhaar PVC Card and eAadhaar contain a digit ally signed secure QR code that has demographic details of the Aadhaar holder with photograph. This QR Code can be used to verify the identity of the Aadhaar holder . Th e service provider needs to use Aadhaar QR Code Scanner App (also available in mAadhaar) to scan the Secure QR Code on the presented Aadhaar. Aadhaar Offline Verification made easy using Secure QR Code To read more about Secure QR Code SCAN To watch tutorial on the Secure QR Code SCAN"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 20,
            "distance": 0.7322732210159302,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Demographic authentication is authentication using demographic information associated with Aadhaar.",
                "overlap": 0.6
              },
              {
                "fact": "It is one of the modes of Aadhaar authentication.",
                "overlap": 0.25
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 20Aadhaar Handbook for Residents 2021-Ver.2.0 3.5 Li mits on number of updates As per the update policy of UIDAI, the following limits have been set for update of demographic information in their Aadhaar: \u2022 Name \u2013 Can be updated twice \u2022 Gender \u2013 Once \u2022 Date of Birth \u2013 Once Th e pr ocess f or the abo ve upda tes within the permissible limits is same as described in Section 3.1 abo ve. An y other in formation in y our Aadhaar c an be upda ted as and when r equired. Ther e is no limit on the number of updates for any other demographic information \u2013 address, email ID, mobile number; or biometrics \u2013 photograph, fingerprints, iris scans. 3.6 Ex ception Process for Aadhaar Update If for any reason, you need to update the above three fields (name, gender and date of birth) in y our Aadhaar again (beyond the permissible limit), you need to: 1. Visit an y Aadhaar Enr olment Cen tre (with v alid supporting docume nt f or N ame & Da te o"
          }
        ]
      },
      "response": {
        "answer": "Demographic Authentication, also known as Personal Identification (PIN), refers to the process of verifying a person's identity by providing their personal details such as name and date of birth. This method uses an Aadhaar card which is unique for each individual in India. The PIN used during this authentication can be verified using various methods, including online services or mobile applications that provide secure QR codes to scan the digital ID on a physical device like smartphone (Aadhaar Scanner App).\n",
        "latency_seconds": 23.088440592999177,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 2,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 21,
      "question": "What is biometric authentication?",
      "model": "deepseek-coder:1.3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.05033499099954497,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 19
          },
          {
            "source": "UIAI_1.pdf",
            "page": 20
          },
          {
            "source": "UIAI_1.pdf",
            "page": 39
          },
          {
            "source": "UIAI_1.pdf",
            "page": 50
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 20,
            "distance": 0.6603267192840576,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Biometric authentication uses biometric information associated with the resident's Aadhaar.",
                "overlap": 0.4286
              },
              {
                "fact": "Biometric information includes characteristics such as fingerprints and iris scans.",
                "overlap": 0.25
              },
              {
                "fact": "Biometric authentication is one of the modes through which Aadhaar can be authenticated.",
                "overlap": 0.4286
              }
            ],
            "chunk": "r c aptured biome tric da ta of a r esident, his/her Aadhaar is deactiv ated t emporarily and the Aadhaar holder is duly notified of this. If y our Aadhaar gets suspended, you would not be able to avail any service based on Aadhaar OTP/ biometric authentication. In such c ases, the Aadhaar holder needs to follow the below steps: 1. R efer t o the e mail/ SMS/ le tter b y UID AI or c all 1947 t o kno w sub sequent c ourse of action. 2. If the deactiv ation is due t o biome trics r elated r eason, visit an y Aadhaar Enr olment Cen tre and update your biometrics. Name can be updated TWICE Gender can be updated only ONCE Want to update Date of Birth, Name and Gender in Aadhaar? Date of birth can be updated only ONCE NOTE THE FOLLOWING"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 1,
        "expected_fact_count": 3,
        "facts_with_context_support": [
          "Biometric authentication uses biometric information associated with the resident's Aadhaar.",
          "Biometric information includes characteristics such as fingerprints and iris scans.",
          "Biometric authentication is one of the modes through which Aadhaar can be authenticated."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 20,
            "distance": 0.6603267192840576,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Biometric authentication uses biometric information associated with the resident's Aadhaar.",
                "overlap": 0.4286
              },
              {
                "fact": "Biometric information includes characteristics such as fingerprints and iris scans.",
                "overlap": 0.25
              },
              {
                "fact": "Biometric authentication is one of the modes through which Aadhaar can be authenticated.",
                "overlap": 0.4286
              }
            ],
            "chunk": "r c aptured biome tric da ta of a r esident, his/her Aadhaar is deactiv ated t emporarily and the Aadhaar holder is duly notified of this. If y our Aadhaar gets suspended, you would not be able to avail any service based on Aadhaar OTP/ biometric authentication. In such c ases, the Aadhaar holder needs to follow the below steps: 1. R efer t o the e mail/ SMS/ le tter b y UID AI or c all 1947 t o kno w sub sequent c ourse of action. 2. If the deactiv ation is due t o biome trics r elated r eason, visit an y Aadhaar Enr olment Cen tre and update your biometrics. Name can be updated TWICE Gender can be updated only ONCE Want to update Date of Birth, Name and Gender in Aadhaar? Date of birth can be updated only ONCE NOTE THE FOLLOWING"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 64,
            "distance": 0.6823380589485168,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Biometric authentication uses biometric information associated with the resident's Aadhaar.",
                "overlap": 0.2857
              },
              {
                "fact": "Biometric authentication is one of the modes through which Aadhaar can be authenticated.",
                "overlap": 0.2857
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 64Aadhaar Handbook for Residents 2021-Ver.2.0 Verify Aadhaar SCAN Lock/ Unlock Aadhaar SCAN Check your Aadhaar Update History SCAN Update Address Without Documents SCAN Secure QR Code SCAN Locate Aadhaar Enrolment Centre SCAN Verify Digital Signature SCAN Get back your lost Aadhaar number or Enrolment ID SCAN Check status of your Aadhaar enrolment or update request SCAN mAadhaar App SCAN Download Aadhaar SCAN Generate/ Retrieve VID SCAN Check your Aadhaar Authentication History SCAN Check Status of your online update request SCAN Online Appointment Booking SCAN Update Address Online SCAN What is EID SCAN Lock/ Unlock Biometrics SCAN Order Aadhaar Reprint SCAN Aadhaar Chatbot SCAN 13.5 Aadhaar T utorial Videos"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 52,
            "distance": 0.6998177766799927,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Biometric information includes characteristics such as fingerprints and iris scans.",
                "overlap": 0.5
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 52Aadhaar Handbook for Residents 2021-Ver.2.0 the r elationship be tween the link ed par ent/guardian and the child shall be c ollected a t the time of enr olment. Only those childr en c an be enr olled based on the r elationship documen t (P oR), whose names ar e r ecorded in the r elationship documen t. 6. Enr olment of residents with biometric exceptions. \u2014 (1) F or r esidents who ar e unable t o pr ovide fing erprints, o wing t o r easons such as injur y, de formities, amput ation of the fing ers/ hands or an y other r elevant r eason, only iris scans of such residents will be collected. (2) F or r esidents who ar e unable t o pr ovide an y biome tric in formation c ontemplated b y these r egulations, the Authority shall pr ovide f or han dling of such e xceptions in the enrolment and upda te software, and such enr olment shall be carried out as per the procedure as may be specified by the Authority for this purpose. 12.2"
          }
        ]
      },
      "response": {
        "answer": "Biometrics refers to a method of identification that uses physical characteristics such as fingerprints, facial recognition or voice data in place of password-like identifiers like usernames and passphrases. It's used for various purposes including user verification (logging into systems), access control, health information tracking etc., where the use of sensitive personal details is minimized to enhance security while maintaining privacy.\n",
        "latency_seconds": 22.342046255998866,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 3,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": true,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 22,
      "question": "What is Aadhaar authentication?",
      "model": "deepseek-coder:1.3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.11199799700079893,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 7
          },
          {
            "source": "UIAI_1.pdf",
            "page": 36
          },
          {
            "source": "UIAI_1.pdf",
            "page": 37
          },
          {
            "source": "UIAI_1.pdf",
            "page": 38
          },
          {
            "source": "UIAI_1.pdf",
            "page": 39
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 37,
            "distance": 0.3674051761627197,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Aadhaar authentication is an online process through which Aadhaar identity can be verified.",
                "overlap": 0.4286
              },
              {
                "fact": "Authentication can involve demographic, biometric or OTP-based authentication.",
                "overlap": 0.3333
              },
              {
                "fact": "The authentication response can be a yes/no verification response.",
                "overlap": 0.25
              },
              {
                "fact": "Aadhaar authentication does not provide the requesting entity unrestricted access to the resident's Aadhaar database.",
                "overlap": 0.25
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 37 Aadhaar Handbook for Residents 2021-Ver.2.0 To read FAQs SCAN \u2022 Aadhaar Authentication History: Using this service, you can g et de tails of authen tication perf ormed b y y ou in pas t 6 mon ths. The OTP for this service will be sent to your registered mobile number. \u2022 Offline eKYC Service: Using this service, you can generate your digitally signed Aadhaar details that you may use for KYC purposes. To know more about Aadhaar Authentication History SCAN To know more about Aadhaar Paperless Offline eKYC: SCAN 8.3 Fr equently Asked Questions UID AI also has e xtensive F AQs section on the w ebsite and mAadhaar app to help residents understand Aadhaar process, services and products."
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 1,
        "expected_fact_count": 4,
        "facts_with_context_support": [
          "Aadhaar authentication is an online process through which Aadhaar identity can be verified.",
          "Authentication can involve demographic, biometric or OTP-based authentication.",
          "The authentication response can be a yes/no verification response.",
          "Aadhaar authentication does not provide the requesting entity unrestricted access to the resident's Aadhaar database."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 33,
            "distance": 0.342551589012146,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Aadhaar authentication is an online process through which Aadhaar identity can be verified.",
                "overlap": 0.2857
              },
              {
                "fact": "The authentication response can be a yes/no verification response.",
                "overlap": 0.25
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 33 Aadhaar Handbook for Residents 2021-Ver.2.0 7.2 Secur e QR Code on Aadhaar Th e Aadhaar letter, Aadhaar PVC Card and eAadhaar contain a digit ally signed secure QR code that has demographic details of the Aadhaar holder with photograph. This QR Code can be used to verify the identity of the Aadhaar holder . Th e service provider needs to use Aadhaar QR Code Scanner App (also available in mAadhaar) to scan the Secure QR Code on the presented Aadhaar. Aadhaar Offline Verification made easy using Secure QR Code To read more about Secure QR Code SCAN To watch tutorial on the Secure QR Code SCAN"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 37,
            "distance": 0.3674051761627197,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Aadhaar authentication is an online process through which Aadhaar identity can be verified.",
                "overlap": 0.4286
              },
              {
                "fact": "Authentication can involve demographic, biometric or OTP-based authentication.",
                "overlap": 0.3333
              },
              {
                "fact": "The authentication response can be a yes/no verification response.",
                "overlap": 0.25
              },
              {
                "fact": "Aadhaar authentication does not provide the requesting entity unrestricted access to the resident's Aadhaar database.",
                "overlap": 0.25
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 37 Aadhaar Handbook for Residents 2021-Ver.2.0 To read FAQs SCAN \u2022 Aadhaar Authentication History: Using this service, you can g et de tails of authen tication perf ormed b y y ou in pas t 6 mon ths. The OTP for this service will be sent to your registered mobile number. \u2022 Offline eKYC Service: Using this service, you can generate your digitally signed Aadhaar details that you may use for KYC purposes. To know more about Aadhaar Authentication History SCAN To know more about Aadhaar Paperless Offline eKYC: SCAN 8.3 Fr equently Asked Questions UID AI also has e xtensive F AQs section on the w ebsite and mAadhaar app to help residents understand Aadhaar process, services and products."
          },
          {
            "source": "UIAI_1.pdf",
            "page": 4,
            "distance": 0.38354194164276123,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Aadhaar authentication is an online process through which Aadhaar identity can be verified.",
                "overlap": 0.2857
              },
              {
                "fact": "The authentication response can be a yes/no verification response.",
                "overlap": 0.25
              }
            ],
            "chunk": "eration 26 6.2 Aadhaar Letter 26 6.3 Do wnload eAadhaar 27 6.3.1 O TP to download Aadhaar & Password 28 6.3.2 Validating the digital signature on eAadhaar 28 6.3.3 Do wnloaded Aadhaar is legally valid 28 6.3.4 F eatures of eAadhaar 29 6.4 Aadhaar P VC Card 29 6.5 mAadhaar Mob ile App 30 SE CTION 7: VERIFICATION OF AADHAAR 3 2 7.1 V erify any Aadhaar Online 32 7.2 Secur e QR Code on Aadhaar 33 SE CTION 8: AADHAAR ONLINE SERVICES 34 8.1 Aadhaar Online Services (that DO NOT require Registered Mobile Number) 34 8.2 Aadhaar Online Services (that require Registered Mobile Number) 35 8.3 Frequently Asked Questions 37 SE CTION 9: PRIVACY AND SECURITY OF YOUR AADHAAR DATA 38 9.1 UIDAI Protecting privacy and information 38 9.2 Da ta Security in CIDR 39"
          }
        ]
      },
      "response": {
        "answer": "AADHAAR (Unique Identification Authority of India Government of India) Authentication refers to the process by which a person's identity information, such as name and date of birth or PAN number, can be verified. This is done using Aadhaar-based services provided in mobile applications like UIDAI App for Android users (also available on iOS), eAadhaar app etc., to verify the authenticity of a person's identity information stored inside an individual\u2019s digital wallet or card such as AADHAAR.\n",
        "latency_seconds": 24.54891101999965,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 4,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 23,
      "question": "Can a resident update Aadhaar information?",
      "model": "deepseek-coder:1.3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.22313987699999416,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 17
          },
          {
            "source": "UIAI_1.pdf",
            "page": 18
          },
          {
            "source": "UIAI_1.pdf",
            "page": 20
          },
          {
            "source": "UIAI_1.pdf",
            "page": 36
          },
          {
            "source": "UIAI_1.pdf",
            "page": 52
          }
        ],
        "gold_locations_retrieved": [],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 0,
        "expected_fact_count": 3,
        "facts_with_context_support": [
          "Yes, an Aadhaar number holder can request alteration/update of demographic or biometric information.",
          "Updates can be performed through an enrolment centre.",
          "Some demographic updates can also be performed online using the applicable self-service process when the registered mobile number is available."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 16,
            "distance": 0.415986031293869,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Yes, an Aadhaar number holder can request alteration/update of demographic or biometric information.",
                "overlap": 0.3
              }
            ],
            "chunk": "should check details of your Aadhaar for any other required update. 3.1 Documen ts Required for Update Y ou need t o submit a v alid supporting documen t f or v erification f or upda ting f ollowing de tails in y our Aadhaar: \u2022 Name \u2022 Addr ess \u2022 Da te of Birth When you update your Aadhaar, only your Aadhaar details get updated, the Aadhaar number shall remain same."
          },
          {
            "source": "UIAI_1.pdf",
            "page": 16,
            "distance": 0.4215809404850006,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Yes, an Aadhaar number holder can request alteration/update of demographic or biometric information.",
                "overlap": 0.5
              },
              {
                "fact": "Updates can be performed through an enrolment centre.",
                "overlap": 0.4
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 16Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 3: AADHAAR UPDATE You can update any demographic details (name, address, date of birth, gender, mobile number or email ID), or biometric details (photograph, fingerprints, iris scan) in your Aadhaar from any Aadhaar Enrolment Centre across the country. You can get more than one entry updated in Aadhaar Enrolment Centre at the same time . The fee for update of single entry (such as address) and multiple entries (such as address, mobile phone number, email address etc.) is the same. So upda ting all those en tries t ogether which need t o be upda ted is both c onvenient and c ost e ffective f or y ou. Ther efore, be fore visiting Aadhaar Enr olment Cen tre f or an upda te, y ou should check details of your Aadhaar for any other required update. 3.1 Documen ts Required for Update Y ou need t o submit a v alid supporting documen t f or v erification f or upda ting f ollowing d"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 21,
            "distance": 0.42346474528312683,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Yes, an Aadhaar number holder can request alteration/update of demographic or biometric information.",
                "overlap": 0.4
              },
              {
                "fact": "Updates can be performed through an enrolment centre.",
                "overlap": 0.4
              },
              {
                "fact": "Some demographic updates can also be performed online using the applicable self-service process when the registered mobile number is available.",
                "overlap": 0.3077
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 21 Aadhaar Handbook for Residents 2021-Ver.2.0 3. If the deactiv ation is due t o docu ments r elated r eason, c ontact/visit the c oncerned Aadhaar Regional Office for update after due diligence. 3.8 Aadhaar Upd ate Status Check Y ou can use the 8 digit Update Request Number (URN) mentioned on the upda te ackno wledgement slip t o check the s tatus of your Aadhaar update request from: \u2022 Calling Aadhaar helpline \u2013 1947 \u2022 Sending email t o help@uidai.gov.in \u2022 Visiting uidai.gov.in \u2022 Thr ough mAadhaar App On success ful submission of an online address update request via SSUP , you receive a URN (Update Request Number). This is shown on screen and also sent via SMS to your registered mobile number. Use this URN and your Aadhaar number to track s tatus of y our Aadhaar upda te fr om: h ttps://ssup.uidai. gov.in/checkSSUPStatus/checkupdatestatus. 3.9 P oints to remember for Aadhaar Update at Aadhaar Enrolment Centre 1. An y Aadhaa"
          }
        ]
      },
      "response": {
        "answer": "Yes, the user can update their personal details in an online form provided by UIDAI (Unique Identification Authority of India). This includes name and address. However, for biometric data like photographs or fingerprints that are not included as part of Aadhaar information itself cannot be updated directly through this process due to privacy concerns related with these sensitive details. \n\nFor updating the other personal identifiable attributes such as date of birth (DOB), gender and mobile number, you need a valid supporting document or verification from your UIDAI representative for each attribute separately which can take upto two days in most Aadhaar Enrolment Centres across India to complete. \n\nPlease note that the process may vary based on various factors like location of residence (Aadhaar enrolment centre), language preference, and other specific requirements set by UIDAI or your local government for updating personal details such as DOB in Aadhaars due to privacy concerns related with these sensitive attributes.\n",
        "latency_seconds": 30.14767289700103,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 3,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 24,
      "question": "What types of information can be updated in Aadhaar?",
      "model": "deepseek-coder:1.3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.1305270680004469,
        "gold_locations": [
          {
            "source": "UIAI_1.pdf",
            "page": 17
          },
          {
            "source": "UIAI_1.pdf",
            "page": 20
          },
          {
            "source": "UIAI_1.pdf",
            "page": 52
          }
        ],
        "gold_locations_retrieved": [
          {
            "source": "UIAI_1.pdf",
            "page": 20,
            "distance": 0.47000300884246826,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Name, gender and date of birth can be updated subject to the stated limits.",
                "overlap": 0.625
              },
              {
                "fact": "Email ID and mobile number can be updated.",
                "overlap": 0.5
              }
            ],
            "chunk": "lds (name, gender and date of birth) in y our Aadhaar again (beyond the permissible limit), you need to: 1. Visit an y Aadhaar Enr olment Cen tre (with v alid supporting docume nt f or N ame & Da te of Birth upda te) 2. Place an up date request 3. Send the latest URN (Update Request Number) to Aadhaar help centre by calling 1947 or via email to help@uidai.gov.in and request for \u2018exception update\u2019 The c ase is then assigne d t o the UID AI\u2019s R egional Office tha t handles y our r egion f or due dilig ence. Once verified, your update request will be processed and the outcome communicated to you. 3.7 Upda te in case of Aadhaar Deactivation Y our Aadhaar data is subject to periodic quality checks. During such quality checks by UIDAI, if any discr epancy is f ound in the supporting documen ts or c aptured biome tric da ta of a r esident, his/her Aadhaar is deactiv ated t emporarily and the Aadhaar holder is duly notified of this. If y our Aadhaar gets suspended, you would not be able to ava"
          }
        ],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 1,
        "expected_fact_count": 5,
        "facts_with_context_support": [
          "Demographic information can be updated.",
          "Address can be updated.",
          "Name, gender and date of birth can be updated subject to the stated limits.",
          "Email ID and mobile number can be updated.",
          "Biometric information such as photograph, fingerprints and iris scans can be updated."
        ],
        "facts_missing_from_retrieved_context": [],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 16,
            "distance": 0.3720545172691345,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Demographic information can be updated.",
                "overlap": 0.3333
              },
              {
                "fact": "Address can be updated.",
                "overlap": 0.5
              },
              {
                "fact": "Name, gender and date of birth can be updated subject to the stated limits.",
                "overlap": 0.375
              },
              {
                "fact": "Email ID and mobile number can be updated.",
                "overlap": 0.5
              }
            ],
            "chunk": "should check details of your Aadhaar for any other required update. 3.1 Documen ts Required for Update Y ou need t o submit a v alid supporting documen t f or v erification f or upda ting f ollowing de tails in y our Aadhaar: \u2022 Name \u2022 Addr ess \u2022 Da te of Birth When you update your Aadhaar, only your Aadhaar details get updated, the Aadhaar number shall remain same."
          },
          {
            "source": "UIAI_1.pdf",
            "page": 16,
            "distance": 0.41792237758636475,
            "gold_location": false,
            "supporting_facts": [
              {
                "fact": "Demographic information can be updated.",
                "overlap": 0.6667
              },
              {
                "fact": "Address can be updated.",
                "overlap": 1.0
              },
              {
                "fact": "Name, gender and date of birth can be updated subject to the stated limits.",
                "overlap": 0.625
              },
              {
                "fact": "Email ID and mobile number can be updated.",
                "overlap": 1.0
              },
              {
                "fact": "Biometric information such as photograph, fingerprints and iris scans can be updated.",
                "overlap": 0.75
              }
            ],
            "chunk": "Unique Identification Authority of India Government of India 16Aadhaar Handbook for Residents 2021-Ver.2.0 SECTION 3: AADHAAR UPDATE You can update any demographic details (name, address, date of birth, gender, mobile number or email ID), or biometric details (photograph, fingerprints, iris scan) in your Aadhaar from any Aadhaar Enrolment Centre across the country. You can get more than one entry updated in Aadhaar Enrolment Centre at the same time . The fee for update of single entry (such as address) and multiple entries (such as address, mobile phone number, email address etc.) is the same. So upda ting all those en tries t ogether which need t o be upda ted is both c onvenient and c ost e ffective f or y ou. Ther efore, be fore visiting Aadhaar Enr olment Cen tre f or an upda te, y ou should check details of your Aadhaar for any other required update. 3.1 Documen ts Required for Update Y ou need t o submit a v alid supporting documen t f or v erification f or upda ting f ollowing d"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 20,
            "distance": 0.47000300884246826,
            "gold_location": true,
            "supporting_facts": [
              {
                "fact": "Name, gender and date of birth can be updated subject to the stated limits.",
                "overlap": 0.625
              },
              {
                "fact": "Email ID and mobile number can be updated.",
                "overlap": 0.5
              }
            ],
            "chunk": "lds (name, gender and date of birth) in y our Aadhaar again (beyond the permissible limit), you need to: 1. Visit an y Aadhaar Enr olment Cen tre (with v alid supporting docume nt f or N ame & Da te of Birth upda te) 2. Place an up date request 3. Send the latest URN (Update Request Number) to Aadhaar help centre by calling 1947 or via email to help@uidai.gov.in and request for \u2018exception update\u2019 The c ase is then assigne d t o the UID AI\u2019s R egional Office tha t handles y our r egion f or due dilig ence. Once verified, your update request will be processed and the outcome communicated to you. 3.7 Upda te in case of Aadhaar Deactivation Y our Aadhaar data is subject to periodic quality checks. During such quality checks by UIDAI, if any discr epancy is f ound in the supporting documen ts or c aptured biome tric da ta of a r esident, his/her Aadhaar is deactiv ated t emporarily and the Aadhaar holder is duly notified of this. If y our Aadhaar gets suspended, you would not be able to ava"
          }
        ]
      },
      "response": {
        "answer": "In an Aadhaar (Individual Universal ID), the following details are typically updatable by users. These include name, address, date of birth and gender if they wish to change them due to any reason such as marriage or divorce etc., along with biometric data like photographs, fingerprints, iris scans for identification verification purposes:\n\n1. Name - This is the full legal first name + last name (if applicable). The Aadhaar system will update this information in real-time and it'll be visible to all users who have access to your account on any mobile or web application, including those using a different device for accessing same data if you choose.\n2. Address - This is the complete address where one lives with full details (street name + house number). The Aadhaar system will update this information in real-time and it'll be visible to all users who have access to your account on any mobile or web application, including those using a different device for accessing same data if you choose.\n3. Date of Birth - This is the date when one was born (in DDMMYY format). The Aadhaar system will update this information in real-time and it'll be visible to all users who have access to your account on any mobile or web application, including those using a different device for accessing same data if you choose.\n4. Gender - This is the gender of one (Male/Female). The Aadhaar system will update this information in real-time and it'll be visible to all users who have access to your account on any mobile or web application, including those using a different device for accessing same data if you choose.\n5. Mobile Number - This is the phone number where one lives with full details (country code + actual Phone No). The Aadhaar system will update this information in real-time and it'll be visible to all users who have access to your account on any mobile or web application, including those using a different device for accessing same data if you choose.\n6. Email ID - This is the email address where one lives with full details (email id + domain). The Aadhaar system will update this information in real-time and it'll be visible to all users who have access to your account on any mobile or web application, including those using a different device for accessing same data if you choose.\n7. Biometric Data - This includes photographs (if one has taken them), fingerprints/iris scans(for identification verification purposes). The Aadhaar system will update these details in real-time and it'll be visible to all users who have access to your account on any mobile or web application, including those using a different device for accessing same data if you choose.\n",
        "latency_seconds": 57.896538172000874,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 1.0,
        "facts_supported_by_context": 5,
        "facts_missing_from_context": 0,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Retrieved context contains support for all expected facts; response should be checked for faithful use of that evidence."
      }
    },
    {
      "question_id": 25,
      "question": "What should be done if the requested information is not available in the Aadhaar Handbook?",
      "model": "deepseek-coder:1.3b",
      "retrieval": {
        "top_k": 3,
        "retrieval_latency_seconds": 0.11597050899945316,
        "gold_locations": [],
        "gold_locations_retrieved": [],
        "retrieved_chunk_count": 3,
        "retrieved_gold_location_count": 0,
        "expected_fact_count": 3,
        "facts_with_context_support": [],
        "facts_missing_from_retrieved_context": [
          "The assistant should not invent or fabricate information that is not supported by the handbook.",
          "The assistant should clearly state that the requested information is not available in the provided handbook.",
          "Where appropriate, the resident should be directed to the official UIDAI information channels for further information."
        ],
        "chunk_analysis": [
          {
            "source": "UIAI_1.pdf",
            "page": 16,
            "distance": 0.4864501953125,
            "gold_location": false,
            "supporting_facts": [],
            "chunk": "should check details of your Aadhaar for any other required update. 3.1 Documen ts Required for Update Y ou need t o submit a v alid supporting documen t f or v erification f or upda ting f ollowing de tails in y our Aadhaar: \u2022 Name \u2022 Addr ess \u2022 Da te of Birth When you update your Aadhaar, only your Aadhaar details get updated, the Aadhaar number shall remain same."
          },
          {
            "source": "UIAI_1.pdf",
            "page": 20,
            "distance": 0.49763184785842896,
            "gold_location": false,
            "supporting_facts": [],
            "chunk": "lds (name, gender and date of birth) in y our Aadhaar again (beyond the permissible limit), you need to: 1. Visit an y Aadhaar Enr olment Cen tre (with v alid supporting docume nt f or N ame & Da te of Birth upda te) 2. Place an up date request 3. Send the latest URN (Update Request Number) to Aadhaar help centre by calling 1947 or via email to help@uidai.gov.in and request for \u2018exception update\u2019 The c ase is then assigne d t o the UID AI\u2019s R egional Office tha t handles y our r egion f or due dilig ence. Once verified, your update request will be processed and the outcome communicated to you. 3.7 Upda te in case of Aadhaar Deactivation Y our Aadhaar data is subject to periodic quality checks. During such quality checks by UIDAI, if any discr epancy is f ound in the supporting documen ts or c aptured biome tric da ta of a r esident, his/her Aadhaar is deactiv ated t emporarily and the Aadhaar holder is duly notified of this. If y our Aadhaar gets suspended, you would not be able to ava"
          },
          {
            "source": "UIAI_1.pdf",
            "page": 21,
            "distance": 0.5259160995483398,
            "gold_location": false,
            "supporting_facts": [],
            "chunk": "Update Request Number, follow the process to retrieve EID as described in Sec. 2.5.1 5. If your update request gets rejected, you can call 1947 and get the reason for rejection and take corrective measure before you place another update request. 6. If your Aadhaar shows \u2018Invalid\u2019 , call 1947 to get further guidance. 7. If your Aadhaar letter has only \u2018Year of Birth\u2019 printed, DO NOT UPDATE. Just download your latest Aadhaar or Order Aadhaar Reprint from uidai.gov.in to get your Aadhaar showing complete Date of Birth. 3.10 P oints to remember for Aadhaar Update A r esident who is an Aadhaar number hold er ma y, upon a ttaining the ag e of eigh teen y ears, mak e an applic ation f or c ancellation of his/her Aadhaar number t o R egional Office of UID AI within a period of six months from the date of attaining the age of eighteen years. Th e r esident will be r equired t o visit the R egional Office a t a s tipulated da te and time f or es tablishing his/her iden tity thr ough Aadhaar auth"
          }
        ]
      },
      "response": {
        "answer": "The user's question seems to have been cut off. Could you please provide more context or clarify what specific issue they are facing with their Aadhaar details and how it relates to computer science, if this is a programming-related problem that requires information from an external source such as the UIAI_1 Handbook?\n",
        "latency_seconds": 20.771218562000286,
        "error": null
      },
      "rag_flow_analysis": {
        "context_fact_coverage": 0.0,
        "facts_supported_by_context": 0,
        "facts_missing_from_context": 3,
        "model_abstained": false,
        "unsupported_claim_signal": false,
        "assessment": "Inappropriate answer: expected abstention because the rubric provides no gold evidence."
      }
    }
  ]
};
