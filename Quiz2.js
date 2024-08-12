let stateNames = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hempshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
let stateYears = ['1861', '1959', '1912', '1836', '1850', '1876', '1788', '1787', '1845', '1788', '1959', '1890', '1818', '1816', '1846', '1861', '1792', '1812', '1820', '1788', '1788', '1837', '1858', '1817', '1821', '1889', '1867', '1864', '1788', '1787', '1912', '1788', '1889', '1789', '1803', '1907', '1859', '1787', '1790', '1788', '1889', '1796', '1845', '1896', '1791', '1788', '1889', '1863', '1848', '1890'];
let stateCapitals = ['Montgomery', 'Juneau', 'Phoenix', 'Little Rock', 'Sacramento', 'Denver', 'Hartford', 'Dover', 'Tallahassee', 'Atlanta', 'Honolulu', 'Boise', 'Springfield', 'Indianapolis', 'Des Moines', 'Topeka', 'Frankfort', 'Baton Rouge', 'Augusta', 'Annapolis', 'Boston', 'Lansing', 'St. Paul', 'Jackson', 'Jefferson City', 'Helena', 'Lincoln', 'Carson City', 'Concord', 'Trenton', 'Santa Fe', 'Albany', 'Releight', 'Bismark', 'Columbus', 'Oklahoma City', 'Salem', 'Harrisburg', 'Providence', 'Columbia', 'Pierre', 'Nashville', 'Austin', 'Salt Lake City', 'Montpelier', 'Richmond', 'Olympia', 'Charleston', 'Madison', 'Cheyenne'];
let stateFacts = ['There was made the first call to 911', 'This is the biggest state in the USA', 'There is Grand Canyon', 'There were discovered diamond mines', 'There was discovered the movie culture', 'There is the highest average elevation of any U.S. state', 'This state earned its nickname', 'This is the first state to ratify the U.S. Constitution and join the Union on Dec. 7, 1787', 'There are beautiful beaches', `This state's capital has the busiest airport in the USA`, 'There are a lot of surferces in this state and there is a huge surfe culture', `The state’s name derived from a Native American word that means “the land of many waters.”`, 'In this state, Abraham Lincoln began his politics carreer', 'This state is almost exactly the same size as the country Taiwan.', 'This state is the biggest producer of corn', 'This state is called after the event which was a period of violent conflict between pro-slavery and anti-slavery forces', 'This state was called after the famous company which was created by Colonel Sanders', 'The culture of this state is essentially French', 'This state was created because of Missuori joining to the slavery states', 'The Mason-Dixon line was the line which divided North from South in Civil war was bordered with this state in a South', 'In this state locates one of the most famous college in the world', 'There was created one of the most famous motor company', `There is a myth that this state has 10,000 lakes, but it's actually has 11,842 lakes`, 'The longest river in the United States is called after this state', 'There was created a law which creating an invisible line that divided America into slave states in the South and free states in the North because of this state joining to the South.', 'This state has banned TikTok the first in the USA', `This state's name comes from Native American words that mean "flat water."`, 'This state is VERY famous of its casinos', 'In 1776, during the American Revolution, this state became the first colony to create a constitution and declare its independence from Great Britain.', 'There is one of the most delicious pizzas ever, NOT IN ITALY', `This state's capital is the highest capital in the US`, `The big apple is this state's most populated city nickname`, 'There was flew the first plane in the world', `This state holds the Guinness World Record for the most snow angels made simultaneously in one place`, 'These 3 most populated cities of this state have the letter C in the beginning', 'This state has the largest Native American population of any state in the U.S.', 'This state has more than 7,000 bridges', 'This state has the city which used to be the capital of the United States from 1790 to 1800', 'This state is the smallest state in the U. S.', 'There began the Civil War in this state', 'There is the famous Mountain Rushmore', 'This state is the birthplace of Mountain Dew.', 'This state  used to be an independent country from 1836 to 1845', 'There is the eighth largest lake in the world in this state.', 'This state is known for its forested natural beauty', `This state's capital is used to be the Confederacy's capital`, 'This state is called after the first president of the United States', 'This state seceded from Virginia while the Civil War', 'This state is known for its diary farms', 'In this state live the least amount of people than in other states']; 
let stateNicknames = ['The Yellowhammer State', 'The Last Frontier state', 'The Grand Canyon State', 'The Natural state', 'The Golden state', 'The Centennial State', 'The Constitution State ', 'The First State', 'The Sunshine state', 'The Peach State', 'The Aloha State ', 'The Gem State', 'The Land of Lincoln state', 'The Hoosier State', 'The Hawkeye State', 'The Sunflower State', 'The Bluegrass State', 'The Pelican State', 'The Pine Tree State Vacationland',"America in Miniature", 'The Bay State', 'The Great Lake State', 'Land of 10,000 Lakes', 'The Magnolia State', 'The Show Me State', 'The Big Sky state', 'The Cornhusker State', 'The Silver State', ' The Granite State', 'The Garden state', 'The Land of Enchantment state', 'The Empire state', 'The Tarheel State; Old North State', 'Peace Garden State', 'The Buckeye State', 'The Native America state', 'The Beaver State', 'The Keystone State, The Quaker State', 'The Ocean state', 'The Palmetto State', 'The Mount Rushmore State', 'The Volunteer State', 'The Lone Star state', 'The Beehive State', 'The Green Mountain state', 'The Old Dominion state, The Mother of Presidents state', 'The Evergreen State', 'The Mountain State', `The Badger State, The America's Dairyland state`, 'The Equality State'];
let stateName = document.querySelector('.StateName');
let scoreAttempts = document.querySelector('.ScoreAttempts');
let answer = document.querySelector('.Answer');
let submit = document.querySelector('.Submit');
let facts = document.querySelector('.Fact');
let capitalBox = document.querySelector('.CapitalBox');
let yearBox = document.querySelector('.YearBox');
let factBox = document.querySelector('.FactBox');
let nicknameBox = document.querySelector('.NicknameBox');

let factsIndex = Math.floor(Math.random() * stateFacts.length);
facts.innerHTML = stateFacts[factsIndex];

let randomStateIndex = Math.floor(Math.random() * stateNames.length);
stateName.innerHTML = stateNames[randomStateIndex];

let trueStateName = document.querySelector('.TrueStateName');
let trueStateNameIndex = Math.floor(Math.random() * stateNames.length);
trueStateName.innerHTML = stateNames[trueStateNameIndex];

let year = document.querySelector('.Year');
let randomYearIndex = Math.floor(Math.random() * stateYears.length);
year.innerHTML = stateYears[randomYearIndex];

let capitals = document.querySelector('.Capital');
let randomCapitalsIndex = Math.floor(Math.random() * stateCapitals.length);
capitals.innerHTML = stateCapitals[randomCapitalsIndex];

let nicknames = document.querySelector('.Nickname');
let nicknamesIndex = Math.floor(Math.random() * stateNicknames.length);
nicknames.innerHTML = stateNicknames[nicknamesIndex];

let winAnnouncment = document.querySelector('.WinAnnouncment');
let loseAnnouncment = document.querySelector('.LoseAnnouncment');

