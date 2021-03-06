module.exports = {
  /** Site MetaData (Required all)*/
  title: `MintyU`,                           // (* Required)
  description: `Software Development Blog`,          // (* Required)
  author: `MintyU`,                         // (* Required)
  siteUrl: 'https://mintyu.github.io',                      // (* Required)
    // ex.'https://junhobaik.github.io'
    // ex.'https://junhobaik.github.io/' << X, Do not enter "/" at the end.

  /** Header */
  profileImageFileName: 'profile.png', // include filename extension ex.'profile.jpg'
    // The Profile image file is located at path "./images/"
    // If the file does not exist, it is replaced by a random image.

  /** Home > Bio information*/
  comment: 'KHU Software Convergence 19',
  name: 'Yeonsu Kim',
  company: '',
  location: 'Korea',
  email: 'deathcat@khu.ac.kr',
  website: 'https://MintyU.github.io',           // ex.'https://junhobaik.github.io'
  linkedin: '',                                                          // ex.'https://www.linkedin.com/in/junho-baik-16073a19ab'
  facebook: '',                                                          // ex.'https://www.facebook.com/zuck' or 'https://www.facebook.com/profile.php?id=000000000000000'
  instagram: 'https://www.instagram.com/minty_u_',                                                         // ex.'https://www.instagram.com/junhobaik'
  github: 'https://github.com/MintyU',                                                            // ex.'https://github.com/junhobaik'

  /** Post */
  enablePostOfContents: true,     // TableOfContents activation (Type of Value: Boolean. Not String)
  disqusShortname: 'mintyu',            // comments (Disqus sort-name)
  enableSocialShare: true,        // Social share icon activation (Type of Value: Boolean. Not String)

  /** Optional */
  googleAnalytics: 'UA-147550571-2',     // Google Analytics TrackingID. ex.'UA-123456789-0'
  googleSearchConsole: 'bYFanhcTFeHXnIcw7Yg7enLJAhg85wq_zt5hXen5Tlg', // content value in HTML tag of google search console ownership verification. ex.'w-K42k14_I4ApiQKuVPbCRVV-GxlrqWxYoqO94KMbKo'
  googleAdsenseSlot: '',   // Google Adsense Slot. ex.'5214956675'
  googleAdsenseClient: 'ca-pub-8801141782730144', // Google Adsense Client. ex.'ca-pub-5001380215831339'
    // Please correct the adsense client number(ex.5001380215831339) in the './static/ads.txt' file.
};
