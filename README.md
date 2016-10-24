#Trust / CoCo / KlikAanKlikUit

Adds support for Trust / CoCo / KlikAanKlikUit devices.

**_The deprecated KaKu drivers are disabled as of Homey v0.10.0. Please remove all devices still using the old drivers and add them again in the pair wizard._**

##What's new

####v2.6.4 
Fixed bug in socket pair wizard where devices sometimes did not get the virtual class making them not work with commands like "turn all lights off". <br/> _Note. If you have sockets paired with homey that do not show the virtual device icon (bottom left of the device card) you can now fix this by re-pairing the device._
Deprecated sensor "and" flow cards in favor for the generic sensor flow cards in Homey v0.10.5. <br/> _Note. The deprecated flow cards will be removed from the app eventually which will break the flows using them so please edit your existing flows that use sensor cards in the "and" column!_
Fixed dutch translation typos



    

