/**
 * GraphQL Query for Research Stream with Lab Logs
 * 
 * Use this query to fetch a specific research stream and all its associated lab logs
 */

export const RESEARCH_STREAM_WITH_LOGS_QUERY = `
  query ResearchStreamWithLogs($relativePath: String!) {
    research_streams(relativePath: $relativePath) {
      id
      title
      slug
      date
      author
      supervisor
      status
      abstract
      tags
      keywords
      cover_image
      body
      _sys {
        filename
        path
        breadcrumbs
      }
    }
  }
`;

/**
 * Example Usage in Next.js Page Component
 * File: pages/research/[slug].tsx
 */

/*
import client from '../../../tina/__generated__/client';

export default function ResearchStreamPage({ data }) {
  const stream = data.research_streams;
  const logs = data.lab_logsConnection.edges;

  return (
    <div>
      <h1>{stream.title}</h1>
      <p className="status">{stream.status}</p>
      <p className="abstract">{stream.abstract}</p>
      
      <div className="main-content">
        <TinaMarkdown content={stream.body} />
      </div>

      <section className="lab-logs">
        <h2>Lab Logs ({logs.length})</h2>
        {logs.map(({ node: log }) => (
          <article key={log.id} className={`log-${log.log_type}`}>
            <h3>{log.title}</h3>
            <time>{log.date}</time>
            <span className="log-type">{log.log_type}</span>
            <p>{log.summary}</p>
            <TinaMarkdown content={log.body} />
          </article>
        ))}
      </section>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const relativePath = `${params.slug}.mdx`;
  
  const { data, query, variables } = await client.queries.ResearchStreamWithLogs({
    relativePath,
  });

  return {
    props: {
      data,
      query,
      variables,
    },
  };
}

export async function getStaticPaths() {
  const { data } = await client.queries.research_streamsConnection();
  const paths = data.research_streamsConnection.edges.map((edge) => ({
    params: { slug: edge.node._sys.filename },
  }));

  return {
    paths,
    fallback: false,
  };
}
*/

/**
 * Alternative: Fetch all streams with their log counts
 */

export const ALL_RESEARCH_STREAMS_QUERY = `
  query AllResearchStreams {
    research_streamsConnection(sort: "date") {
      totalCount
      edges {
        node {
          id
          title
          slug
          date
          status
          abstract
          tags
          cover_image
          _sys {
            filename
          }
        }
      }
    }
  }
`;

/**
 * Get logs for a specific stream
 */

export const LOGS_FOR_STREAM_QUERY = `
  query LogsForStream($parentStream: String!) {
    lab_logsConnection(
      filter: { parent_stream: { eq: $parentStream } }
      sort: "date"
    ) {
      totalCount
      edges {
        node {
          id
          title
          date
          log_type
          tags
          summary
          _sys {
            filename
          }
        }
      }
    }
  }
`;

/**
 * Get a single lab log
 */

export const SINGLE_LAB_LOG_QUERY = `
  query SingleLabLog($relativePath: String!) {
    lab_logs(relativePath: $relativePath) {
      id
      title
      date
      log_type
      parent_stream
      tags
      summary
      body
      _sys {
        filename
        path
      }
    }
  }
`;
