import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Column } from 'simple-flexbox';
import './PagesContent.css';

import ContentHeader from '../ContentHeader';

const EventContent = () => {
    const { title } = useParams();
    
    return (
        <Column className="_500_container">
            <ContentHeader title={title} />
                <div className="_500_text">
                    <h4>
                        <p>Molestias vel laborum fermentum, maxime habitasse recusandae distinctio impedit felis temporibus consequat repudiandae tellus, pharetra? Amet omnis inventore vitae saepe lorem nostra senectus laborum, animi, eros cumque ullamcorper, felis voluptatibus expedita molestie, blanditiis earum sed penatibus hic magni veritatis ut egestas aliquip! Justo congue occaecati, modi praesentium cum ante fuga expedita quam leo volutpat torquent? Perferendis! Assumenda, dictum ut itaque, do ipsam dignissimos quaerat, arcu aut commodo orci perspiciatis tristique, optio nullam? Dui praesentium ullam, euismod occaecat dignissim, pulvinar maecenas ullamcorper aliquid ipsa tristique dolores vel nullam aspernatur. Condimentum per. Voluptatibus suscipit maiores tristique porttitor suscipit molestie, fuga wisi error.</p>

                        <p>Cum aliquid? Possimus, ratione primis aptent aspernatur atque taciti autem montes excepteur, nisl id, bibendum duis at nascetur excepteur reprehenderit. Porro asperiores explicabo vitae! Commodi nam fames. Curabitur, natus ipsam! Anim facilisis rutrum veritatis voluptate, libero? Sapien perspiciatis quo sapiente et placerat? Exercitation consectetur illum venenatis! Doloribus scelerisque delectus nostrum. Ducimus lacus ut, quas nascetur possimus, aptent quisquam tempor voluptates nostra corporis litora? Fermentum netus qui? Sollicitudin, et donec esse vel voluptate! Sed libero, velit tristique. Hic necessitatibus, parturient tristique accumsan pretium? Elit impedit. Erat facere velit? Urna similique illo potenti, vel ac ridiculus dolorem purus nibh aliquid sollicitudin excepturi.</p>
                    
                        <p>Cum aliquid? Possimus, ratione primis aptent aspernatur atque taciti autem montes excepteur, nisl id, bibendum duis at nascetur excepteur reprehenderit. Porro asperiores explicabo vitae! Commodi nam fames. Curabitur, natus ipsam! Anim facilisis rutrum veritatis voluptate, libero? Sapien perspiciatis quo sapiente et placerat? Exercitation consectetur illum venenatis! Doloribus scelerisque delectus nostrum. Ducimus lacus ut, quas nascetur possimus, aptent quisquam tempor voluptates nostra corporis litora? Fermentum netus qui? Sollicitudin, et donec esse vel voluptate! Sed libero, velit tristique. Hic necessitatibus, parturient tristique accumsan pretium? Elit impedit. Erat facere velit? Urna similique illo potenti, vel ac ridiculus dolorem purus nibh aliquid sollicitudin excepturi.</p>
                    </h4>
                </div>
        </Column>
    )
}

EventContent.defaultProps = {
    title: 'false'
}

EventContent.propTypes = {
    title: PropTypes.string
}

export default EventContent;
