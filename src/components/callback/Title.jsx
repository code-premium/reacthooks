import React from 'react';

function Title() {
    console.log('Renderizando title')
    return <div>Aumento de Salário por Idade</div>;
}

export default React.memo(Title);
