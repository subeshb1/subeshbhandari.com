type JsonLdData = {
  '@context': string;
  '@type': string;
  [key: string]: unknown;
};

export default function JsonLd({ data }: { data: JsonLdData }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
} 