let scoreAttemptsResult = 0;
let next = trueStateName;
submit.addEventListener('click', function(event){
    if(scoreAttempts.innerHTML === '6'){
        loseAnnouncment.innerHTML = 'YOU LOST!'
        submit.disabled = true
    } else {
        scoreAttempts.innerHTML = ++scoreAttemptsResult
    } if(answer.value === trueStateName.innerHTML){
        winAnnouncment.innerHTML = 'YOU WON!'
        submit.disabled = true
    } else {
        console.error('error')
    }
    let i = Math.floor(Math.random() * stateNames.length);
    let p = Math.floor(Math.random() * stateNames.length);
    let y = Math.floor(Math.random() * stateYears.length);
    let c = Math.floor(Math.random() * stateCapitals.length);
    let f = Math.floor(Math.random() * stateFacts.length);
    let n = Math.floor(Math.random() * stateNicknames.length);
    while(i < Math.floor(Math.random() * 1000)){
        trueStateName.innerHTML = stateNames[i];
    }
    while(p < Math.floor(Math.random() * 1000)){
        stateName.innerHTML = stateNames[p];
    }
    while(y < Math.floor(Math.random() * 1000)){
        year.innerHTML = stateYears[y]
    }
    while(c < Math.floor(Math.random() * 1000)){
        capitals.innerHTML = stateCapitals[c]
    }
    while(f < Math.floor(Math.random() * 1000)){
        facts.innerHTML = stateFacts[f]
    }
    while(n < Math.floor(Math.random() * 1000)){
        nicknames.innerHTML = stateNicknames[n]
    }
    //Alabama
if(trueStateName.innerHTML === stateNames[0] && capitals.innerHTML !== stateCapitals[0]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[0] && year.innerHTML !== stateYears[0]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[0] && facts.innerHTML !== stateFacts[0]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[0] && nicknames.innerHTML !== stateNicknames[0]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[0]) {
    nicknames.innerHTML = stateNicknames[0];
    capitals.innerHTML = stateCapitals[0];
    nicknameBox.style.backgroundColor = 'green';
    capitalBox.style.backgroundColor = 'green';
 }
 
 //Alaska
 if(trueStateName.innerHTML === stateNames[1] && capitals.innerHTML !== stateCapitals[1]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[1] && year.innerHTML !== stateYears[1]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[1] && facts.innerHTML !== stateFacts[1]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[1] && nicknames.innerHTML !== stateNicknames[1]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[1]) {
    factBox.innerHTML = stateFacts[1];
    factBox.style.backgroundColor = 'green';
 }

//Arizona
if(trueStateName.innerHTML === stateNames[2] && capitals.innerHTML !== stateCapitals[2]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[2] && year.innerHTML !== stateYears[2]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[2] && facts.innerHTML !== stateFacts[2]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[2] && nicknames.innerHTML !== stateNicknames[2]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[2]) {
    factBox.innerHTML = stateFacts[2];
    yearBox.innerHTML = stateYears[2];
    factBox.style.backgroundColor = 'green';
    yearBox.style.backgroundColor = 'green';
 }

//Arkansas
if(trueStateName.innerHTML === stateNames[3] && capitals.innerHTML !== stateCapitals[3]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[3] && year.innerHTML !== stateYears[3]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[3] && facts.innerHTML !== stateFacts[3]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[3] && nicknames.innerHTML !== stateNicknames[3]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[3]) {
    factBox.innerHTML = stateFacts[3];
    factBox.style.backgroundColor = 'green';
 }

 //California
 if(trueStateName.innerHTML === stateNames[4] && capitals.innerHTML !== stateCapitals[4]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[4] && year.innerHTML !== stateYears[4]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[4] && facts.innerHTML !== stateFacts[4]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[4] && nicknames.innerHTML !== stateNicknames[4]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[4]) {
    yearBox.innerHTML = stateYears[4];
    capitalBox.innerHTML = stateCapitals[4];
    yearBox.style.backgroundColor = 'green';
    capitalBox.style.backgroundColor = 'green';
 }

//Colorado
if(trueStateName.innerHTML === stateNames[5] && capitals.innerHTML !== stateCapitals[5]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[5] && year.innerHTML !== stateYears[5]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[5] && facts.innerHTML !== stateFacts[5]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[5] && nicknames.innerHTML !== stateNicknames[5]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[5]) {
    factBox.innerHTML = stateFacts[5];
    factBox.style.backgroundColor = 'green';
    capitalBox.innerHTML = stateCapitals[5];
    capitalBox.style.backgroundColor = 'green';
 }

 //Connecticut
 if(trueStateName.innerHTML === stateNames[6] && capitals.innerHTML !== stateCapitals[6]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[6] && year.innerHTML !== stateYears[6]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[6] && facts.innerHTML !== stateFacts[6]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[6] && nicknames.innerHTML !== stateNicknames[6]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[6]) {
    nicknameBox.innerHTML = stateNicknames[6];
    capitalBox.innerHTML = stateCapitals[6];
    nicknameBox.style.backgroundColor = 'green';
    capitalBox.style.backgroundColor = 'green';
 }

 //Delaware
 if(trueStateName.innerHTML === stateNames[7] && capitals.innerHTML !== stateCapitals[7]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[7] && year.innerHTML !== stateYears[7]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[7] && facts.innerHTML !== stateFacts[7]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[7] && nicknames.innerHTML !== stateNicknames[7]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[7]) {
    nicknameBox.innerHTML = stateNicknames[7];
    factBox.innerHTML = stateFacts[7];
    nicknameBox.style.backgroundColor = 'green';
    factBox.style.backgroundColor = 'green';
 }

 //Florida
 if(trueStateName.innerHTML === stateNames[8] && capitals.innerHTML !== stateCapitals[8]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[8] && year.innerHTML !== stateYears[8]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[8] && facts.innerHTML !== stateFacts[8]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[8] && nicknames.innerHTML !== stateNicknames[8]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[8]) {
    factBox.innerHTML = stateFacts[8];
    factBox.style.backgroundColor = 'green';
 }

 //Georgia
 if(trueStateName.innerHTML === stateNames[9] && capitals.innerHTML !== stateCapitals[9]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[9] && year.innerHTML !== stateYears[9]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[9] && facts.innerHTML !== stateFacts[9]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[9] && nicknames.innerHTML !== stateNicknames[9]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[9]) {
    yearBox.innerHTML = stateYears[9];
    factBox.innerHTML = stateFacts[9];
    yearBox.style.backgroundColor = 'green';
    factBox.style.backgroundColor = 'green';
 }


 //Hawaii
 if(trueStateName.innerHTML === stateNames[10] && capitals.innerHTML !== stateCapitals[10]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[10] && year.innerHTML !== stateYears[10]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[10] && facts.innerHTML !== stateFacts[10]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[10] && nicknames.innerHTML !== stateNicknames[10]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[10]) {
    factBox.innerHTML = stateFacts[10];
    factBox.style.backgroundColor = 'green';
 }

 //Idaho
 if(trueStateName.innerHTML === stateNames[11] && capitals.innerHTML !== stateCapitals[11]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[11] && year.innerHTML !== stateYears[11]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[11] && facts.innerHTML !== stateFacts[11]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[11] && nicknames.innerHTML !== stateNicknames[11]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[11]) {
    yearBox.innerHTML = stateYears[11];
    nicknameBox.innerHTML = stateNicknames[11];
    yearBox.style.backgroundColor = 'green';
    nicknameBox.style.backgroundColor = 'green';
 }

 //Illinois
 if(trueStateName.innerHTML === stateNames[12] && capitals.innerHTML !== stateCapitals[12]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[12] && year.innerHTML !== stateYears[12]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[12] && facts.innerHTML !== stateFacts[12]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[12] && nicknames.innerHTML !== stateNicknames[12]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[12]) {
    factBox.innerHTML = stateFacts[12];
    capitalBox.innerHTML = stateCapitals[12];
    factBox.style.backgroundColor = 'green';
    capitalBox.style.backgroundColor = 'green';
 }

 //Indiana
 if(trueStateName.innerHTML === stateNames[13] && capitals.innerHTML !== stateCapitals[13]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[13] && year.innerHTML !== stateYears[13]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[13] && facts.innerHTML !== stateFacts[13]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[13] && nicknames.innerHTML !== stateNicknames[13]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[13]) {
    factBox.innerHTML = stateFacts[13];
    capitalBox.innerHTML = stateCapitals[13];
    factBox.style.backgroundColor = 'green';
    capitalBox.style.backgroundColor = 'green';
 }
  
 //Iowa 
 if(trueStateName.innerHTML === stateNames[14] && capitals.innerHTML !== stateCapitals[14]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[14] && year.innerHTML !== stateYears[14]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[14] && facts.innerHTML !== stateFacts[14]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[14] && nicknames.innerHTML !== stateNicknames[14]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[14]) {
    factBox.innerHTML = stateFacts[14];
    capitalBox.innerHTML = stateCapitals[14];
    factBox.style.backgroundColor = 'green';
    capitalBox.style.backgroundColor = 'green';
 }

//Kansas
if(trueStateName.innerHTML === stateNames[15] && capitals.innerHTML !== stateCapitals[15]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[15] && year.innerHTML !== stateYears[15]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[15] && facts.innerHTML !== stateFacts[15]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[15] && nicknames.innerHTML !== stateNicknames[15]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[15]) {
    nicknameBox.innerHTML = stateNicknames[15];
    capitalBox.innerHTML = stateCapitals[15];
    nicknameBox.style.backgroundColor = 'green';
    capitalBox.style.backgroundColor = 'green';
 }

 //Kentucky
 if(trueStateName.innerHTML === stateNames[16] && capitals.innerHTML !== stateCapitals[16]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[16] && year.innerHTML !== stateYears[16]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[16] && facts.innerHTML !== stateFacts[16]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[16] && nicknames.innerHTML !== stateNicknames[16]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[16]) {
    nicknameBox.innerHTML = stateNicknames[16];
    factBox.innerHTML = stateFacts[16];
    nicknameBox.style.backgroundColor = 'green';
    factBox.style.backgroundColor = 'green';
 }

 //Louisiana
 if(trueStateName.innerHTML === stateNames[17] && capitals.innerHTML !== stateCapitals[17]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[17] && year.innerHTML !== stateYears[17]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[17] && facts.innerHTML !== stateFacts[17]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[17] && nicknames.innerHTML !== stateNicknames[17]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[17]) {
    capitalBox.innerHTML = stateCapitals[17];
    factBox.innerHTML = stateFacts[17];
    capitalBox.style.backgroundColor = 'green';
    factBox.style.backgroundColor = 'green';
 }

 //Maine
 if(trueStateName.innerHTML === stateNames[18] && capitals.innerHTML !== stateCapitals[18]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[18] && year.innerHTML !== stateYears[18]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[18] && facts.innerHTML !== stateFacts[18]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[18] && nicknames.innerHTML !== stateNicknames[18]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[18]) {
    yearBox.innerHTML = stateYears[18];
    factBox.innerHTML = stateFacts[18];
    yearBox.style.backgroundColor = 'green';
    factBox.style.backgroundColor = 'green';
 }

 //Maryland
 if(trueStateName.innerHTML === stateNames[19] && capitals.innerHTML !== stateCapitals[19]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[19] && year.innerHTML !== stateYears[19]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[19] && facts.innerHTML !== stateFacts[19]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[19] && nicknames.innerHTML !== stateNicknames[19]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[19]) {
    capitalBox.innerHTML = stateCapitals[19];
    factBox.innerHTML = stateFacts[19];
    capitalBox.style.backgroundColor = 'green';
    factBox.style.backgroundColor = 'green';
 }

 //Massachusetts
 if(trueStateName.innerHTML === stateNames[20] && capitals.innerHTML !== stateCapitals[20]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[20] && year.innerHTML !== stateYears[20]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[20] && facts.innerHTML !== stateFacts[20]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[20] && nicknames.innerHTML !== stateNicknames[20]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[20]){
    factBox.innerHTML = stateFacts[20];
    factBox.style.backgroundColor = 'green';
 }

 //Michigan
 if(trueStateName.innerHTML === stateNames[21] && capitals.innerHTML !== stateCapitals[21]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[21] && year.innerHTML !== stateYears[21]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[21] && facts.innerHTML !== stateFacts[21]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[21] && nicknames.innerHTML !== stateNicknames[21]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[21]){
    factBox.innerHTML = stateFacts[21];
    factBox.style.backgroundColor = 'green';
 }

 //Minnesota
 if(trueStateName.innerHTML === stateNames[22] && capitals.innerHTML !== stateCapitals[22]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[22] && year.innerHTML !== stateYears[22]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[22] && facts.innerHTML !== stateFacts[22]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[22] && nicknames.innerHTML !== stateNicknames[22]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[22]){
    yearBox.innerHTML = stateYears[22];
    factBox.innerHTML = stateFacts[22];
    yearBox.style.backgroundColor = 'green';
    factBox.style.backgroundColor = 'green';
 }

 //Mississippi
 if(trueStateName.innerHTML === stateNames[23] && capitals.innerHTML !== stateCapitals[23]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[23] && year.innerHTML !== stateYears[23]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[23] && facts.innerHTML !== stateFacts[23]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[23] && nicknames.innerHTML !== stateNicknames[23]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[23]){
    factBox.innerHTML = stateFacts[23];
    factBox.style.backgroundColor = 'green';
 }

 //Missouri
 if(trueStateName.innerHTML === stateNames[24] && capitals.innerHTML !== stateCapitals[24]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[24] && year.innerHTML !== stateYears[24]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[24] && facts.innerHTML !== stateFacts[24]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[24] && nicknames.innerHTML !== stateNicknames[24]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[24]){
    nicknameBox.innerHTML = stateNicknames[24];
    yearBox.innerHTML = stateYears[24];
    nicknameBox.style.backgroundColor = 'green';
    yearBox.style.backgroundColor = 'green';
 }

 //Montana
 if(trueStateName.innerHTML === stateNames[25] && capitals.innerHTML !== stateCapitals[25]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[25] && year.innerHTML !== stateYears[25]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[25] && facts.innerHTML !== stateFacts[25]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[25] && nicknames.innerHTML !== stateNicknames[25]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[25]){
    factBox.innerHTML = stateFacts[25];
    yearBox.innerHTML = stateYears[25];
    factBox.style.backgroundColor = 'green';
    yearBox.style.backgroundColor = 'green';
 }

 //Nebraska
 if(trueStateName.innerHTML === stateNames[26] && capitals.innerHTML !== stateCapitals[26]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[26] && year.innerHTML !== stateYears[26]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[26] && facts.innerHTML !== stateFacts[26]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[26] && nicknames.innerHTML !== stateNicknames[26]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[26]){
    capitalBox.innerHTML = stateCapitals[26];
    nicknameBox.innerHTML = stateNicknames[26];
    capitalBox.style.backgroundColor = 'green';
    nicknameBox.style.backgroundColor = 'green';
 }

 //Nevada
 if(trueStateName.innerHTML === stateNames[27] && capitals.innerHTML !== stateCapitals[27]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[27] && year.innerHTML !== stateYears[27]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[27] && facts.innerHTML !== stateFacts[27]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[27] && nicknames.innerHTML !== stateNicknames[27]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[27]){
    factBox.innerHTML = stateFacts[27];
    factBox.style.backgroundColor = 'green';
 }

 //New Hempsire

 if(trueStateName.innerHTML === stateNames[28] && capitals.innerHTML !== stateCapitals[28]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[28] && year.innerHTML !== stateYears[28]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[28] && facts.innerHTML !== stateFacts[28]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[28] && nicknames.innerHTML !== stateNicknames[28]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[28]){
    factBox.innerHTML = stateFacts[28];
    nicknameBox.innerHTML = stateNicknames[28];
    factBox.style.backgroundColor = 'green';
    nicknameBox.style.backgroundColor = 'green';
 }

 //New Jersey
 if(trueStateName.innerHTML === stateNames[29] && capitals.innerHTML !== stateCapitals[29]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[29] && year.innerHTML !== stateYears[29]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[29] && facts.innerHTML !== stateFacts[29]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[29] && nicknames.innerHTML !== stateNicknames[29]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[29]){
    factBox.innerHTML = stateFacts[29];
    nicknameBox.innerHTML = stateNicknames[29];
    factBox.style.backgroundColor = 'green';
    nicknameBox.style.backgroundColor = 'green';
 }

 //New Mexico
 if(trueStateName.innerHTML === stateNames[30] && capitals.innerHTML !== stateCapitals[30]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[30] && year.innerHTML !== stateYears[30]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[30] && facts.innerHTML !== stateFacts[30]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[30] && nicknames.innerHTML !== stateNicknames[30]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[30]){
    factBox.innerHTML = stateFacts[30];
    capitalBox.innerHTML = stateCapitals[30];
    factBox.style.backgroundColor = 'green';
    capitalBox.style.backgroundColor = 'green';
 }

 //New York
 if(trueStateName.innerHTML === stateNames[31] && capitals.innerHTML !== stateCapitals[31]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[31] && year.innerHTML !== stateYears[31]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[31] && facts.innerHTML !== stateFacts[31]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[31] && nicknames.innerHTML !== stateNicknames[31]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[31]){
    nicknameBox.innerHTML = stateNicknames[31];
    capitalBox.innerHTML = stateCapitals[31];
    factBox.style.backgroundColor = 'green';
    capitalBox.style.backgroundColor = 'green';
 }

 //North Carolina
 if(trueStateName.innerHTML === stateNames[32] && capitals.innerHTML !== stateCapitals[32]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[32] && year.innerHTML !== stateYears[32]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[32] && facts.innerHTML !== stateFacts[32]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[32] && nicknames.innerHTML !== stateNicknames[32]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[32]){
    factBox.innerHTML = stateFacts[32];
    factBox.style.backgroundColor = 'green';
 }

 //North Dakota
 if(trueStateName.innerHTML === stateNames[33] && capitals.innerHTML !== stateCapitals[33]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[33] && year.innerHTML !== stateYears[33]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[33] && facts.innerHTML !== stateFacts[33]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[33] && nicknames.innerHTML !== stateNicknames[33]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[33]){
    factBox.innerHTML = stateFacts[33];
    nicknameBox.innerHTML = stateNicknames[33];
    factBox.style.backgroundColor = 'green';
    nicknameBox.style.backgroundColor = 'green';
 }

 //Ohio
 if(trueStateName.innerHTML === stateNames[34] && capitals.innerHTML !== stateCapitals[34]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[34] && year.innerHTML !== stateYears[34]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[34] && facts.innerHTML !== stateFacts[34]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[34] && nicknames.innerHTML !== stateNicknames[34]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[34]){
    factBox.innerHTML = stateFacts[34];
    yearBox.innerHTML = stateYears[34];
    factBox.style.backgroundColor = 'green';
    yearBox.style.backgroundColor = 'green';
 }

 //Oklahoma
 if(trueStateName.innerHTML === stateNames[35] && capitals.innerHTML !== stateCapitals[35]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[35] && year.innerHTML !== stateYears[35]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[35] && facts.innerHTML !== stateFacts[35]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[35] && nicknames.innerHTML !== stateNicknames[35]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[35]){
    factBox.innerHTML = stateFacts[35];
    nicknameBox.innerHTML = stateNicknames[35];
    factBox.style.backgroundColor = 'green';
    nicknameBox.style.backgroundColor = 'green';
 }

 //Oregon
 if(trueStateName.innerHTML === stateNames[36] && capitals.innerHTML !== stateCapitals[36]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[36] && year.innerHTML !== stateYears[36]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[36] && facts.innerHTML !== stateFacts[36]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[36] && nicknames.innerHTML !== stateNicknames[36]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[36]){
    yearBox.innerHTML = stateYears[36];
    nicknameBox.innerHTML = stateNicknames[36];
    yearBox.style.backgroundColor = 'green';
    nicknameBox.style.backgroundColor = 'green';
 }

 //Pennsylvania
 if(trueStateName.innerHTML === stateNames[37] && capitals.innerHTML !== stateCapitals[37]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[37] && year.innerHTML !== stateYears[37]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[37] && facts.innerHTML !== stateFacts[37]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[37] && nicknames.innerHTML !== stateNicknames[37]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[37]){
    factBox.innerHTML = stateFacts[37];
    factBox.style.backgroundColor = 'green';
 }

 //Rhode Island
 if(trueStateName.innerHTML === stateNames[38] && capitals.innerHTML !== stateCapitals[38]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[38] && year.innerHTML !== stateYears[38]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[38] && facts.innerHTML !== stateFacts[38]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[38] && nicknames.innerHTML !== stateNicknames[38]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[38]){
    factBox.innerHTML = stateFacts[38];
    nicknameBox.innerHTML = stateNicknames[38];
    factBox.style.backgroundColor = 'green';
    nicknameBox.style.backgroundColor = 'green';
 }

 //South Carolina 
 if(trueStateName.innerHTML === stateNames[39] && capitals.innerHTML !== stateCapitals[39]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[39] && year.innerHTML !== stateYears[39]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[39] && facts.innerHTML !== stateFacts[39]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[39] && nicknames.innerHTML !== stateNicknames[39]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[39]){
    factBox.innerHTML = stateFacts[39];
    factBox.style.backgroundColor = 'green';
}

//South Dakota
if(trueStateName.innerHTML === stateNames[40] && capitals.innerHTML !== stateCapitals[40]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[40] && year.innerHTML !== stateYears[40]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[40] && facts.innerHTML !== stateFacts[40]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[40] && nicknames.innerHTML !== stateNicknames[40]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[40]){
    factBox.innerHTML = stateFacts[40];
    nicknameBox.innerHTML = stateNicknames[40];
    factBox.style.backgroundColor = 'green';
    nicknameBox.style.backgroundColor = 'green';
 }

 //Tennessee
 if(trueStateName.innerHTML === stateNames[41] && capitals.innerHTML !== stateCapitals[41]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[41] && year.innerHTML !== stateYears[41]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[41] && facts.innerHTML !== stateFacts[41]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[41] && nicknames.innerHTML !== stateNicknames[41]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[41]){
    capitalBox.innerHTML = stateCapitals[41];
    nicknameBox.innerHTML = stateNicknames[41];
    capitalBox.style.backgroundColor = 'green';
    nicknameBox.style.backgroundColor = 'green';
 }
 // Texas
 if(trueStateName.innerHTML === stateNames[42] && capitals.innerHTML !== stateCapitals[42]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[42] && year.innerHTML !== stateYears[42]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[42] && facts.innerHTML !== stateFacts[42]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[42] && nicknames.innerHTML !== stateNicknames[42]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[42]){
    yearBox.innerHTML = stateYears[42];
    nicknameBox.innerHTML = stateNicknames[42];
    yearBox.style.backgroundColor = 'green';
    nicknameBox.style.backgroundColor = 'green';
 }

 //Utah
 if(trueStateName.innerHTML === stateNames[43] && capitals.innerHTML !== stateCapitals[43]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[43] && year.innerHTML !== stateYears[43]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[43] && facts.innerHTML !== stateFacts[43]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[43] && nicknames.innerHTML !== stateNicknames[43]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[43]){
    factBox.innerHTML = stateFacts[43];
    factBox.style.backgroundColor = 'green';
 }

 //Vermont
 if(trueStateName.innerHTML === stateNames[44] && capitals.innerHTML !== stateCapitals[44]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[44] && year.innerHTML !== stateYears[44]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[44] && facts.innerHTML !== stateFacts[44]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[44] && nicknames.innerHTML !== stateNicknames[44]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[44]){
    factBox.innerHTML = stateFacts[44];
    nicknameBox.innerHTML = stateNicknames[44];
    factBox.style.backgroundColor = 'green';
    nicknameBox.style.backgroundColor = 'green';
 }

 //Virginia
 if(trueStateName.innerHTML === stateNames[45] && capitals.innerHTML !== stateCapitals[45]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[45] && year.innerHTML !== stateYears[45]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[45] && facts.innerHTML !== stateFacts[45]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[45] && nicknames.innerHTML !== stateNicknames[45]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[45]){
    factBox.innerHTML = stateFacts[45];
    factBox.style.backgroundColor = 'green';
 }

 //Washington
 if(trueStateName.innerHTML === stateNames[46] && capitals.innerHTML !== stateCapitals[46]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[46] && year.innerHTML !== stateYears[46]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[46] && facts.innerHTML !== stateFacts[46]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[46] && nicknames.innerHTML !== stateNicknames[46]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[46]){
    factBox.innerHTML = stateFacts[46];
    capitalBox.innerHTML = stateCapitals[46];
    factBox.style.backgroundColor = 'green';
    capitalBox.style.backgroundColor = 'green';
 }

 //West Virginia
 if(trueStateName.innerHTML === stateNames[47] && capitals.innerHTML !== stateCapitals[47]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[47] && year.innerHTML !== stateYears[47]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[47] && facts.innerHTML !== stateFacts[47]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[47] && nicknames.innerHTML !== stateNicknames[47]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[47]){
    yearBox.innerHTML = stateYears[47];
    capitalBox.innerHTML = stateCapitals[47];
    yearBox.style.backgroundColor = 'green';
    capitalBox.style.backgroundColor = 'green';
 }

 //Wisconsin
 if(trueStateName.innerHTML === stateNames[48] && capitals.innerHTML !== stateCapitals[48]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[48] && year.innerHTML !== stateYears[48]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[48] && facts.innerHTML !== stateFacts[48]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[48] && nicknames.innerHTML !== stateNicknames[48]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[48]){
    factBox.innerHTML = stateFacts[48];
    nicknameBox.innerHTML = stateNicknames[48];
    factBox.style.backgroundColor = 'green';
    nicknameBox.style.backgroundColor = 'green';
 }

 //Wyoming
 if(trueStateName.innerHTML === stateNames[49] && capitals.innerHTML !== stateCapitals[49]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[49] && year.innerHTML !== stateYears[49]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[49] && facts.innerHTML !== stateFacts[49]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[49] && nicknames.innerHTML !== stateNicknames[49]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[49]){
    factBox.innerHTML = stateFacts[49];
    capitalBox.innerHTML = stateCapitals[49];
    factBox.style.backgroundColor = 'green';
    capitalBox.style.backgroundColor = 'green';
 }
})

