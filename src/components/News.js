import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>Top Headlines</h2> 
        <div className= "row">
          <div className="col-md-3">
                <NewsItem title="mytitle" description ="mydesc" imageURL="https://cdn.discordapp.com/attachments/669107164098330654/1084848066202456185/SEO.png" newsURL="ASD"/>
          </div>
          <div className="col-md-3">
                <NewsItem title="mytitle" description ="mydesc" imageURL="https://cdn.discordapp.com/attachments/669107164098330654/1084848066202456185/SEO.png" newsURL="ASD"/>
          </div>
          <div className="col-md-3">
                <NewsItem title="mytitle" description ="mydesc" imageURL="https://cdn.discordapp.com/attachments/669107164098330654/1084848066202456185/SEO.png" newsURL="ASD"/>
          </div>
                
        </div>

        </div>
    )
  }
}

export default News