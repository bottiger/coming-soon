<script setup>
import { computed, ref, onMounted } from 'vue';
import { Collapse } from 'vue-collapsed'

const timelines = ref([
{
    title: 'Cage Fight',
    summary: "Two tech billionaires seemingly agreed to a “cage match” face off.",
    events: [
      { 
        title: 'Annoncement', daysLater: '', date: '21 Jun 2023', img: 'twitter.webp', ref: [
          {
            link: 'https://twitter.com/elonmusk/status/1671364992665264131',
            title: "Annoncement",
            quote: "“I’m up for a cage match if he is lol”",
          },
        ] 
      },
      { 
        title: 'Zuckerberg waits confirmation', daysLater: '', date: '05 Aug 2023', img: 'twitter.webp', ref: [
          {
            link: '',
            title: "Zuckerberg Thread post",
            quote: "“I’m ready today. I suggested Aug 26 when he first challenged, but he hasn’t confirmed. Not holding my breath. I love this sport and will continue competing with people who train no matter what happens here.”",
          },
        ] 
      },
      { 
        title: 'Fight is on', daysLater: '', date: '06 Aug 2023', img: 'twitter.webp', ref: [
          {
            link: 'https://twitter.com/elonmusk/status/1688091377823895552',
            title: "Live stream",
            quote: "“Zuck v Musk fight will be live-streamed on 𝕏.”",
          },
        ] 
      },
      { 
        title: 'Fight is on hold', daysLater: '', date: '06 Aug 2023', img: 'twitter.webp', ref: [
          {
            link: 'https://twitter.com/elonmusk/status/1688377445957652480',
            title: "Back pain",
            quote: "“Exact date is still in flux. I’m getting an MRI of my neck & upper back tomorrow. ”",
          },
        ] 
      },
      { title: 'Waiting', daysLater: '', date: 'Today' }
    ],
    moreInfo: '',
    isExpanded: false,
    imgkey: "twitter",
    category: 'cagefight'
  },
  {
    title: 'Quadruple Twitters revenue and user base by 2028',
    summary: "Mr. Musk claimed he would increase Twitter’s annual revenue to $26.4 billion by 2028, up from $5 billion last year. Cut Twitter’s reliance on advertising to less than 50 percent of revenue. Produce $15 million in revenue from a payments business. Reach 931 million users by 2028. Have 104 million subscribers for a mysterious X by 2028.",
    events: [
      { 
        title: 'Slides leaked to the NYT', daysLater: '', date: '6 May 2022', img: 'twitter.webp', ref: [
          {
            link: 'https://www.nytimes.com/2022/05/06/technology/elon-musk-twitter-pitch-deck.html',
            title: "Inside Elon Musk’s Big Plans for Twitter",
            quote: "“Mr. Musk claimed he would increase Twitter’s annual revenue to $26.4 billion by 2028, up from $5 billion last year (2022).”",
          },
        ] 
      },
      { title: 'Waiting', daysLater: '', date: 'Today' }
    ],
    moreInfo: '',
    isExpanded: false,
    imgkey: "twitter",
    category: 'twitter'
  },
  {
    title: 'Defeat the [Twitter] spam bots or die trying',
    summary: "",
    events: [
      { 
        title: '', daysLater: '', date: '21 April 2022', img: 'twitter.webp', ref: [
          {
            link: 'https://twitter.com/elonmusk/status/1517215066550116354',
            title: "Twitter",
            quote: "“If our twitter bid succeeds, we will defeat the spam bots or die trying!”",
          },
        ] 
      },
      { title: 'Any day now!', daysLater: '', date: 'Today' }
    ],
    moreInfo: '',
    isExpanded: false,
    imgkey: "twitter",
    category: 'twitter'
  },
  {
    title: 'Rocket landing saftey on par with commercial airline',
    summary: 'Currently commercial airlines succesfully land',
    events: [
      {
        title: 'Announcement', daysLater: '', date: '29 Sep 2017', ref: [
          {
            link: 'https://web.archive.org/web/20210819035735/https://www.youtube.com/watch?v=tdUX3ypDVwI',
            timestamp: '8:00',
            title: 'International Astronautical Congress',
            year: 2017,
            quote: '“I think we can get to a landing reliability that is on par with the safest commercial airlines.”',
          },
        ]
      },
      {
        title: 'No legs', daysLater: '', date: '29 Sep 2017', ref: [
          {
            link: 'https://web.archive.org/web/20210819035735/https://www.youtube.com/watch?v=tdUX3ypDVwI',
            timestamp: '8:20',
            title: 'International Astronautical Congress',
            year: 2017,
            quote: '“We will not need legs for the next version. It will land back on it\'s launch mount”',
          },
        ]
      },
      { title: 'Today', daysLater: '', date: 'Today' }
    ],
    moreInfo: '',
    isExpanded: false,
    imgkey: "rocket-landing-safety",
    category: 'spacex'
  },
  /*
  {
    title: 'Vertical takeoff and landing jet',
    events: [
      {
        title: '1000 km', daysLater: '', date: '24 Sep 2015', ref: [
          {
            link: 'https://www.youtube.com/watch?v=BaZbgNWNQ3M&t=1085s',
            title: 'Hyperloop Pod Award Ceremony 2016',
            quote: '“Well I have been thinking about the vertical takeoff and landing electric jet a bit more. I mean, I think I have something that might close. I’m quite tempted to do something about it.”',
          },
        ]
      },
      { title: '1 year later', daysLater: '', date: '23 Sep 2016' },
      { title: '2 years later', daysLater: '', date: '23 Sep 2017' },
      { title: 'Event 4', daysLater: '', date: 'Today' }
    ],
    moreInfo: '',
    isExpanded: false,
    imgkey: "verticaljet",
    category: 'misc'
  }
  */
]);