//Alabama
if(trueStateName.innerHTML === stateNames[0] && capitals.innerHTML !== stateCapitals[0]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[0] && year.innerHTML !== stateYears[0]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[0] && facts.innerHTML !== stateFacts[0]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[0] && nicknames.innerHTML !== stateNicknames[0]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[0]) {
    nicknames.innerHTML = stateNicknames[0];
    capitals.innerHTML = stateCapitals[0];
    nicknameBox.style.backgroundColor = 'green';
    capitalBox.style.backgroundColor = 'green';
 }
 
 //Alaska
 if(trueStateName.innerHTML === stateNames[1] && capitals.innerHTML !== stateCapitals[1]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[1] && year.innerHTML !== stateYears[1]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[1] && facts.innerHTML !== stateFacts[1]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[1] && nicknames.innerHTML !== stateNicknames[1]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[1]) {
    factBox.innerHTML = stateFacts[1];
    factBox.style.backgroundColor = 'green';
 }

//Arizona
if(trueStateName.innerHTML === stateNames[2] && capitals.innerHTML !== stateCapitals[2]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[2] && year.innerHTML !== stateYears[2]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[2] && facts.innerHTML !== stateFacts[2]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[2] && nicknames.innerHTML !== stateNicknames[2]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[2]) {
    factBox.innerHTML = stateFacts[2];
    yearBox.innerHTML = stateYears[2];
    factBox.style.backgroundColor = 'green';
    yearBox.style.backgroundColor = 'green';
 }

