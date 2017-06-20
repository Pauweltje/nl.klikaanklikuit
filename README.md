#Trust / CoCo / KlikAanKlikUit

Adds support for Trust / CoCo / KlikAanKlikUit devices.

##What's new

####v3.1.0
Homey Client v1.3.1 fixed a bug that occured when the microcontroller crashed. This fix only works after a PTP. This update now notifies the user when Homey is affected by this bug and requests the user to pull the power plug for 10 seconds which should fix this bug.

####v3.0.1
Fixed TMT-502 icon in pair wizard to reflect the correct buttons
Fixed signal debouncer which would sometimes trigger flows multiple times if Homey was very busy

####v3.0.0
Removed the old KaKu drivers (which are already disabled since july 2016) which requires users still using these drivers to re-pair those devices.

####v2.10.0
Added support for the following devices: AYCT-202, TMT-502, ATMT-502, ALED-2009, ACM-2300H, ALED-MR2705, ALED-003, ALED-G2706, AWMR-300, ACM-100, ACM-LV24, ACM-LV10, AGDR-200 and APCR-2300. Please report any bugs on github (github.com/athombv/homey/issues).

####v2.9.1
Fixed bug where clicking the group button on the YCT-102 remote during pairing would not work

####v2.9.0
Fixed bug where rotating the wall switch in setting would not swap left/right in flows. Notice that this might affect your current flows!<br/>
Increased debounce timeout from 300ms to 500ms to prevent events from triggering multiple times.

####v2.8.11
Fixed bug where <0.5% of the random signals that would be generated for a device were invalid and would crash the app 

####v2.8.5
Fixed button highlighting in pair wizard for PA3-1000R

####v2.8.4
Fixed icons for certain devices<br/>
Fixed a bug where the app would crash when opening and closing the pair wizard fast

####v2.8.0
Added logging and error reporting

####v2.7.2
Updated translation strings to instruct the user to just press the program button instead of holding it to put the device in programming mode.

####v2.7.0
Added setting to motion sensors to force the state to false after a certain timeout. If you do not experience issues where the motion sensor would not reset to "no motion detected" you should not change this setting.

####v2.6.x
Fixed animation when clicking the rotate control checkbox for wall switches and blinds<br/>
Fixed icon for AWMT-003<br/>
Fixed bug where rotating/inverting controls in pair wizard could not be undone<br/>
Fixed bug where copying a remote button, going back, and copying a different button would still use the signal from the first button press.<br/>
Added instructions to reset the memory of the APA2-2300R and APA3-1500R<br/>
Fixed bug in socket pair wizard where devices sometimes did not get the virtual class making them not work with commands like "turn all lights off". <br/> _Note. If you have sockets paired with homey that do not show the virtual device icon (bottom left of the device card) you can now fix this by re-pairing the device._<br/>
Deprecated sensor "and" flow cards in favor for the generic sensor flow cards in Homey v0.10.5. <br/> _Note. The deprecated flow cards will be removed from the app eventually which will break the flows using them so please edit your existing flows that use sensor cards in the "and" column!_<br/>
Fixed dutch translation typos



    

