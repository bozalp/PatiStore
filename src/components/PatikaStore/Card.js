/**
 * Batuhan OZALP
 */

import React from 'react';
import {
    Image,
    Text,
    View,
    TextInput,
} from 'react-native';
import styles from "./Card.style"

const InStock = ({ product }) => {
    if (product == false)
        return (
            <Text style={styles.in_stock_false}>
                STOKTA YOK
            </Text >
        );
};

const Card = ({ products }) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.image_card}>
                    <Image style={styles.product_image} source={{
                        uri: products.imgURL
                    }} />
                </View>
                <View style={styles.title_body}>
                    <Text style={styles.title}>{products.title}</Text>
                    <Text style={styles.price}>{products.price}</Text>
                    <InStock product={products.inStock} />

                </View>
            </View>

        </View>
    );
};

export default Card;