//Arkansas
if(trueStateName.innerHTML === stateNames[3] && capitals.innerHTML !== stateCapitals[3]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[3] && year.innerHTML !== stateYears[3]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[3] && facts.innerHTML !== stateFacts[3]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[3] && nicknames.innerHTML !== stateNicknames[3]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[3]) {
    factBox.innerHTML = stateFacts[3];
    factBox.style.backgroundColor = 'green';
 }

 //California
 if(trueStateName.innerHTML === stateNames[4] && capitals.innerHTML !== stateCapitals[4]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[4] && year.innerHTML !== stateYears[4]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[4] && facts.innerHTML !== stateFacts[4]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[4] && nicknames.innerHTML !== stateNicknames[4]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[4]) {
    yearBox.innerHTML = stateYears[4];
    capitalBox.innerHTML = stateCapitals[4];
    yearBox.style.backgroundColor = 'green';
    capitalBox.style.backgroundColor = 'green';
 }

//Colorado
if(trueStateName.innerHTML === stateNames[5] && capitals.innerHTML !== stateCapitals[5]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[5] && year.innerHTML !== stateYears[5]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[5] && facts.innerHTML !== stateFacts[5]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[5] && nicknames.innerHTML !== stateNicknames[5]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[5]) {
    factBox.innerHTML = stateFacts[5];
    factBox.style.backgroundColor = 'green';
    capitalBox.innerHTML = stateCapitals[5];
    capitalBox.style.backgroundColor = 'green';
 }

 //Connecticut
 if(trueStateName.innerHTML === stateNames[6] && capitals.innerHTML !== stateCapitals[6]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[6] && year.innerHTML !== stateYears[6]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[6] && facts.innerHTML !== stateFacts[6]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[6] && nicknames.innerHTML !== stateNicknames[6]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[6]) {
    nicknameBox.innerHTML = stateNicknames[6];
    capitalBox.innerHTML = stateCapitals[6];
    nicknameBox.style.backgroundColor = 'green';
    capitalBox.style.backgroundColor = 'green';
 }

 //Delaware
 if(trueStateName.innerHTML === stateNames[7] && capitals.innerHTML !== stateCapitals[7]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[7] && year.innerHTML !== stateYears[7]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[7] && facts.innerHTML !== stateFacts[7]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[7] && nicknames.innerHTML !== stateNicknames[7]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[7]) {
    nicknameBox.innerHTML = stateNicknames[7];
    factBox.innerHTML = stateFacts[7];
    nicknameBox.style.backgroundColor = 'green';
    factBox.style.backgroundColor = 'green';
 }

 //Florida
 if(trueStateName.innerHTML === stateNames[8] && capitals.innerHTML !== stateCapitals[8]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[8] && year.innerHTML !== stateYears[8]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[8] && facts.innerHTML !== stateFacts[8]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[8] && nicknames.innerHTML !== stateNicknames[8]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[8]) {
    factBox.innerHTML = stateFacts[8];
    factBox.style.backgroundColor = 'green';
 }

 //Georgia
 if(trueStateName.innerHTML === stateNames[9] && capitals.innerHTML !== stateCapitals[9]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[9] && year.innerHTML !== stateYears[9]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[9] && facts.innerHTML !== stateFacts[9]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[9] && nicknames.innerHTML !== stateNicknames[9]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[9]) {
    yearBox.innerHTML = stateYears[9];
    factBox.innerHTML = stateFacts[9];
    yearBox.style.backgroundColor = 'green';
    factBox.style.backgroundColor = 'green';
 }


 //Hawaii
 if(trueStateName.innerHTML === stateNames[10] && capitals.innerHTML !== stateCapitals[10]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[10] && year.innerHTML !== stateYears[10]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[10] && facts.innerHTML !== stateFacts[10]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[10] && nicknames.innerHTML !== stateNicknames[10]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[10]) {
    factBox.innerHTML = stateFacts[10];
    factBox.style.backgroundColor = 'green';
 }

 //Idaho
 if(trueStateName.innerHTML === stateNames[11] && capitals.innerHTML !== stateCapitals[11]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[11] && year.innerHTML !== stateYears[11]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[11] && facts.innerHTML !== stateFacts[11]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[11] && nicknames.innerHTML !== stateNicknames[11]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[11]) {
    yearBox.innerHTML = stateYears[11];
    nicknameBox.innerHTML = stateNicknames[11];
    yearBox.style.backgroundColor = 'green';
    nicknameBox.style.backgroundColor = 'green';
 }

 //Illinois
 if(trueStateName.innerHTML === stateNames[12] && capitals.innerHTML !== stateCapitals[12]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[12] && year.innerHTML !== stateYears[12]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[12] && facts.innerHTML !== stateFacts[12]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[12] && nicknames.innerHTML !== stateNicknames[12]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[12]) {
    factBox.innerHTML = stateFacts[12];
    capitalBox.innerHTML = stateCapitals[12];
    factBox.style.backgroundColor = 'green';
    capitalBox.style.backgroundColor = 'green';
 }

 //Indiana
 if(trueStateName.innerHTML === stateNames[13] && capitals.innerHTML !== stateCapitals[13]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[13] && year.innerHTML !== stateYears[13]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[13] && facts.innerHTML !== stateFacts[13]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[13] && nicknames.innerHTML !== stateNicknames[13]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[13]) {
    factBox.innerHTML = stateFacts[13];
    capitalBox.innerHTML = stateCapitals[13];
    factBox.style.backgroundColor = 'green';
    capitalBox.style.backgroundColor = 'green';
 }
  
 //Iowa 
 if(trueStateName.innerHTML === stateNames[14] && capitals.innerHTML !== stateCapitals[14]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[14] && year.innerHTML !== stateYears[14]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[14] && facts.innerHTML !== stateFacts[14]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[14] && nicknames.innerHTML !== stateNicknames[14]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[14]) {
    factBox.innerHTML = stateFacts[14];
    capitalBox.innerHTML = stateCapitals[14];
    factBox.style.backgroundColor = 'green';
    capitalBox.style.backgroundColor = 'green';
 }

