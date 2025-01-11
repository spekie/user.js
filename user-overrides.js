// user-overrides.js

// privacy and security improvements
user_pref("network.trr.mode", 5); // use default system DNS resolver
user_pref("browser.privatebrowsing.autostart", true); // always private mode

// mozilla
user_pref("browser.preferences.moreFromMozilla", false); // disable moreFromMozilla in about:preferences
user_pref("browser.preferences.experimental", false); // disable experimental features
user_pref("identity.fxaccounts.enabled", false); // disable firefox sync
user_pref("extensions.pocket.enabled", false); // disable Mozilla's Pocket
// user_pref("browser.urlbar.suggest.topsites", false); // do not suggest shortcuts in search

// misc
// user_pref("general.autoScroll", true); // enable autoscrolling

// passwords and autofill
user_pref("extensions.formautofill.creditCards.enabled", false); // autofill
user_pref("extensions.formautofill.addresses.enabled", false); // autofill
user_pref("signon.rememberSignons", false); // disable ask to save passwords

/*
// home content
user_pref("browser.newtabpage.activity-stream.showWeather", false); // home content
user_pref("browser.newtabpage.activity-stream.showSearch", false); // home content
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false); // home content
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false); // home content
*/
