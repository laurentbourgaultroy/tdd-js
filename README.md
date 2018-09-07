Test Driven JavaScript
======================

This little project show an example build system that can lint JavaScript code and run unit tests on it, in 
every browser that need to be supported by a project. You can clone it and use it as a base for your own 
project, or simply inspire yourself from the code to write your own build system.

The build system is Jake, which has the advantage of being very simple and straight-forward. The code has been
written and tested on Windows, but it should be relatively easy to run (just add the execute permission to the
jake file at the root)

## Prerequiste

You will need to install the [latest version of nodejs](https://nodejs.org/en/). All dependencies have been commited in the repo, so you
don't have to install anything with NPM. The code has been written with version 8 of node. 

## How to run the test

First run `jake karma` to start the Karma server. Then connect local browser to <http://localhost:9876>. 
Then, run `jake` on the command line to run the linter and test suite.

## How to run the demo App

Run `jake serve` to launch a static webserver on port 9000.

## Licence

Copyright (c) 2018 Laurent Bourgault-Roy.  
All rights reserved.

Redistribution and use in source and binary forms are permitted
provided that the above copyright notice and this paragraph are
duplicated in all such forms and that any documentation,
advertising materials, and other materials related to such
distribution and use acknowledge that the software was developed
by the organization. The name of the
organization may not be used to endorse or promote products derived
from this software without specific prior written permission.
THIS SOFTWARE IS PROVIDED ``AS IS'' AND WITHOUT ANY EXPRESS OR
IMPLIED WARRANTIES, INCLUDING, WITHOUT LIMITATION, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.