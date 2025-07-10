import {StringFormatter,Bank,SongsManager} from './ClosureModule.js'

//Exercise 1
const formatter = StringFormatter()
console.log(formatter.capitalizeFirst("dorothy")) //should return Dorothy
console.log(formatter.toSkewerCase("blue box")) //should return blue-box

//Exercise 2
const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950

//Exercise 3
const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")
songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
songsManager.getSong("sex") // should print "this song name doesnt exist"