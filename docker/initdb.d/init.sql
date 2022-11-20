CREATE TABLE t1 (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

-- Insert test data.
INSERT INTO t1 (name) VALUES ('test');
INSERT INTO t1 (name) VALUES ('test');
INSERT INTO t1 (name) VALUES ('test');
INSERT INTO t1 (name) VALUES ('test');
INSERT INTO t1 (name) VALUES ('test');
INSERT INTO t1 (name) VALUES ('test');
INSERT INTO t1 (name) VALUES ('test');
INSERT INTO t1 (name) VALUES ('test');
INSERT INTO t1 (name) SELECT name FROM t1;
INSERT INTO t1 (name) SELECT name FROM t1;
INSERT INTO t1 (name) SELECT name FROM t1;
INSERT INTO t1 (name) SELECT name FROM t1;
INSERT INTO t1 (name) SELECT name FROM t1;
INSERT INTO t1 (name) SELECT name FROM t1;
INSERT INTO t1 (name) SELECT name FROM t1;
INSERT INTO t1 (name) SELECT name FROM t1;
INSERT INTO t1 (name) SELECT name FROM t1;
INSERT INTO t1 (name) SELECT name FROM t1;