//Kansas
if(trueStateName.innerHTML === stateNames[15] && capitals.innerHTML !== stateCapitals[15]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[15] && year.innerHTML !== stateYears[15]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[15] && facts.innerHTML !== stateFacts[15]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[15] && nicknames.innerHTML !== stateNicknames[15]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[15]) {
    nicknameBox.innerHTML = stateNicknames[15];
    capitalBox.innerHTML = stateCapitals[15];
    nicknameBox.style.backgroundColor = 'green';
    capitalBox.style.backgroundColor = 'green';
 }

 //Kentucky
 if(trueStateName.innerHTML === stateNames[16] && capitals.innerHTML !== stateCapitals[16]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[16] && year.innerHTML !== stateYears[16]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[16] && facts.innerHTML !== stateFacts[16]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[16] && nicknames.innerHTML !== stateNicknames[16]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[16]) {
    nicknameBox.innerHTML = stateNicknames[16];
    factBox.innerHTML = stateFacts[16];
    nicknameBox.style.backgroundColor = 'green';
    factBox.style.backgroundColor = 'green';
 }

 //Louisiana
 if(trueStateName.innerHTML === stateNames[17] && capitals.innerHTML !== stateCapitals[17]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[17] && year.innerHTML !== stateYears[17]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[17] && facts.innerHTML !== stateFacts[17]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[17] && nicknames.innerHTML !== stateNicknames[17]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[17]) {
    capitalBox.innerHTML = stateCapitals[17];
    factBox.innerHTML = stateFacts[17];
    capitalBox.style.backgroundColor = 'green';
    factBox.style.backgroundColor = 'green';
 }

 //Maine
 if(trueStateName.innerHTML === stateNames[18] && capitals.innerHTML !== stateCapitals[18]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[18] && year.innerHTML !== stateYears[18]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[18] && facts.innerHTML !== stateFacts[18]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[18] && nicknames.innerHTML !== stateNicknames[18]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[18]) {
    yearBox.innerHTML = stateYears[18];
    factBox.innerHTML = stateFacts[18];
    yearBox.style.backgroundColor = 'green';
    factBox.style.backgroundColor = 'green';
 }

 //Maryland
 if(trueStateName.innerHTML === stateNames[19] && capitals.innerHTML !== stateCapitals[19]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[19] && year.innerHTML !== stateYears[19]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[19] && facts.innerHTML !== stateFacts[19]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[19] && nicknames.innerHTML !== stateNicknames[19]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[19]) {
    capitalBox.innerHTML = stateCapitals[19];
    factBox.innerHTML = stateFacts[19];
    capitalBox.style.backgroundColor = 'green';
    factBox.style.backgroundColor = 'green';
 }

 //Massachusetts
 if(trueStateName.innerHTML === stateNames[20] && capitals.innerHTML !== stateCapitals[20]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[20] && year.innerHTML !== stateYears[20]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[20] && facts.innerHTML !== stateFacts[20]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[20] && nicknames.innerHTML !== stateNicknames[20]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[20]){
    factBox.innerHTML = stateFacts[20];
    factBox.style.backgroundColor = 'green';
 }

 //Michigan
 if(trueStateName.innerHTML === stateNames[21] && capitals.innerHTML !== stateCapitals[21]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[21] && year.innerHTML !== stateYears[21]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[21] && facts.innerHTML !== stateFacts[21]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[21] && nicknames.innerHTML !== stateNicknames[21]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[21]){
    factBox.innerHTML = stateFacts[21];
    factBox.style.backgroundColor = 'green';
 }

 //Minnesota
 if(trueStateName.innerHTML === stateNames[22] && capitals.innerHTML !== stateCapitals[22]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[22] && year.innerHTML !== stateYears[22]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[22] && facts.innerHTML !== stateFacts[22]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[22] && nicknames.innerHTML !== stateNicknames[22]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[22]){
    yearBox.innerHTML = stateYears[22];
    factBox.innerHTML = stateFacts[22];
    yearBox.style.backgroundColor = 'green';
    factBox.style.backgroundColor = 'green';
 }

 //Mississippi
 if(trueStateName.innerHTML === stateNames[23] && capitals.innerHTML !== stateCapitals[23]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[23] && year.innerHTML !== stateYears[23]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[23] && facts.innerHTML !== stateFacts[23]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[23] && nicknames.innerHTML !== stateNicknames[23]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[23]){
    factBox.innerHTML = stateFacts[23];
    factBox.style.backgroundColor = 'green';
 }

 //Missouri
 if(trueStateName.innerHTML === stateNames[24] && capitals.innerHTML !== stateCapitals[24]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[24] && year.innerHTML !== stateYears[24]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[24] && facts.innerHTML !== stateFacts[24]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[24] && nicknames.innerHTML !== stateNicknames[24]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[24]){
    nicknameBox.innerHTML = stateNicknames[24];
    yearBox.innerHTML = stateYears[24];
    nicknameBox.style.backgroundColor = 'green';
    yearBox.style.backgroundColor = 'green';
 }

 //Montana
 if(trueStateName.innerHTML === stateNames[25] && capitals.innerHTML !== stateCapitals[25]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[25] && year.innerHTML !== stateYears[25]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[25] && facts.innerHTML !== stateFacts[25]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[25] && nicknames.innerHTML !== stateNicknames[25]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[25]){
    factBox.innerHTML = stateFacts[25];
    yearBox.innerHTML = stateYears[25];
    factBox.style.backgroundColor = 'green';
    yearBox.style.backgroundColor = 'green';
 }

 //Nebraska
 if(trueStateName.innerHTML === stateNames[26] && capitals.innerHTML !== stateCapitals[26]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[26] && year.innerHTML !== stateYears[26]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[26] && facts.innerHTML !== stateFacts[26]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[26] && nicknames.innerHTML !== stateNicknames[26]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[26]){
    capitalBox.innerHTML = stateCapitals[26];
    nicknameBox.innerHTML = stateNicknames[26];
    capitalBox.style.backgroundColor = 'green';
    nicknameBox.style.backgroundColor = 'green';
 }

 //Nevada
 if(trueStateName.innerHTML === stateNames[27] && capitals.innerHTML !== stateCapitals[27]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[27] && year.innerHTML !== stateYears[27]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[27] && facts.innerHTML !== stateFacts[27]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[27] && nicknames.innerHTML !== stateNicknames[27]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[27]){
    factBox.innerHTML = stateFacts[27];
    factBox.style.backgroundColor = 'green';
 }

 //New Hempsire

 if(trueStateName.innerHTML === stateNames[28] && capitals.innerHTML !== stateCapitals[28]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[28] && year.innerHTML !== stateYears[28]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[28] && facts.innerHTML !== stateFacts[28]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[28] && nicknames.innerHTML !== stateNicknames[28]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[28]){
    factBox.innerHTML = stateFacts[28];
    nicknameBox.innerHTML = stateNicknames[28];
    factBox.style.backgroundColor = 'green';
    nicknameBox.style.backgroundColor = 'green';
 }

 //New Jersey
 if(trueStateName.innerHTML === stateNames[29] && capitals.innerHTML !== stateCapitals[29]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[29] && year.innerHTML !== stateYears[29]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[29] && facts.innerHTML !== stateFacts[29]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[29] && nicknames.innerHTML !== stateNicknames[29]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[29]){
    factBox.innerHTML = stateFacts[29];
    nicknameBox.innerHTML = stateNicknames[29];
    factBox.style.backgroundColor = 'green';
    nicknameBox.style.backgroundColor = 'green';
 }

 //New Mexico
 if(trueStateName.innerHTML === stateNames[30] && capitals.innerHTML !== stateCapitals[30]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[30] && year.innerHTML !== stateYears[30]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[30] && facts.innerHTML !== stateFacts[30]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[30] && nicknames.innerHTML !== stateNicknames[30]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[30]){
    factBox.innerHTML = stateFacts[30];
    capitalBox.innerHTML = stateCapitals[30];
    factBox.style.backgroundColor = 'green';
    capitalBox.style.backgroundColor = 'green';
 }

 //New York
 if(trueStateName.innerHTML === stateNames[31] && capitals.innerHTML !== stateCapitals[31]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[31] && year.innerHTML !== stateYears[31]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[31] && facts.innerHTML !== stateFacts[31]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[31] && nicknames.innerHTML !== stateNicknames[31]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[31]){
    nicknameBox.innerHTML = stateNicknames[31];
    capitalBox.innerHTML = stateCapitals[31];
    factBox.style.backgroundColor = 'green';
    capitalBox.style.backgroundColor = 'green';
 }

 //North Carolina
 if(trueStateName.innerHTML === stateNames[32] && capitals.innerHTML !== stateCapitals[32]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[32] && year.innerHTML !== stateYears[32]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[32] && facts.innerHTML !== stateFacts[32]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[32] && nicknames.innerHTML !== stateNicknames[32]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[32]){
    factBox.innerHTML = stateFacts[32];
    factBox.style.backgroundColor = 'green';
 }

 //North Dakota
 if(trueStateName.innerHTML === stateNames[33] && capitals.innerHTML !== stateCapitals[33]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[33] && year.innerHTML !== stateYears[33]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[33] && facts.innerHTML !== stateFacts[33]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[33] && nicknames.innerHTML !== stateNicknames[33]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[33]){
    factBox.innerHTML = stateFacts[33];
    nicknameBox.innerHTML = stateNicknames[33];
    factBox.style.backgroundColor = 'green';
    nicknameBox.style.backgroundColor = 'green';
 }

 //Ohio
 if(trueStateName.innerHTML === stateNames[34] && capitals.innerHTML !== stateCapitals[34]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[34] && year.innerHTML !== stateYears[34]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[34] && facts.innerHTML !== stateFacts[34]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[34] && nicknames.innerHTML !== stateNicknames[34]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[34]){
    factBox.innerHTML = stateFacts[34];
    yearBox.innerHTML = stateYears[34];
    factBox.style.backgroundColor = 'green';
    yearBox.style.backgroundColor = 'green';
 }

 //Oklahoma
 if(trueStateName.innerHTML === stateNames[35] && capitals.innerHTML !== stateCapitals[35]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[35] && year.innerHTML !== stateYears[35]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[35] && facts.innerHTML !== stateFacts[35]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[35] && nicknames.innerHTML !== stateNicknames[35]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[35]){
    factBox.innerHTML = stateFacts[35];
    nicknameBox.innerHTML = stateNicknames[35];
    factBox.style.backgroundColor = 'green';
    nicknameBox.style.backgroundColor = 'green';
 }

 //Oregon
 if(trueStateName.innerHTML === stateNames[36] && capitals.innerHTML !== stateCapitals[36]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[36] && year.innerHTML !== stateYears[36]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[36] && facts.innerHTML !== stateFacts[36]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[36] && nicknames.innerHTML !== stateNicknames[36]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[36]){
    yearBox.innerHTML = stateYears[36];
    nicknameBox.innerHTML = stateNicknames[36];
    yearBox.style.backgroundColor = 'green';
    nicknameBox.style.backgroundColor = 'green';
 }

 //Pennsylvania
 if(trueStateName.innerHTML === stateNames[37] && capitals.innerHTML !== stateCapitals[37]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[37] && year.innerHTML !== stateYears[37]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[37] && facts.innerHTML !== stateFacts[37]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[37] && nicknames.innerHTML !== stateNicknames[37]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[37]){
    factBox.innerHTML = stateFacts[37];
    factBox.style.backgroundColor = 'green';
 }

 //Rhode Island
 if(trueStateName.innerHTML === stateNames[38] && capitals.innerHTML !== stateCapitals[38]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[38] && year.innerHTML !== stateYears[38]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[38] && facts.innerHTML !== stateFacts[38]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[38] && nicknames.innerHTML !== stateNicknames[38]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[38]){
    factBox.innerHTML = stateFacts[38];
    nicknameBox.innerHTML = stateNicknames[38];
    factBox.style.backgroundColor = 'green';
    nicknameBox.style.backgroundColor = 'green';
 }

 //South Carolina 
 if(trueStateName.innerHTML === stateNames[39] && capitals.innerHTML !== stateCapitals[39]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[39] && year.innerHTML !== stateYears[39]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[39] && facts.innerHTML !== stateFacts[39]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[39] && nicknames.innerHTML !== stateNicknames[39]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[39]){
    factBox.innerHTML = stateFacts[39];
    factBox.style.backgroundColor = 'green';
}

