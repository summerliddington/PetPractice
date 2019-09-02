const AjaxTheDog = {
    name: "Ajax", 
    species: "pitbull",
    nicknames: "buddy", 
    age: 6,
    favoriteToys: [], 
    // toyBox: [],
    plays: function (toy) {
        this.favoriteToys.push(toy)
    },
    jumps: function (taco) {
        window.alert(`Ajax jumps on ${taco}`)
    },
    barks: function (something) {
        window.alert(`Ajax barks at ${something}`)
    },
}
AjaxTheDog.jumps("Taylor")
AjaxTheDog.barks("nothing")

AjaxTheDog.plays("tug-toy")
AjaxTheDog.plays("stuffed flamingo")
AjaxTheDog.plays("squeeky toy")
AjaxTheDog.plays("ball")

console.log(AjaxTheDog.favoriteToys)

for (let i = 0; i < AjaxTheDog.favoriteToys.length; i++){
    if (AjaxTheDog.favoriteToys[i].plays === "ball") {
        window.alert("not going to play")
    } else {
        console.log(`Ajax like to play with ${AjaxTheDog.favoriteToys[i]}`)
    }
}

//need to rework the 'if' - not computing