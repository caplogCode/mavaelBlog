import { response } from "express";
import { app } from "firebase-admin";
import * as functions from "firebase-functions";
/* const express = require('express')

const aoo = express()

app.get('/timestamp', (request, response) => {
    response.send(`${Date.now}`)
}) */

 export const helloWorld = functions.https.onRequest((request, response) => {
   functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
 });
