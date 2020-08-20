
export default class ApiManager{
  _apibase='https://swapi.dev/api/'
  async getResouerse(url){
    try{
      const res = await fetch(url)
      return await res.json()
    }catch{
      console.log('oops something went wrong')
    }
  
  }

  getAllPlanets= async (page=1)=>{
      const res = await this.getResouerse(`${this._apibase}planets/?page=${page}`)
      return await res
  }
  getPlanetsById=async (id)=>{
    const planet=await this.getResouerse(`${this._apibase}planets/${id}`)
    return this._transformdataPlanet(planet)
  }
  getAllPerson=async (page=1)=>{
    const res = await this.getResouerse(`${this._apibase}people/?page=${page}`)
    return await res
  }
  getPersonById=async (id)=>{
    const person =await this.getResouerse(`${this._apibase}people/${id}`)
    return this._transformdataPerson(person)
  }
  getALLStarships=async(page=1)=>{
    const res = await this.getResouerse(`${this._apibase}starships/?page=${page}`)
    return await res
  }
  getStarshipById=async(id)=>{
    const starship=await this.getResouerse(`${this._apibase}starships/${id}`)
    return this._transformdataStarship(starship)
  }

  
  
  getItemByURL=async (url)=>{
    const res=await this.getResouerse(url)
    if(res.url.includes('people')){
      return this._transformdataPerson(res)
    }else if(res.url.includes('planets')){
      return this._transformdataPlanet(res)
    }else if(res.url.includes('starships')){
      return this._transformdataStarship(res)
    }
  }

  findId(url){
    const model=/\/([0-9]*)\/$/
    return url.match(model)[1]
  }

  _transformdataPerson=async (person)=>{
    return {
      'id':this.findId(person.url),
      'name':person.name,
      'height':person.height,
      'planet':person.homeworld,
      'gender':person.gender
    }
    
  }

  _transformdataPlanet=async (planet)=>{
    return{
      'id':this.findId(planet.url),
      'name':planet.name,
      'population':planet.population,
      'diameter':planet.diameter,
      'climate':planet.climate,
      'numberDays':planet.orbital_period,
      'url':planet.url
    }
  }

  _transformdataStarship=async(starship)=>{
    return{
      'name':starship.name,
      'model':starship.model,
      'cost':starship.cost_in_credits,
      'length':starship.length,
      'url':starship.url,
      'crew':starship.crew
    }
  }


}


const swap=new ApiManager()
swap.getItemByURL('http://swapi.dev/api/planets/1/').then((data)=>{
  console.log(data)
})





