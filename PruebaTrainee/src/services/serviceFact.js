const API_FACT_ENDPOINT = 'https://catfact.ninja/fact'

export const Getfact = async () => {
  const response = await fetch(API_FACT_ENDPOINT)
  const data = await response.json()
  const { fact } = data
  return fact
}
