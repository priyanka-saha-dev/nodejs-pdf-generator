# node-pdf
create pdf with custom template using node

## Notes
https://javascript.info/promise-basics

## dependencies
* ```ejs``` (https://www.npmjs.com/package/ejs) - for generating HTML with custom data
* ```html-pdf-chrome``` (https://www.npmjs.com/package/html-pdf-chrome) - for generating PDF from HTML

## get started
* Run ```npm install``` once in project directory.

* Start application by ```npm run serve``` from project directory and visit ```http://localhost:3000/pdf```

* Sample Template is in ```./pdfGenerationModule/pdfTemplate/template.ejs``` & Generated PDF will be in ```./output/``` directory.

## AMAZON EC2 - details

* Connect using SSH:
  ```ssh -i quotationEC2API.pem ec2-user@ec2-54-197-36-158.compute-1.amazonaws.com```
  ```chmod 400 quotationEC2API.pem```

* Node js Rest api hosted in AWS EC2: (Linux)
  https://www.youtube.com/watch?v=tasoWTGM1hA

* Installing Node js APP from GIT in ec2: [Port 3000]
>> sudo su
   ```curl -sL https://rpm.nodesource.com/setup_8.x | bash -``` (Install NodeJS)
   ```sudo yum install git``` (Install GIT)
   ```sudo yum install fontconfig freetype freetype-devel fontconfig-devel libstdc++``` (Problem with PhantomJS)
   connect API Anywhere As --> http://54.197.36.158:3000/pdf
