import MatchReader from './MatchReader'
import { MatchResult } from './MatchResult'
const matchReader = new MatchReader('football.csv')
const matches = matchReader.data

const teamName = 'Man United'
let manUnitedWins = 0

for (let match of matches) {
    if (match[1] === teamName && match[5] === MatchResult.home) {
        manUnitedWins++
    } else if (match[2] === teamName && match[5] === MatchResult.away) {
        manUnitedWins++
    }
}

console.log('wins', manUnitedWins)
