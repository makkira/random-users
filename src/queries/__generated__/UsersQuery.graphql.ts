/**
 * @generated SignedSource<<0a7a167f3f76da8ebcd0e8a810730ca9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type Gender = "female" | "male" | "%future added value";
export type UsersQuery$variables = {
  nat: string;
  results: number;
};
export type UsersQuery$data = {
  readonly users: ReadonlyArray<{
    readonly dob: {
      readonly age: number | null | undefined;
    } | null | undefined;
    readonly gender: Gender | null | undefined;
    readonly location: {
      readonly state: string | null | undefined;
    } | null | undefined;
    readonly name: {
      readonly last: string | null | undefined;
    } | null | undefined;
  } | null | undefined> | null | undefined;
};
export type UsersQuery = {
  response: UsersQuery$data;
  variables: UsersQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "nat"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "results"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "nat",
        "variableName": "nat"
      },
      {
        "kind": "Variable",
        "name": "results",
        "variableName": "results"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "users",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "gender",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "UserName",
        "kind": "LinkedField",
        "name": "name",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "last",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "UserDob",
        "kind": "LinkedField",
        "name": "dob",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "age",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "UserLocation",
        "kind": "LinkedField",
        "name": "location",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "state",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "UsersQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "UsersQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "02650dff3813d12728ced1f0a56a318f",
    "id": null,
    "metadata": {},
    "name": "UsersQuery",
    "operationKind": "query",
    "text": "query UsersQuery(\n  $results: Int!\n  $nat: String!\n) {\n  users(results: $results, nat: $nat) {\n    gender\n    name {\n      last\n    }\n    dob {\n      age\n    }\n    location {\n      state\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "62422bf1e16b82eb6c79ea6d3c66b3e1";

export default node;
