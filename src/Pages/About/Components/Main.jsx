import { makeStyles } from '@material-ui/core/styles'
import Hero from './Hero'
import NextStep from './NextStep'
import RelationshipsThatWork from './RelationshipsThatWork'

const useStyles = makeStyles((theme) => ({
  main: {
    background: '#f0f3f4',
    marginLeft: ({ isDrawerFolded, mqMd }) => {
      if (mqMd) {
        return 0
      } else if (isDrawerFolded) {
        return theme.typography.pxToRem(
          theme.mixins.drawer.unfoldedMdWidth + theme.spacing(1),
        )
      } else {
        return theme.typography.pxToRem(
          theme.mixins.drawer.foldedMdWidth + theme.spacing(1),
        )
      }
    },
  },
}))

const Main = ({ isDrawerFolded, mqMd }) => {
  const classes = useStyles({ isDrawerFolded, mqMd })

  return (
    <main className={classes.main}>
      <Hero />
      <RelationshipsThatWork />
      <NextStep />
    </main>
  )
}

export default Main
