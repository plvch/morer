# morer (offensive privacy)
**Morer** - Play Demo of offensive privacy extension

### Overview 
Decided to check how the personalisation from first-party perspective might look like. 
Idea - being able to tell websites how they should behave in plain language and expecting them to adjust. 
To change the behaviour/cookie/surveillance tracking to mode when user dictates expectations. 

When LLMs are Open and Cheap and fast and we all start paying much more attention to each individual user needs. 

We'll change "**a**" - your behaviour affects experience, to "**b**" - your intent globally affects the experience. 
The difference: first one tracks you, in the second you tell what you want to see. 

## A 
![Untitled - Scenario - a](https://github.com/plvch/morer/assets/20414836/bde0d775-0a33-448a-a702-91ad06f80ad7)
## To B 
![Untitled - Scenario - b](https://github.com/plvch/morer/assets/20414836/0fa62392-3644-4d88-98d7-bfb10e47b775)

**What is it and how it work?**
You input the command in the extension text input field and the only thing it does when activated - is to send that text in local storage. 
It is used differently, if at all, by every website developer, but essentially if say tomorrow everyone on the internet uses the approach, they'd seek to find that config file that you're trying to share. 


## Usage (Chrome - only)
Download the files from repo, in Chrome: Extensions -> Menage Extensions -> Dev. Mode on -> Load unpacked

When installed, click on the Extension icon, insert the needed text to share with a website, click "Activate" and it works. 

Few screenshots: UI, Example with text and console output (confirming that the data is accessible). 

![capture_main](https://github.com/plvch/morer/assets/20414836/435a5cc8-8405-4e33-947a-bc7d1dd8c9c3)
![amzn_example](https://github.com/plvch/morer/assets/20414836/0e4f4b4f-7462-469c-bcce-3e010b4b4da3)
![amzn_console](https://github.com/plvch/morer/assets/20414836/456ab9e8-2bad-4263-8f1b-7aac8af31910)

## Acknowledgements
Without the help of GPT (Code interpreter) that repo would've never seen the release :) 
