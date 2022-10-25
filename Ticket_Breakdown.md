# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

# Your Breakdown Here

## Ticket #1

**Title:** Backend: Create new table "facilities_agents"

**Description:**

As given, we have to store custom id against each facility for every agent, we would need to store this custom id in a separate table so we've top create a new table named "facilities_agents".



**Acceptance Criteria:**

- A new table "facilities_agents" should be added into schema.
- A unique index should be added on facility_id and agent_id.
- A unique index should be added on facility_id and custom_id to avoid duplication of custom ids within the facility.
- Add foreign keys for facilities and agents.
- A custom ID column for facility based agent id.


**Estimation:**

1 point (half day)



## Ticket #2

**Title:** Backend: Create CRUD APIs for  "facilities_agents"

**Description:**

As we have to store custom agent id for each agent , we need to create CRUD APIs for front end to perform operations.



**Acceptance Criteria:**

- A Create custom id API which will accept three parameters , facility_id , agent_id and custom_agent_id.
- A List API which returns all agents having custom id defined by the facility.
- An Update API which accepts facility_agent_id and provides the facility to update custom id.
- A Delete API which allows us to delete a defined custom id by the facility. 


**Estimation:**

1 point (half day)





## Ticket #3

**Title:** Front end : Create UI to Allow facility to define custom id's for agents and view defined custom ids.

**Description:**

	An input form for defining custom id , a table for displaying custom ids and action buttons and an update form.



**Acceptance Criteria:**

- Create A Form having  a select of available agents on shifts of facilities and a text input field accepting custom agent id.
- A Table displaying the agents having custom defined ids by the facility and actions to update or delete record.
An Update form allowing tho update the custom id for a particular agent.

**Estimation:**

1 point (half day)



## Ticket #4

**Title:** Front end : Change query inside generateReport to fetch custom id of agent from facilities_agents table.

**Description:**

	Change data query inside generateReport function to select agent custom id from facilities_agents table using internal database id of agent and facility and display custom id in report instead of internal database id. If the custom id is not defined by the facility for an agent , display the original internal database id for it.



**Acceptance Criteria:**

- If a custom id is defined by a facility for an agent , report should contain the custom id instead of internal database id.
- If a custom id is not defined by a facility for an agent , report should contain internal database id.


**Estimation:**

1 point (half day)



# Assumptions:

- We are assuming that the facility is not required to defined a custom agent id for each agent.
- If custom agent id is not present , we'll show internal database id.