function handleIndividual(selectedIndex) {
  timelines.value[selectedIndex].isExpanded = !timelines.value[selectedIndex].isExpanded
}

function getTimeInterval(timeline, eventIndex) {
  let earliestDate = Infinity;
  let lastDate = -Infinity;

  // Find the earliest and latest dates in the timeline
  timeline.events.forEach((event) => {
    if (event.date.toLowerCase() === 'today') {
      lastDate = Math.max(lastDate, Date.now());
    } else {
      const eventDate = new Date(event.date);
      earliestDate = Math.min(earliestDate, eventDate.getTime());
      lastDate = Math.max(lastDate, eventDate.getTime());
    }
  });

  // Calculate the total time interval in milliseconds
  const totalInterval = lastDate - earliestDate;

  // Calculate the relative interval for the current event
  let scaledInterval;
  if (eventIndex === 0) {
    scaledInterval = 0; // No interval for the first event (placed way left)
  } else {
    const prevDate = new Date(timeline.events[eventIndex - 1].date);
    const currDate = new Date(timeline.events[eventIndex].date);
    const interval = currDate.getTime() - prevDate.getTime();
    scaledInterval = (interval / totalInterval) * 100;
  }

  return scaledInterval;
}

/*
function img_path(key, name){
    return new URL(`./assets/${key}/${name}`, import.meta.url).href
}
*/
/*
function img_path(key, name) {
  return `/${key}/${name}`;
}
*/

/**
 * Accessibility attributes
 *
 * https://www.w3.org/WAI/ARIA/apg/example-index/accordion/accordion
 */

const toggleAttrs = computed(() =>
  timelines.value.map((question, index) => ({
    id: `toggle_${index}`,
    'aria-expanded': question.isExpanded,
    'aria-controls': `collapse_${index}`,
  }))
)

const collapseAttrs = computed(() =>
  timelines.value.map((_, index) => ({
    'aria-labelledby': `toggle_${index}`,
    id: `collapse_${index}`,
    role: 'region',
  }))
)

