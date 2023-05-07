import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Nouran Salahieh",
      "title": "Another atmospheric river is coming for California, where neighborhoods are still flooded and hundreds of evacuated residents are in shelters - CNN",
      "description": "Still reeling from storms that inundated neighborhoods, forced rescues and damaged roads, storm-battered California is bracing for another atmospheric river that threatens even more flooding Monday.",
      "url": "https://www.cnn.com/2023/03/13/us/california-atmospheric-river-flood-monday/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230313100439-05-california-weather-0312.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-03-13T10:30:00Z",
      "content": "Still reeling from storms that inundated neighborhoods, forced rescues and damaged roads, storm-battered California is bracing for another atmospheric river that threatens even more flooding Monday.\r… [+6315 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "WLKY Louisville"
      },
      "author": null,
      "title": "March Madness 2023 for Kentucky, Indiana: Game times, tickets, brackets, more - WLKY Louisville",
      "description": "The brackets are set for the 2023 NCAA tournament.",
      "url": "https://www.wlky.com/article/march-madness-2023-for-kentucky-indiana-game-times-tickets-brackets-more/43284595",
      "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/march-madness-logo-1553398337.jpg?crop=1.00xw:0.752xh;0,0&resize=1200:*",
      "publishedAt": "2023-03-13T09:46:00Z",
      "content": "LOUISVILLE, Ky. —The brackets are set for the 2023 NCAA tournament. We're following the Kentucky, Indiana and Northern Kentucky teams, both men and women, on their journeys to the Big Dance.\r\nHere's … [+1344 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Silicon Valley Bank: Money in failed bank is safe, US government says - BBC",
      "description": "Authorities take emergency action to shore up the banking system after two institutions collapse.",
      "url": "https://www.bbc.com/news/world-us-canada-64935170",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/115F4/production/_128965117_760c6bb963734859bf860851f0e26e22223b4c510_117_5500_30945500x3094.jpg",
      "publishedAt": "2023-03-13T09:42:01Z",
      "content": "US authorities took emergency measures on Sunday to shore up the banking system after Silicon Valley Bank (SVB) and Signature Bank collapsed.\r\nPeople and businesses who have money deposited with SVB … [+4353 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MarketWatch"
      },
      "author": "Steve Goldstein",
      "title": "First Republic Bank shares slump 60% in premarket trade - MarketWatch",
      "description": "First Republic Bank shares fell 60% after the weekend collapse of Signature Bank and Friday’s closure of SVB Financial, even as federal regulators stepped...",
      "url": "https://www.marketwatch.com/story/first-republic-bank-shares-slump-60-in-premarket-trade-52c7afff",
      "urlToImage": "https://s.wsj.net/public/resources/MWimages/MW-GP644_MicroS_ZG_20180906154215.jpg",
      "publishedAt": "2023-03-13T09:31:14Z",
      "content": null
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Michelle Toh, Rob North, Olesya Dmitracova",
      "title": "HSBC buys SVB's UK business, ending 'nightmare' for British tech - CNN",
      "description": "HSBC has scooped up the UK arm of failed Silicon Valley Bank, securing the deposits of thousands of British tech firms that hold money at the lender.",
      "url": "https://www.cnn.com/2023/03/13/investing/svb-uk-business-deal-intl-hnk/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230313071812-hsbc-london-file-2022-restricted.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-03-13T09:29:00Z",
      "content": "HSBC has scooped up the UK arm of failed Silicon Valley Bank, securing the deposits of thousands of British tech firms that hold money at the lender. \r\nHad a buyer not been found, SVB UK would have b… [+3636 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Sam Meredith, Hannah Ward-Glenton",
      "title": "Britain’s BBC agrees star soccer host Gary Lineker can return to air after impartiality dispute - CNBC",
      "description": "The BBC, Britain's public service broadcaster, agreed on a deal with star soccer presenter Gary Lineker on Monday.",
      "url": "https://www.cnbc.com/2023/03/13/gary-lineker-bbc-battles-crisis-as-social-media-rules-fuel-mutiny.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107207342-1678694198080-GettyImages-1248019829.jpg?v=1678697643&w=1920&h=1080",
      "publishedAt": "2023-03-13T08:54:03Z",
      "content": "LONDON The BBC, Britain's public service broadcaster, agreed on Monday that star soccer presenter Gary Lineker can return to air and pledged to hold a review of its social media guidance after an imp… [+3567 chars]"
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "Joe Mcdonald",
      "title": "China's Xi wants bigger global role after Saudi-Iran deal - The Associated Press - en Español",
      "description": "BEJIING (AP) — President Xi Jinping called Monday for China to play a bigger role in managing global affairs after Beijing scored a diplomatic coup as the host of talks that produced an agreement by Saudi Arabia and Iran to reopen diplomatic relations .",
      "url": "https://apnews.com/article/china-congress-xi-saudi-iran-deal-a97ac909a4efd30a6a0139a87ae8f26a",
      "urlToImage": "https://storage.googleapis.com/afs-prod/media/dbd280bf98a547dcbf32a769b5b88776/3000.webp",
      "publishedAt": "2023-03-13T08:23:01Z",
      "content": "BEJIING (AP) President Xi Jinping called Monday for China to play a bigger role in managing global affairs after Beijing scored a diplomatic coup as the host of talks that produced an agreement by Sa… [+6013 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Android Police"
      },
      "author": "Rajesh Pandey",
      "title": "Check out the Google Pixel 7a in these hands-on images - Android Police",
      "description": "Another Pixel leak originating from Vietnam",
      "url": "https://www.androidpolice.com/check-out-google-pixel-7a-hands-on-images/",
      "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/12/google-pixel-6a-hero-board.jpg",
      "publishedAt": "2023-03-13T08:08:00Z",
      "content": "Despite its dated hardware, the Google Pixel 6a remains one of the best budget Android phones to buy. It launched in July 2022 after being announced at I/O 2022 in May. With the phone's anniversary f… [+2062 chars]"
    },
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Rachel Pannett, Jennifer Hassan",
      "title": "Ukraine live briefing: Russia suffering heavy losses in Bakhmut, Zelensky says - The Washington Post",
      "description": "Russia’s military leadership could be letting the Wagner mercenary group bear the brunt of casualties in Bakhmut, analysts say.",
      "url": "https://www.washingtonpost.com/world/2023/03/13/russia-ukraine-war-news/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/DSRLR46EZ6OJBUOUPLVQQUS4B4.jpg&w=1440",
      "publishedAt": "2023-03-13T08:02:00Z",
      "content": "Ukrainian President Volodymyr Zelensky said his forces are continuing to inflict heavy losses on attacking Russian fighters in the besieged front-line city of Bakhmut, as Kremlin-backed mercenaries c… [+4958 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NBCSports.com"
      },
      "author": "Peter King",
      "title": "FMIA Trade Notes: Jalen Ramsey goes MIA, Bears Send No. 1 Pick to Panthers for D.J. Moore and More - ProFootballTalk - NBC Sports",
      "description": "Jalen Ramsey to the Dolphins made too much sense, for both Miami and the Rams. It happened Sunday afternoon. We should have seen it coming for weeks.The trade—Ramsey to Miami for a mid-third-round pick, 77th overall, and an invisible tight end from the 2021 t…",
      "url": "https://profootballtalk.nbcsports.com/2023/03/13/peter-king-fmia-nfl-trade-updates-bears-panthers-jalen-ramsey/",
      "urlToImage": "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2023/03/MicrosoftTeams-image.jpg",
      "publishedAt": "2023-03-13T07:26:23Z",
      "content": "Jalen Ramsey to the Dolphins made too much sense, for both Miami and the Rams. It happened Sunday afternoon. We should have seen it coming for weeks.\r\nThe tradeRamsey to Miami for a mid-third-round p… [+39755 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Android Authority"
      },
      "author": null,
      "title": "Samsung wrapped in controversy over 'fake' Space Zoom moon shots - Android Authority",
      "description": "Samsung is being called out for misleading marketing regarding its 100x Space Zoom feature and the \"fake\" moon shots it produces.",
      "url": "https://www.androidauthority.com/samsung-fake-space-zoom-moon-images-3295501/",
      "urlToImage": "https://www.androidauthority.com/wp-content/uploads/2020/02/Samsung-Galaxy-S20-Ultra-space-zoom-1.jpg",
      "publishedAt": "2023-03-13T06:28:48Z",
      "content": "<ul><li>A Redditor has called out Samsung for misleading advertising and fake moon photos clicked using its 100x Space Zoom feature.</li><li>The user alleges that Samsungs phones add additional textu… [+2695 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "2023 Oscars Recap: 'Everything Everywhere All at Once' Wins Big & Most Memorable Moments | THR News - The Hollywood Reporter",
      "description": "'Everything Everywhere All at Once' wins seven Oscars, including best picture and acting nods for Michelle Yeoh, Ke Huy Quan and Jamie Lee Curtis. Brendan Fr...",
      "url": "https://www.youtube.com/watch?v=bh9vm4E309U",
      "urlToImage": "https://i.ytimg.com/vi/bh9vm4E309U/maxresdefault.jpg",
      "publishedAt": "2023-03-13T06:25:15Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "CBS Sports"
      },
      "author": "Matt Snyder",
      "title": "World Baseball Classic: Mexico crushes Team USA behind two Joey Meneses home runs in pool play - CBS Sports",
      "description": "Mexico controlled Team USA from start to finish in Sunday night's WBC bout",
      "url": "https://www.cbssports.com/mlb/news/world-baseball-classic-mexico-crushes-team-usa-behind-two-joey-meneses-home-runs-in-pool-play/live/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/03/13/5ee1feeb-6749-4a77-9a46-d58c31039561/thumbnail/1200x675/06a63a0ece3af859c1b0c44baa681bf8/joey-meneses-mexico-getty.jpg",
      "publishedAt": "2023-03-13T06:00:53Z",
      "content": "Mexico entered Sunday night's heavily-anticipated game against USA with an 0-1 record in pool play thanks to an upset loss to Colombia. It wasn't necessarily a must-win game for Mexico, but the team … [+4444 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "ScienceAlert"
      },
      "author": "Michelle Starr",
      "title": "Oceans May Have Once Graced Venus Before It Became a Hell Planet - ScienceAlert",
      "description": "Venus may be one of the brightest and most beautiful objects in our night sky, but don't be fooled.",
      "url": "https://www.sciencealert.com/oceans-may-have-once-graced-venus-before-it-became-a-hell-planet",
      "urlToImage": "https://www.sciencealert.com/images/2023/03/VenusWithWaterConcept.jpg",
      "publishedAt": "2023-03-13T05:26:38Z",
      "content": "Venus may be one of the brightest and most beautiful objects in our night sky, but don't be fooled.\r\nOur neighboring planet is deeply inhospitable to life as we know it a toxic, scorching world on wh… [+4358 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "Oscars: Jimmy Kimmel's BEST Monologue Jokes - Entertainment Tonight",
      "description": "Jimmy Kimmel addresses the slap heard around the world at the 95th Academy Awards. In his monologue, the comedian jokes plenty about Will Smith slapping Chri...",
      "url": "https://www.youtube.com/watch?v=ei7cCu8C-Ek",
      "urlToImage": "https://i.ytimg.com/vi/ei7cCu8C-Ek/maxresdefault.jpg",
      "publishedAt": "2023-03-13T05:00:14Z",
      "content": null
    },
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Annabelle Timsit",
      "title": "Prostate cancer study shows some men can avoid, delay aggressive treatments - The Washington Post",
      "description": "In a group of men followed for a median of 15 years, mortality from prostate cancer was similar whether they received radiation, surgery or active monitoring.",
      "url": "https://www.washingtonpost.com/health/2023/03/12/men-prostate-cancer-treatment-study/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/DQKZGOGIFUI6RHAPF75PNVBCVI.jpg&w=1440",
      "publishedAt": "2023-03-13T04:15:00Z",
      "content": "Comment on this story\r\nLONDON More men with prostate cancer could afford to delay their treatment, a decades-long study has found, suggesting that active monitoring by health-care professionals is an… [+5023 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Jihye Lee",
      "title": "Goldman Sachs no longer expects the Fed to hike rates in March, cites stress on banking system - CNBC",
      "description": "Goldman Sachs no longer sees a case for the Federal Reserve to deliver a rate hike at the FOMC's March meeting, economist Jan Hatzius said.",
      "url": "https://www.cnbc.com/2023/03/13/goldman-sachs-no-longer-expects-the-fed-to-hike-rates-in-march.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/106852435-1615457889957-gettyimages-1227655367-_dsc5275.jpeg?v=1678680877&w=1920&h=1080",
      "publishedAt": "2023-03-13T04:14:37Z",
      "content": "Goldman Sachs economists said the package of relief measures announced Sunday stops short of similar moves made during the 2008 financial crisis. The Treasury designated SVB and Signature as systemic… [+777 chars]"
    },
    {
      "source": {
        "id": "cbs-news",
        "name": "CBS News"
      },
      "author": "Caitlin O'Kane",
      "title": "Oscars 2023: Michelle Yeoh makes history with best actress win at Academy Awards - CBS News",
      "description": "\"For all the little girls and boys who look like me watching tonight, this is a beacon of hope and possibility,\" she said during her speech.",
      "url": "https://www.cbsnews.com/news/oscars-2023-michelle-yeoh-best-actress-win-makes-history-academy-awards-everything-everywhere-all-at-once/",
      "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/03/13/32cb829f-e372-4cab-a046-709e3b3c1ea0/thumbnail/1200x630/85f5e4f9e994d6d636dbd96b719cbfe3/gettyimages-1248109812.jpg",
      "publishedAt": "2023-03-13T04:04:00Z",
      "content": "Michelle Yeoh made history at the Oscars on Sunday, becoming the first actress of Southeast Asian descent to win the Academy Award for best actress. Yeoh won for her role as Evelyn Wang in \"Everythin… [+2495 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Deidre McPhillips",
      "title": "Sudden unexpected infant deaths surged among Black babies in 2020 - CNN",
      "description": "Each year, thousands of babies die suddenly and unexpectedly, and more than 3,300 young lives were lost in 2020. Rates remained stubbornly high in the first year of the Covid-19 pandemic, even as overall infant mortality dropped to a record low.",
      "url": "https://www.cnn.com/2023/03/13/health/sids-rate-2020-disparities/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230310104153-infant-baby-feet-bed-stock.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-03-13T04:01:00Z",
      "content": "Each year, thousands of babies die suddenly and unexpectedly, and more than 3,300 young lives were lost in 2020. Rates remained stubbornly high in the first year of the Covid-19 pandemic, even as ove… [+7116 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "PhoneArena"
      },
      "author": null,
      "title": "Tim Cook pushes to get this device shipped against the wishes of Apple engineers - PhoneArena",
      "description": "PhoneArena is the premium website for new phone information such as full specifications, in-depth reviews, latest news, carrier available and upcoming phones. It features advanced phone filter, visual size comparison and 360 degree views of all hot phones.",
      "url": "https://www.phonearena.com/",
      "urlToImage": "https://s-cdn.phonearena.com/images/logo/phonearena-logo-light-blue-on-dark-blue.png",
      "publishedAt": "2023-03-13T03:51:19Z",
      "content": null
    }
  ]
  constructor() {
    super();
    console.log("Hey im constructor from NewsItem Comp")
    this.state = {
      articles: this.articles,
      loading: false


    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>Top Headlines</h2>
                <div className="row">
        {this.state.articles.map((element) => {

         return <div className="col-md-3" key={element.url}>
              <NewsItem   title={element.title} description={element.description} imageURL={element.urlToImage} newsURL= {element.url} />
            </div>
        })}
          </div>
      </div>
    )
  }
}

export default News