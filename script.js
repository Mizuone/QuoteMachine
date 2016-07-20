"use strict";
if(typeof(QuoteSpace === "undefined")) {
    var QuoteSpace = {};
}
$(document).ready(function() {
    QuoteSpace = function () {
        var quotecollection = [
               {
                  quote: "There is nothing outside of yourself that can ever enable you to get better, stronger, richer, quicker, or smarter. Everything is within. Everything exists. Seek nothing outside of yourself.",
                  person: " - Miyamoto Musashi"
               },
               {
                  quote: "Think lightly of yourself and deeply of the world",
                  person: " - Miyamoto Musashi"
               },
               {
                  quote: "You must understand that there is more than one path to the top of the mountain",
                  person: " - Miyamoto Musashi"
               },
               {
                  quote: "Do nothing that is of no use",
                  person: " - Miyamoto Musashi"
               },
               {
                  quote: "If you wish to control others you must first control yourself",
                  person: " - Miyamoto Musashi"
               },
               {
                  quote: "As you think, so shall you become.",
                  person: " - Bruce Lee"
               },
               {
                  quote: "Adapt what is useful, reject what is useless, and add what is specifically your own.",
                  person: " - Bruce Lee"
               },
               {
                  quote: "Art calls for complete mastery of techniques, developed by reflection within the soul.",
                  person: " - Bruce Lee"
               },
               {
                  quote: "If I can see it and believe it, then I can achieve it.",
                  person: " - Arnold Schwarzenegger"
               },
               {
                  quote: "All I know is that the first step is to create a vision, because when you see the vision – the beautiful vision – that creates the want power.",
                  person: " - Arnold Schwarzenegger"
               }
        ];
        $("#showquote").on("click", function() {
            var quotePosition = Math.floor(Math.random() * (quotecollection.length - 1));
            $(".quote").text('"' + quotecollection[quotePosition].quote + '"');
            $(".quote").append('<span class="addbold">' + quotecollection[quotePosition].person + '</span>');
        });
    };
    QuoteSpace();
});