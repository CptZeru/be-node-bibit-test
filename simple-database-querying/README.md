# Simple Database Querying

A Subdirectory contains answer for question 1 about Simple Database Querying.

## Getting Started

These instructions will get you to test / check query with [DB Fiddle](https://db-fiddle.com).

1. Access [DB Fiddle](https://db-fiddle.com).
2. Copy and paste the following schema to DB Fiddle.
```sql
CREATE TABLE IF NOT EXISTS `USER` (
  `ID` int(6) unsigned NOT NULL,
  `UserName` varchar(20) NOT NULL,
  `Parent` int(6) unsigned NOT NULL,
  PRIMARY KEY (`ID`)
) DEFAULT CHARSET=utf8;
INSERT INTO `USER` (`ID`, `UserName`, `Parent`) VALUES
  ('1', 'Ali', '2'),
  ('2', 'Budi', '0'),
  ('3', 'Acep', '1');
```
3. Copy and paste SQL query from answer.txt.
4. Run to check if the query is correct.

You can also access the saved DB Fiddle with the same schema and query in [this link](https://www.db-fiddle.com/f/FDh23aaRWJzGtbgLfzBue/0).

