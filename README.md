[![Build Status](https://travis-ci.org/chatter/Paw-AzureSASDynamicValue.svg?branch=master)](https://travis-ci.org/chatter/Paw-AzureSASDynamicValue)
[![codecov](https://codecov.io/gh/chatter/Paw-AzureSASDynamicValue/branch/master/graph/badge.svg)](https://codecov.io/gh/chatter/Paw-AzureSASDynamicValue)
[![Dependency Status](https://david-dm.org/chatter/Paw-AzureSASDynamicValue.svg)](https://david-dm.org/chatter/Paw-AzureSASDynamicValue)
[![devDependencies Status](https://david-dm.org/chatter/Paw-AzureSASDynamicValue/dev-status.svg)](https://david-dm.org/chatter/Paw-AzureSASDynamicValue?type=dev)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square&label=License)](/LICENSE.md)

# Paw-AzureSASDynamicValue

A dynamic value extension to generate a Shared Access Signature authorization
header for use with Azure services (e.g., Service Bus).

## Usage

In order to use this extension, you first need to have the name of your
authorization rule and its associated value.

Add an _Authorization_ header to your request, and choose _Azure Shared Access
Signature_ dynamic value. Input the rule name and value into _Key Name_ and
_Key Value_, respectively. Those values, combined with the _Request_ URI, are
used to generate a valid SAS authorization token.

## Installing

To install directly from source, first ensure that you have
[yarn](http://yarnpkg.com) installed. Then clone the repository and build the
code using the following commands:

```bash
$ git clone https://github.com/chatter/Paw-AzureSASDynamicValue.git
$ cd Paw-AzureSASDynamicValue
$ make install
```

## License

Paw-AzureSASDynamicValue is licensed under [The MIT License (MIT)](/LICENSE.md).
