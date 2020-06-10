CREATE DATABASE intervie_bit;
USE interview_bit;
CREATE TABLE day(
	number INT,
	date VARCHAR(10),
	link VARCHAR(255),
	topic VARCHAR(255),
	sub_topic_count INT
);
CREATE TABLE data(
	number INT,
	sub_topic_num INT,
	abhi BOOLEAN,
	sita BOOLEAN,
	harsha BOOLEAN
);
