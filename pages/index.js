///// TIPZ NOTE: FILE FOR AN OLD PROJECT - IT NEEDS TO BE DELETED OR RE-PUPOSED FOR TIPZ /////

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { useState, useEffect } from 'react';
import { Cat, Dog, CatFood, DogFood, Chicken, HumanFood, Lemons, Milk } from '../lib/classes';
import { primeNumbers } from '../lib/primeNumbers';
import ApiRequest from '../lib/database';

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [primeNumber, setPrimeNumber] = useState();
  const [seconds, setSeconds] = useState();
  const [petKind, setPetKind] = useState();
  const [foodType, setFoodType] = useState();
  const [providerOptions, setProviderOptions] = useState();
  const [selectedProviderId, setSelectedProviderId] = useState();
  const [clientOptions, setClientOptions] = useState();
  const [selectedClientId, setSelectedClientId] = useState();
  const [query, setQuery] = useState();
  const [databaseResponse, setDatabaseResponse] = useState();
  const [noises, setNoises] = useState();


  // DATABASE AND MODEL DESIGN WITH QUERIES CHALLENGE

  useEffect(() => {
    setLoading(true)
    getClients().then((data) => {
      if (data) {
        const clientOptions = Object.values(data).map((client, index) => {
          return <option key={index} value={client.id}>{client.name}</option>
        })
        setClientOptions(clientOptions)
      }})
      getProviders().then((data) => {
        if (data) {
          var providerOptions = Object.values(data).map((provider, index) => {
            return <option key={index} value={provider.id}>{provider.name}</option>
          })
          setProviderOptions(providerOptions)
          setLoading(false)
      }})
  }, [])

  const getClients = async() => {
    return await ApiRequest.getClients()
  }

  const getProviders = async() => {
    return await ApiRequest.getProviders()
  }

  const queries = [
    'Find Clients of Provider',
    'Find Providers of Client',
    "Find Client's Journal Entries",
    "Find Provider's Clients' Journal Entries"
  ]

  const queryOptions = queries.map((name, index) => {
    return <option key={index} value={name}>{name}</option>
  })

  const makeDatabaseResponse = async(e) => {
    e.preventDefault()
    
    let response
    switch (query) {
      case queries[0]:
        response = await ApiRequest.findClientsForProvider(selectedProviderId)
        break;
      case queries[1]:
        response = await ApiRequest.findProvidersForClients(selectedClientId)
        break;
      case queries[2]:
        response = await ApiRequest.findClientJournalEntries(selectedClientId)
        break;
      case queries[3]:
        response = await ApiRequest.findProviderClientsJournalEntries(selectedProviderId)
        break;
    }

    setDatabaseResponse(response)
  }

  // CLASS DESIGN CHALLENGE

  const animals = {
    cat: new Cat(),
    dog: new Dog(),
  }

  const foodTypes = {
    catfood: new CatFood(),
    dogfood: new DogFood(),
    humanfood: new HumanFood(),
    chicken: new Chicken(),
    lemons: new Lemons(),
    milk: new Milk(),
  }

  const animalOptions = Object.values(animals).map((animal, index) => {
    return <option key={index} value={animal.kind}>{animal.kind}</option>
  })

  const foodOptions = Object.values(foodTypes).map((food, index) => {
    return <option key={index} value={food.type}>{food.type}</option>
  })

  const makeAnimalNoise = (e) => {
    e.preventDefault()

    const animal = animals[petKind]
    const food = foodTypes[foodType.replace(/\s+/g, '').toLowerCase()]

    if (animal && food) {
      var noises = animal.eat(food)
      setNoises(noises)
    }
  }

  // PRIME NUMBER FINDER CHALLENGE

  const findPrimeNumber = (e) => {
    e.preventDefault()
    setPrimeNumber(primeNumbers(seconds))
    return
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Angie's Healthie Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          <a href="https://www.linkedin.com/in/angelaramirez/">Angie's</a> Healthie Challenge
        </h1>

        <div className={styles.grid}>
          
        {/* CLASS DESIGN CHALLENGE */}
          <form
            className={styles.card}
            onSubmit={makeAnimalNoise}>
            <label>
              <h3> Does your pet like the food?</h3>
              Pet kind:
              <p>
                  <select value={petKind} onChange={e => setPetKind(e.target.value)}>
                    <option key={'00'} value=''></option>
                    {animalOptions}
                  </select>
                </p>
              </label>
              <label>
              Food:
              <p>
                <select value={foodType} onChange={e => setFoodType(e.target.value)}>
                  <option key={'01'} value=''></option>
                  {foodOptions}
                </select>
              </p>
            </label>
            <input type="submit" value="Submit" />
            <h4> Pet noise: <br></br></h4>
              {noises ?
                <h4>{noises.map((noise, index) => {
                  return noise[0].toUpperCase() + noise.substring(1) + '! '
                })}</h4> : ''}
          </form>

          {/* PRIME NUMBER FINDER CHALLENGE */}

          <form
            className={styles.card}
            onSubmit={findPrimeNumber}>
            <label>
              <h3> Prime Number Finder</h3>
              Input Seconds:
              <p>
                <input
                  type="text"
                  onChange={e => setSeconds(e.target.value)}
                  value={seconds}
                  name="name" />
              </p>
            </label>
            <input type="submit" value="Submit" />
            <h4> Largest Prime Number Found: <br></br></h4>
            <h4>{primeNumber ? primeNumber.toLocaleString() : ''}</h4>
          </form>
          
          {/*  DATABASE AND MODEL DESIGN WITH QUERIES CHALLENGE */}

          {loading ?
            <p>Loading ...</p>
            :
            <form
            className={styles.card}
            onSubmit={makeDatabaseResponse}>
            <label>
              <h3> Search Database</h3>
              Which provider are you interested in?:
              <p>
                  <select value={selectedProviderId} onChange={e => setSelectedProviderId(e.target.value)}>
                    <option key={'00'} value=''></option>
                    {providerOptions}
                  </select>
                </p>
              </label>
              <label>
              Which client are you interested in?:
              <p>
                <select value={selectedClientId} onChange={e => setSelectedClientId(e.target.value)}>
                  <option key={'01'} value=''></option>
                  {clientOptions}
                </select>
              </p>
            </label>
            <label>
              What query are you interested in?
              <p>
                <select value={query} onChange={e => setQuery(e.target.value)}>
                  <option key={'01'} value=''></option>
                  {queryOptions}
                </select>
              </p>
            </label>
            <input type="submit" value="Submit" />
            <h4> Here is the info: <br></br></h4>
              {databaseResponse ?
                <h4>{databaseResponse.map((res, index) => {
                  return JSON.stringify(res)
                })}</h4> : ''}
          </form>

          }
        </div>
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
