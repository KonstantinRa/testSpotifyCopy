export interface TracksResponse {
  tracks:
    | {
        items: [Item];
      }
    | undefined;
}

export interface Item {
  name: string;
  preview_url: string;
  external_urls: {
    spotify: string;
  };
  album: {
    external_urls:
      | {
          spotify: string;
        }
      | undefined;
    name: string;
    images: [
      {
        url: string;
      }
    ];
  };
  artists: [
    {
      external_urls:
        | {
            spotify: string;
          }
        | undefined;
      name: string;
    }
  ];
  duration_ms: number;
}
