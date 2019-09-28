#AWS LAMBDA FUNCTIONS VIA APEX
This folder contains the LambdaFunctions that can be deployed and run form the local computer
using APEX  http://apex.run
+ view [introductory tutorial](https://www.youtube.com/watch?v=u7spDymJqmc&list=PLzvRQMJ9HDiSQMe68cti8cupI0mzLk1Gc&index=6&t=525s)

### Prerequisites
you need to install the AWS Cli (has it's own process)
and also apex - read the instructions
and I've set aws with lastruamguest's Access Key and a new Secret Key I had to generate in the AWS IAM console for the user

you need to have installed all other AWS resources needed


### How it works
- each folder corresponds to a different lambda function

- you deploy the function with `apex deploy`  or `apex deploy function-name-here`
(read more on Apex site's for more deploy ways)

- you can invoke / execute the function locally with `apex invoke function-name-here`
you can also invoke a function passing data either in the console itself, or using a file that has the data to pass to the `event` object
`apex invoke metagame-inventory-set < path/to/event.json`

- Logs can be seen either in the same console 
or on AWS CloudWatch https://console.aws.amazon.com/cloudwatch/ > sidebar > Logs
or you can do locally in another console window  (`-f` watches continuosly the function)
`apex logs -f inventory-set`


### Test the lambdas

#### inventory-get
`apex invoke inventory-get < functions/inventory-get/testEvent.json`

the REST endpoint is:
`https://g5oplgqi2h.execute-api.us-east-1.amazonaws.com/live/inventory?user=test`


#### inventory-set
`apex invoke inventory-set < functions/inventory-set/event.json`
