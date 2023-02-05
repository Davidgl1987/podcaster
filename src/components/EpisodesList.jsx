import { Card, Table } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import { dateToDDMMYYYY, msToHMS } from "../utils"

const EpisodesList = ({ episodes }) => {

  const { podcastId } = useParams()

  return (
    <Card className="p-4 mb-3">
      <Table striped hover size="sm">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {episodes.map(episode => 
            <tr key={episode.id}>
              <td><Link to={`/podcast/${podcastId}/episode/${episode.id}`}>{episode.name}</Link></td>
              <td className="text-end">{dateToDDMMYYYY(episode.date)}</td>
              <td className="text-end">{msToHMS(episode.duration)}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Card>
  )

}

export default EpisodesList