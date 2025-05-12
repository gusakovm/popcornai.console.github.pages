return function SimpleStaticPage() {
  const styles = {
    container: {
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif'
    },
    header: {
      color: '#333',
      borderBottom: '1px solid #eee',
      paddingBottom: '10px',
      marginBottom: '20px'
    },
    content: {
      lineHeight: '1.6',
      color: '#444'
    },
    infoBox: {
      backgroundColor: '#f5f5f5',
      border: '1px solid #ddd',
      borderRadius: '4px',
      padding: '15px',
      marginTop: '20px'
    }
  };

  return React.createElement('div', { style: styles.container },
    React.createElement('h1', { style: styles.header }, 'Простая статическая страница'),
    
    React.createElement('div', { style: styles.content },
      React.createElement('p', null, 
        'Это пример простой статической страницы, загруженной динамически из n8n. ' +
        'Страница не делает никаких запросов к API и просто отображает статический контент.'
      ),
      
      React.createElement('p', null,
        'В PopcornAI Console страницы загружаются через GET запрос к n8n API, ' +
        'который возвращает код React-компонента в формате JSON.'
      )
    ),
    
    React.createElement('div', { style: styles.infoBox },
      React.createElement('h3', null, 'Как создать свою страницу'),
      React.createElement('p', null, 
        'Для создания новой страницы нужно:'
      ),
      React.createElement('ol', null,
        React.createElement('li', null, 'Создать endpoint в n8n, отвечающий на запрос GET /api/adm/pages?page_id={pageId}'),
        React.createElement('li', null, 'Endpoint должен возвращать JSON с полем code, содержащим JavaScript код React-компонента'),
        React.createElement('li', null, 'Код должен экспортировать React-компонент по умолчанию'),
        React.createElement('li', null, 'Компонент может использовать n8nFetch для запросов к API')
      )
    )
  );
}