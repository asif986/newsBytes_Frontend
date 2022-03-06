## Setup

    1. When you clone this repostitory that time node_modules are not present. after cloning switch to dev_asif branch and type - npm install. this command help us to download the node_modules locally.

    2. Run - ng serve --o ( --o means additional flag - open the browser when code is served).

    3. Creating Production Build

        ng build --prod

        --prod  flag replace the .env to .env prod file. In this file i create production configuration.(BASE_URL)

    4. Deploy

        In Deploying angular application i use two methods.
        1. maually
        2. CI/CD github workflows.

        Above two solution provided by Firebase Services  (using web hosting).

        cmd -
        1. login to firebase account. type following command in cmd.

        command - firebase init hosting (choose project)

        choose project directory - dist/project_name

        Q. configure single page application type - Y
        Q. Replace/ overwrite index.html - N
        Q. CI/CD deploy - (Choose automatic for CI/CD)

        command - firebase deploy
