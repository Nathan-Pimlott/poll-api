-- Create the database, a user and give CRUD access to the user. 
-- You can change this to an existing user if you want and remove the create user command.

create database POLL;
use POLL;
create user 'poll-admin'@'localhost' identified by 'test123';
grant select, insert, update, delete on POLL.* to 'poll-admin'@'localhost';

-- Create all the tables.

create table POLL(
	id varchar(255) not null primary key unique,     
    title varchar(255) not null,
    createdDate datetime not null,
    status varchar(255) not null
);

create table POLL_VOTE(
	id varchar(255) not null primary key unique,  
    pollId varchar(255) not null,
    optionId varchar(255) not null,
    createdDate datetime not null,
    foreign key (pollId) references poll(id),
    foreign key (optionId) references poll_option(id)
);

create table POLL_OPTION(
	id varchar(255) not null primary key unique,
    pollId varchar(255) not null,
    title varchar(255) not null
);

-- Insert some mock data.

insert into poll(
    id, 
    title, 
    createdDate, 
    status
) values (
    UUID(), 
    "Will Liverpool win the premier league?", 
    current_timestamp(), 
    "ACTIVE"
);

insert into poll_option(
    id, 
    pollId, 
    title
) values (
    uuid(), 
    (select id from poll limit 1), 
    "Yes"
);

insert into poll_option(
    id, 
    pollId, 
    title
) values (
    uuid(), 
    (select id from poll limit 1), 
    "No"
);

insert into poll_vote(
    id, 
    pollId, 
    optionId, 
    createdDate
) values (
    uuid(), 
    (select id from poll limit 1), 
    (select id from poll_option limit 1), 
    current_timestamp()
);