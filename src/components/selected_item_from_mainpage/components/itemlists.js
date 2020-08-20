
import ApiManager from '../../../services/swapi'
import {Data} from '../../hoc-components/hoc-component-lists'
import CardList from './someitemlist'

const swapi=new ApiManager()

const {getAllPerson, getAllPlanets, getALLStarships}=swapi

const PersonList=Data(CardList, getAllPerson)

const PlanetList=Data(CardList, getAllPlanets)
    
const StarshipList=Data(CardList, getALLStarships)


export{
    PersonList,
    PlanetList,
    StarshipList
}