# ![](https://cdn-icons-png.flaticon.com/32/4196/4196427.png) Payment Results Sample Page
---

We need a simple page to show payment results so that when our users come back from a payment gateway they can view a summary of what their transaction looks like and the status of their bill/factor that they just paid.

## The scenario

-   The user does their transaction in the payment gateway
-   The payment gateway redirects the user to our website. for example: https://shop.com/payment-results (in our case its 127.0.0.1 or localhost)
-   When payment-gateway redirects the user, it will put some query params inside the URL like this:
    https://shop.com/payment-results?status=OK&message=SuccessfulPayment&transactionID=784329092941
-   Based on what these query params and their values are, we want to build a page and show this information in a user-friendly manner

## What we want to do?

we want to build an HTML page that co-response to the https://shop.com/payment-results page
and show the status of the transaction and a description of any error that happened
we also want to request our backend API server to get full details about the transaction and the user's bill with our transactionID param

##### How do I request the backend?

There is a `getTransactionDetails_api.js` file inside the repo. it contains a function called `getTransactionDetails` that will return the data you need

##### The Query Params

###### `status`

| Values  | Description                               |
| ------- | ----------------------------------------- |
| **OK**  | Transaction was done completly            |
| **NOK** | Transaction did not happen fo some reason |

###### `message`

| Values                             | Description                                                                             |
| ---------------------------------- | --------------------------------------------------------------------------------------- |
| **MethodNotDefined**               | Gateway not selected by the user                                                        |
| **ForbiddenUser**                  | User is not logged in for payment                                                       |
| **IncorrectIdentifier**            | Identifier is not a valid value                                                         |
| **IncorrectTransaction**           | Transaction cannot be find in our system                                                |
| **TransactionCanceled**            | Transaction canceled by user                                                            |
| **TransactionFailedAndWillBounce** | The transaction did not complete correctly and money will be bounced in at max 72 hours |
| **SuccessfulPayment**              | Transaction was successful                                                              |

###### `transactionID`

ID of the transaction that user just did

---

#### I dont have any designs to build the page

well, come up with one... work your imagination
or just search some online...
you can get some inspiration here: https://dribbble.com/search/payment-success
