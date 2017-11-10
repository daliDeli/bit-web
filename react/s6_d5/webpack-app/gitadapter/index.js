import RepoThings from "./repoThings";
import UserThings from "./userThings";

const repoThings = new RepoThings();
const userThings = new UserThings();

// change this in order to use different data service
let thingsService = userThings;
//let thingsService = repoThings;

thingsService.getThings((things) => {
    things.forEach((thing) => {
        console.log(thing.getData());
        // var par = $("<p>");
        // par.text(thing.name);
        // par.css({'color':'orange', 'margin-top':'80px', 'text-transform':'uppercase'});

        var anchor = $("<a>");
        anchor.attr("href", thing.url);
        anchor.text(thing.name);
        anchor.css({'color':'orange', 'margin-top':'80px', 'text-transform':'uppercase'});
        
        var image = $("<img>");
        image.attr("src", thing.avatarUrl);
        image.css({'width':'300px', 'border-radius':'150px'});

        var div = $("<div>");
        div.append(anchor);
        div.append(image);
        $("body").append(div);
        div.css({'text-align': 'center'});

    });
});

