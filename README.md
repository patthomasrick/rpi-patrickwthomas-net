# rpi.patrickwthomas.net

This is a simple webpage that has two parts:

1.  Provide an API that Raspberry PIs/any computer can ping or access
2.  Display a website that shows the last time that a host pinged the API and
    indicate which computers are up/down

## Local Development Environment

This project uses docker-compose to make a LAMP stack. Themes and fonts are
from NPM.

1.  `git clone https://github.com/patthomasrick/rpi-patrickwthomas-net`
1.  `cd rpi-patrickwthomas-net`
1.  `npm install`
1.  `npm run css-build`
1.  `cp "node_modules/font-awesome/fonts" "src"`
1.  `docker-compose up`

Access the local server at <localhost:8080> and PHPMyAdmin at
<localhost:5000>.

