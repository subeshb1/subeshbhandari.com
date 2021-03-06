---
title: Path equality comparison
series: api-test
date: '2020-06-03T15:46:37.121Z'
type: doc
category: Automated Tests
position: 304
description: Use path_contains comparison in api-test to perform path level strict equality checks in your API response.
---

The `path_eq` does the same check as `eq` but allows the check to be made inside the JSON object path at any depth. The path accessing pattern follows the javascript object accessing patterns.

## Syntax

```json{4-7}
{
  ...
  "expect": {
    "path_eq": {
      "path": {"key": "value:"},
      "path.key1.key": 1
    }
  }
}

```

## Example

The API has the following response.

```json
{
  "people": [
    {
      "name": "ram",
      "age": 20
    },
    {
      "name": "Shyam",
      "age": 21
    }
  ]
}
```

To test using `path_eq` check:

```json{5-11}
{
  ...
  "expect": {
    "body": {
      "path_eq": {
        "people[0]": {
          "name": "ram",
          "age": 20
        },
        "people[1].name": "Shyam"
      }
    }
  }
}
```

The above example shows how to access an object path to compare and check the values at any depths.

> **Note:** If a path is not found, the value is always `null`. If you have a response with `null` values consider adding the path key in `hasKey` check as well to see if the key is present or not. Combining with `hasKey` will ensure the field is present and is `null`.

## General use cases

- When a certain property in the nested object is known and must be the same.
