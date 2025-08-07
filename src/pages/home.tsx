import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

function Home() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Create a repo</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector sx={{ minHeight: '90px' }}/>
        </TimelineSeparator>
        <TimelineContent>Publish a repo</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector  sx={{ minHeight: '50px' }} />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>
            Add a <span style={{ color: '#92e681ff' }}>dockerfile</span>
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector  sx={{ minHeight: '50px' }} />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>
            Add a <span style={{ color: '#92e681ff' }}>docker-compose</span> file
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector  sx={{ minHeight: '120px' }} />
        </TimelineSeparator>
        <TimelineContent>
          🎉 Local Development Setup Completed 🎉
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector  sx={{ minHeight: '50px' }} />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>
            Add a <span style={{ color: '#81cbe6ff' }}>CICD pipeline</span> file
          </Typography>
          
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>🎉 Docker + CICD achieved 🎉 </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default Home;