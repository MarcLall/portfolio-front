import { useEffect, useState } from 'react'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  }
})

const Article = () => {
  const classes = useStyles()
  const [blog, setBlog] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/blog')
      .then(res => res.data)
      .then(data => setBlog(data))
      .catch(e => {
        console.log(`Erreur lors de la reception des comptes : ${e.message}`)
      })
  }, [])

  return (
    <div className="containerArticle">
      {blog.map(d => (
        <Card className={classes.root} key={d.idBlog}>
          <CardActionArea>
            <CardMedia
              component='img'
              alt='Contemplative Reptile'
              height='140'
              image={d.photo}
              title='Contemplative Reptile'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {d.titre}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                {d.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='small' color='primary'>
              Share
            </Button>
            <Button size='small' color='primary'>
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  )
}

export default Article