//South Dakota
if(trueStateName.innerHTML === stateNames[40] && capitals.innerHTML !== stateCapitals[40]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[40] && year.innerHTML !== stateYears[40]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[40] && facts.innerHTML !== stateFacts[40]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[40] && nicknames.innerHTML !== stateNicknames[40]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[40]){
    factBox.innerHTML = stateFacts[40];
    nicknameBox.innerHTML = stateNicknames[40];
    factBox.style.backgroundColor = 'green';
    nicknameBox.style.backgroundColor = 'green';
 }

 //Tennessee
 if(trueStateName.innerHTML === stateNames[41] && capitals.innerHTML !== stateCapitals[41]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[41] && year.innerHTML !== stateYears[41]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[41] && facts.innerHTML !== stateFacts[41]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[41] && nicknames.innerHTML !== stateNicknames[41]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[41]){
    capitalBox.innerHTML = stateCapitals[41];
    nicknameBox.innerHTML = stateNicknames[41];
    capitalBox.style.backgroundColor = 'green';
    nicknameBox.style.backgroundColor = 'green';
 }
 // Texas
 if(trueStateName.innerHTML === stateNames[42] && capitals.innerHTML !== stateCapitals[42]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[42] && year.innerHTML !== stateYears[42]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[42] && facts.innerHTML !== stateFacts[42]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[42] && nicknames.innerHTML !== stateNicknames[42]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[42]){
    yearBox.innerHTML = stateYears[42];
    nicknameBox.innerHTML = stateNicknames[42];
    yearBox.style.backgroundColor = 'green';
    nicknameBox.style.backgroundColor = 'green';
 }

 //Utah
 if(trueStateName.innerHTML === stateNames[43] && capitals.innerHTML !== stateCapitals[43]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[43] && year.innerHTML !== stateYears[43]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[43] && facts.innerHTML !== stateFacts[43]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[43] && nicknames.innerHTML !== stateNicknames[43]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[43]){
    factBox.innerHTML = stateFacts[43];
    factBox.style.backgroundColor = 'green';
 }

 //Vermont
 if(trueStateName.innerHTML === stateNames[44] && capitals.innerHTML !== stateCapitals[44]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[44] && year.innerHTML !== stateYears[44]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[44] && facts.innerHTML !== stateFacts[44]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[44] && nicknames.innerHTML !== stateNicknames[44]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[44]){
    factBox.innerHTML = stateFacts[44];
    nicknameBox.innerHTML = stateNicknames[44];
    factBox.style.backgroundColor = 'green';
    nicknameBox.style.backgroundColor = 'green';
 }

 //Virginia
 if(trueStateName.innerHTML === stateNames[45] && capitals.innerHTML !== stateCapitals[45]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[45] && year.innerHTML !== stateYears[45]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[45] && facts.innerHTML !== stateFacts[45]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[45] && nicknames.innerHTML !== stateNicknames[45]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[45]){
    factBox.innerHTML = stateFacts[45];
    factBox.style.backgroundColor = 'green';
 }

 //Washington
 if(trueStateName.innerHTML === stateNames[46] && capitals.innerHTML !== stateCapitals[46]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[46] && year.innerHTML !== stateYears[46]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[46] && facts.innerHTML !== stateFacts[46]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[46] && nicknames.innerHTML !== stateNicknames[46]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[46]){
    factBox.innerHTML = stateFacts[46];
    capitalBox.innerHTML = stateCapitals[46];
    factBox.style.backgroundColor = 'green';
    capitalBox.style.backgroundColor = 'green';
 }

 //West Virginia
 if(trueStateName.innerHTML === stateNames[47] && capitals.innerHTML !== stateCapitals[47]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[47] && year.innerHTML !== stateYears[47]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[47] && facts.innerHTML !== stateFacts[47]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[47] && nicknames.innerHTML !== stateNicknames[47]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[47]){
    yearBox.innerHTML = stateYears[47];
    capitalBox.innerHTML = stateCapitals[47];
    yearBox.style.backgroundColor = 'green';
    capitalBox.style.backgroundColor = 'green';
 }

 //Wisconsin
 if(trueStateName.innerHTML === stateNames[48] && capitals.innerHTML !== stateCapitals[48]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[48] && year.innerHTML !== stateYears[48]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[48] && facts.innerHTML !== stateFacts[48]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[48] && nicknames.innerHTML !== stateNicknames[48]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[48]){
    factBox.innerHTML = stateFacts[48];
    nicknameBox.innerHTML = stateNicknames[48];
    factBox.style.backgroundColor = 'green';
    nicknameBox.style.backgroundColor = 'green';
 }

 //Wyoming
 if(trueStateName.innerHTML === stateNames[49] && capitals.innerHTML !== stateCapitals[49]){
    capitalBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[49] && year.innerHTML !== stateYears[49]){
    yearBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[49] && facts.innerHTML !== stateFacts[49]){
    factBox.style.backgroundColor = 'red'
} if(trueStateName.innerHTML === stateNames[49] && nicknames.innerHTML !== stateNicknames[49]){
    nicknameBox.style.backgroundColor = 'red'
} if (trueStateName.innerHTML === stateNames[49]){
    factBox.innerHTML = stateFacts[49];
    capitalBox.innerHTML = stateCapitals[49];
    factBox.style.backgroundColor = 'green';
    capitalBox.style.backgroundColor = 'green';
 }