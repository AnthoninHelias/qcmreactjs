-- Adminer 4.8.1 PostgreSQL 16.0 (Debian 16.0-1.pgdg120+1) dump

DROP TABLE IF EXISTS "question";
DROP SEQUENCE IF EXISTS question_id_seq;
CREATE SEQUENCE question_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "questionnaire"."question" (
    "id" integer DEFAULT nextval('question_id_seq') NOT NULL,
    "intitule" text NOT NULL,
    CONSTRAINT "question_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "question" ("id", "intitule") VALUES
(1,	'Quelle est la couleur du cheval blanc d''Henri IV ?'),
(3,	'Quel est le surnom de Louis XIV ?'),
(2,	'Quelle est la capitale de la Russie? ');

DROP TABLE IF EXISTS "reponse";
DROP SEQUENCE IF EXISTS reponse_id_new_seq;
CREATE SEQUENCE reponse_id_new_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "questionnaire"."reponse" (
    "titre" text NOT NULL,
    "correct" boolean NOT NULL,
    "question_id" integer NOT NULL,
    "id" integer DEFAULT nextval('reponse_id_new_seq') NOT NULL,
    CONSTRAINT "reponse_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "reponse" ("titre", "correct", "question_id", "id") VALUES
('blanc',	't',	1,	1),
('noir',	'f',	1,	2),
('rouge',	'f',	1,	3),
('Mossoul',	'f',	2,	4),
('Berlin',	'f',	2,	5),
('Moscou',	't',	2,	6),
('Le roi lion',	'f',	3,	7),
('Le roi joli',	'f',	3,	8),
('Le roi soleil',	't',	3,	9);

ALTER TABLE ONLY "questionnaire"."reponse" ADD CONSTRAINT "reponse_question_id_fkey" FOREIGN KEY (question_id) REFERENCES question(id) NOT DEFERRABLE;

-- 2024-03-27 13:33:46.156628+00
