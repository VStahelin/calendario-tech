---
name: Sugestão de Evento
about: Sugestão de Evento
title: ''
labels: Sugestao de evento
assignees: ''

---

```yml
organization_name: 'Nome da Organização' # Nome da organização que está promovendo o evento
event_name: 'Nome do Evento' # Nome do evento, ex.: "WordCamp São Paulo"
start_datetime: '2025-04-10T10:00:00' # Formato ISO 8601:AAAA-MM-DDTHH:MM:SS
end_datetime: '2025-04-10T18:00:00' # Formato ISO 8601:AAAA-MM-DDTHH:MM:SS
address: '123 Main Street, City, Country' # Endereço do evento
maps_link: 'https://maps.google.com/?q=event+location' # Link para o Google Maps, se disponível
online: true # true para eventos online, false para presenciais
event_link: 'https://example.com/event'
tags:
  - 'python'
  - 'django'
  - 'flask'
  - 'fastapi'
  - 'devops'
  - 'docker'
  - 'kubernetes'
intl:
  pt-br:
    event_edition: 'Edição do Evento' # Edição do evento, ex.: "2024" ou "Kubernetes para Iniciantes"
    cost: 'Grátis' # Especifique 'Grátis' ou um valor numérico com a moeda, por exemplo, 'R$20'
    banner_link: 'https://example.com/banner.png' # Link para o banner do evento
    short_description: 'Uma breve descrição do evento vai aqui.' # Descrição curta do evento
  en-us:
    event_edition: 'Event Edition'
    cost: 'Free'
    banner_link: 'ttps://example.com/banner.png'
    short_description: 'A brief description of the event goes here.'
```
