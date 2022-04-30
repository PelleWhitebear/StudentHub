
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Pelle from "../../assets/PFPs/Pelle.png";
import Diamond from "../../assets/PFPs/Diamond.jpg";
import Seb from "../../assets/PFPs/seb.png";
import Steven from "../../assets/PFPs/steven.png";
import Mia from "../../assets/PFPs/Mia.png";
import "./Styles/TheTeamPage.css";

const TheTeamPage = () => {
    return (
      <>
      <div className="minHeight">
      <div className='TeamContent'>
        <div className="content DEh3">
          <h1>The team</h1>
          <h3>of StudentHub.</h3>
        </div>
        <div className="TheTeamContent">
          <div className='Box'>
            <Card sx={{ display: 'flex' }}>
              <CardMedia
                  component="img"
                  sx={{ width: 120 }}
                  src={Pelle}
                />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h6" className='h6width'>
                    Pelle Hvidbjørn Hartvig Andersen - s205339
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    Study programme: BEng - IT and Economics
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                  Enrolled: Fall 2020 (4th semester)
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </div>
          <div className='Box'>
          <Card sx={{ display: 'flex' }}>
              <CardMedia
                  component="img"
                  sx={{ width: 120 }}
                  src={Diamond}
                />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '10 10 auto' }}>
                  <Typography component="div" variant="h6" className='h6width'>
                    Daniel Diamant - s205336
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    Study programme: BEng - IT and Economics
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                  Enrolled: Fall 2020 (4th semester)
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </div>
          <div className='Box'>
          <Card sx={{ display: 'flex' }}>
              <CardMedia
                  component="img"
                  sx={{ width: 120 }}
                  src={Mia}
                />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '10 10 auto' }}>
                  <Typography component="div" variant="h6" className='h6width'>
                    Mia Dong - s205353
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    Study programme: BEng - IT and Economics
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                  Enrolled: Fall 2020 (4th semester)
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </div>
          <div className='Box'> 
          <Card sx={{ display: 'flex' }}>
              <CardMedia
                  component="img"
                  sx={{ width: 120 }}
                  src={Seb}
                />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '10 10 auto' }}>
                  <Typography component="div" variant="h6" className='h6width'>
                    Sebastian Sinding - s205345
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    Study programme: BEng - IT and Economics
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                  Enrolled: Fall 2020 (4th semester)
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </div>
          <div>
          <Card sx={{ display: 'flex' }}>
              <CardMedia
                  component="img"
                  sx={{ width: 120 }}
                  src={Steven}
                />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '10 10 auto' }}>
                  <Typography component="div" variant="h6" className='h6width'>
                    Steven Gordon Pedersen - s205456
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    Study programme: BEng - Software Technology
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                  Enrolled: Fall 2020 (4th semester)
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </div>
        </div>
      </div>
      </div>
      </>
    )
  };
  
  export default TheTeamPage;