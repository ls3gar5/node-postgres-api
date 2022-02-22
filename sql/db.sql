CREATE TABLE IF NOT EXISTS projects(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> ''),
    priority integer NOT NULL,
    description text,
    deleverydate date NOT NULL 
);

CREATE TABLE IF NOT EXISTS tasks(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> ''),
    done BOOLEAN,
    projectid INTEGER REFERENCES projects(id)
);

INSERT INTO projects (name, priority, description, deleverydate)
    VALUES('Make a Web App', 1, 'Using Javascript', '2019-05-12');

INSERT INTO projects (name, priority, description, deleverydate)
    VALUES('Make a Web App', 1, 'Using Dart', '2019-05-12');

INSERT INTO projects (name, priority, description, deleverydate)
    VALUES('Make a Web App', 2, 'Using C++', '2019-05-12');

INSERT INTO tasks (name, done, projectId)
    VALUES('download Vuejs', false, 1);

INSERT INTO tasks (name, done, projectId)
    VALUES('WEB UI', false, 1); 

INSERT INTO tasks (name, done, projectId)
    VALUES('download flutter', false, 2); 

INSERT INTO tasks (name, done, projectId)
    VALUES('DESIGN ui', false, 2); 