onMounted(() => {

  // Get all the timeline elements
var timelines = document.getElementsByClassName("timeline");

// Iterate over each timeline
for (var t = 0; t < timelines.length; t++) {
  var timeline = timelines[t];

  // Calculate the number of days since the first date in the timeline
  var eventDates = timeline.getElementsByClassName("event-date");
  var firstDate = parseDate(eventDates[0].innerHTML);
  var today = new Date();
  var timeDiff = Math.abs(today.getTime() - firstDate.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  // Update the "X days later" text within the current timeline
  var daysLaterElements = timeline.getElementsByClassName("days-later");
  for (var i = 0; i < daysLaterElements.length; i++) {
    daysLaterElements[i].innerHTML = diffDays + " days later";
  }
}


  // Function to parse the date string in format "dd MMM yyyy"
  function parseDate(dateString) {
    var parts = dateString.split(" ");
    var day = parseInt(parts[0], 10);
    var month = parseMonth(parts[1]);
    var year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }

  // Function to convert month name to month index
  function parseMonth(monthString) {
    var months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    return months.indexOf(monthString);
  }
});
</script>

<template>
  <div class="section" v-for="(timeline, index) in timelines" :key="index">
    <p class="h2">{{ timeline.title }}</p>
    <p v-if="timeline.summary" class="event-summary fs-6">{{ timeline.summary }}</p>
    
    <ul class="timeline py-3">
      <li v-for="(event, eventIndex) in timeline.events" :key="eventIndex" class="timeline-event"
        :id="'event-' + (eventIndex + 1) + '-t' + (index + 1)"
        :style="{ left: getTimeInterval(timeline, eventIndex) + '%' }">
        <div class="event-content">
          <div class="event-title">{{ event.title }}</div>
          <div class="event-circle">
            <div v-if="eventIndex < timeline.events.length - 1">
              <div v-if="event.img">
                <!--<img :src="img_path(timeline.imgkey, event.img)" />-->
                <img
                  src="@/assets/twitter/twitter.webp"
                  :srcset="require('@/assets/twitter/twitter.webp?resize&sizes[]=50&sizes[]=60&sizes[]=70')"
                  alt="Twitter logo"
                />
              </div>
              <div v-else><img src="@/assets/questionmark.png" alt=""></div>
            </div>
            <div v-else><span class="days-later"></span></div>
          </div>
          <div class="event-date">{{ event.date }}</div>
        </div>
      </li>
    </ul>

    <div class="ref-box p-2 rounded">
      <a class="cursor-pointer" v-bind="toggleAttrs[index]" @click="handleIndividual(index)" :class="[
        'Panel',
        {
          Active: timeline.isExpanded,
        },
      ]">
        More information and references
      </a>
      <Collapse :when="timeline.isExpanded" class="v-collapse" v-bind="collapseAttrs[index]">
        <p>{{ timeline.moreInfo }}</p>

        <ul>
          <li v-for="(event, eventRefIndex) in timeline.events" :key="eventRefIndex">
            {{ event.title }}
            <div v-if="event.ref !== undefined && event.ref.length > 0">
              <ul>
                <li v-for="(ref, refIndex) in event.ref" :key="refIndex">
                  <a href="{{ ref.link }}">{{ ref.title }}</a> {{ ref.quote }}
                </li>
              </ul>
            </div>
            <span v-else>Citation Needed</span>

          </li>
        </ul>
      </Collapse>
    </div>

  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section {
  margin-top: 30px;
}

.cursor-pointer {
  cursor: pointer;
}

.timeline {
  display: flex;
  justify-content: space-between; /* Position items with equal spacing between them */
  width: 100%; 
  list-style-type: none;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
}

.timeline::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #ccc;
}

.timeline-event {
  display: inline-block;
  text-align: center;
  position: relative;
}

.event-title {
  font-weight: bold;
  margin-bottom: 5px;
}

.event-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #f1f1f1;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #ccc;
}

.event-circle .days-later {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: red;
  font-weight: bold;
  font-size: 14px;
}

.event-circle img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.event-content {
  margin-top: 0px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.event-date {
  color: #888;
}

.my-class {
  transition: height 300ms cubic-bezier(0.3, 0, 0.6, 1);
}

.ref-box {
  background-color: #CDCDCD;
}
</style>
