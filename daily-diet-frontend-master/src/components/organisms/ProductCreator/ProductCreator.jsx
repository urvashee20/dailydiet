import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  Button as CustomButton,
  Select,
  InnerContainer,
  Input,
  StyledSpan,
  Container,
  Label,
  Span,
} from "./ProductCreatorStyles";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, updateProduct } from "../../../store/products";
import { modalOpened } from "../../../store/helpers";
import Button from "../../atoms/Button/Button";
import { ControlPanel } from "../../molecules/ControlPanel/ControlPanel";
import {
  itemEditModeSet,
  currentItemRemoved,
  editedProductsAdded,
  productsRemoved,
  itemCreateModeRemoved,
} from "../../../store/helpers";
import Item from "../../molecules/Item/Item";

const ProductCreator = ({ editMode }) => {
  const dispatch = useDispatch();

  const { itemEditMode, currentItem, currentItemBackup } = useSelector(
    (state) => state.user.helpers
  );

  const { _id, nutrients, category, title } = useSelector((state) =>
    state.user.helpers.currentItem?._id
      ? state.user.helpers.currentItem
      : {
          _id: null,
          nutrients: null,
          category: null,
        }
  );

  const {
    register: registerProduct,
    handleSubmit: handleSubmitProduct,
    reset: resetSignIn,
  } = useForm({
    defaultValues: {
      title: "",
      kcal: "",
      carbs: "",
      fat: "",
      protein: "",
      category: "",
      amount: "",
    },
  });

  const submitProduct = async ({
    title,
    kcal,
    carbs,
    fat,
    protein,
    category,
  }) => {
    dispatch(
      createProduct({
        title,
        nutrients: {
          kcal: kcal / 100,
          protein: protein / 100,
          carbs: carbs / 100,
          fat: fat / 100,
        },
        category,
        amount: 1,
      })
    );
    dispatch(productsRemoved());
    dispatch(currentItemRemoved());
    resetSignIn();
  };

  const submitProductUpdate = async ({
    title,
    kcal,
    carbs,
    fat,
    protein,
    category,
  }) => {
    dispatch(
      updateProduct({
        id: currentItemBackup._id,
        product: {
          title,
          nutrients: {
            kcal: kcal / 100,
            protein: protein / 100,
            carbs: carbs / 100,
            fat: fat / 100,
          },
          category,
          amount: 1,
        },
      })
    );
    dispatch(productsRemoved());
    dispatch(currentItemRemoved());
    dispatch(itemCreateModeRemoved());
    resetSignIn();
  };

  return (
    <Container>
      <Item
        primary={"Product"}
        secondary={editMode ? "editor" : "creator"}
        margin={"1rem 0.5rem"}
      />
      {editMode && !itemEditMode ? (
        <InnerContainer>
          <Span bold>{title}</Span>
          <Span>Category: {category}</Span>
          <br />
          <Span>Nutrients:</Span>
          {Object.entries(nutrients).map(([key, value], index) => (
            <Span key={index}>
              {key}: {parseFloat((value * 100).toFixed(2))}
            </Span>
          ))}
          <ControlPanel border fit padding={"1rem 0 0 0"}>
            {editMode && (
              <>
                <Button
                  margin={"0 0.5rem 0.5rem 0"}
                  onClick={() => {
                    dispatch(itemEditModeSet());
                    dispatch(editedProductsAdded({ products: [currentItem] }));
                  }}
                  edit
                >
                  Edit
                </Button>
                <Button
                  margin={"0 0.5rem 0.5rem 0"}
                  onClick={() => {
                    dispatch(
                      modalOpened({
                        message: "Delete product?",
                        onClickAction: "deleteProduct",
                        onClickActionArg: _id,
                      })
                    );
                    dispatch(currentItemRemoved());
                  }}
                  remove
                >
                  Delete
                </Button>
              </>
            )}
          </ControlPanel>
          <Button
            color={"black"}
            margin={"1.5rem 0 0 0"}
            align={"center"}
            onClick={() => {
              dispatch(currentItemRemoved());
              dispatch(productsRemoved());
            }}
          >
            Close
          </Button>
        </InnerContainer>
      ) : (
        <InnerContainer>
          <Form
            onSubmit={handleSubmitProduct(
              itemEditMode ? submitProductUpdate : submitProduct
            )}
          >
            <StyledSpan>Amount: 100g</StyledSpan>
            <Input
              text
              type="text"
              placeholder={itemEditMode ? currentItemBackup.title : "Title"}
              {...registerProduct("title", {
                required: true,
                maxLength: 25,
              })}
            />
            <Input
              text
              type="number"
              step="0.01"
              placeholder={
                itemEditMode
                  ? "kcal: " +
                    parseFloat(
                      (currentItemBackup.nutrients.kcal * 100).toFixed(2)
                    )
                  : "Kcal"
              }
              {...registerProduct("kcal", {
                min: 0,
                max: 5000,
                required: true,
              })}
            />
            <Input
              text
              type="number"
              step="0.01"
              placeholder={
                itemEditMode
                  ? "protein: " +
                    parseFloat(
                      (currentItemBackup.nutrients.protein * 100).toFixed(2)
                    )
                  : "Protein"
              }
              {...registerProduct("protein", {
                min: 0,
                max: 5000,
                required: true,
              })}
            />
            <Input
              text
              type="number"
              step="0.01"
              placeholder={
                itemEditMode
                  ? "carbs: " +
                    parseFloat(
                      (currentItemBackup.nutrients.carbs * 100).toFixed(2)
                    )
                  : "Carbs"
              }
              {...registerProduct("carbs", {
                min: 0,
                max: 5000,
                required: true,
              })}
            />
            <Input
              text
              type="number"
              step="0.01"
              placeholder={
                itemEditMode
                  ? "fat: " +
                    parseFloat(
                      (currentItemBackup.nutrients.fat * 100).toFixed(2)
                    )
                  : "Fat"
              }
              {...registerProduct("fat", {
                min: 0,
                max: 5000,
                required: true,
              })}
            />
            <Label>Category</Label>
            <Select
              text
              {...registerProduct("category", {
                required: true,
              })}
            >
              <option value={"meat"}>Meat</option>
              <option value={"grain"}>Grain</option>
              <option value={"dairy"}>Dairy</option>
              <option value={"fruit"}>Fruit</option>
              <option value={"vegetable"}>Vegetable</option>
              <option value={"drink"}>Drink</option>
              <option value={"other"}>Other</option>
            </Select>
            <CustomButton type="submit" text>
              {itemEditMode ? "Update" : "Create"}
            </CustomButton>
          </Form>
          <Button
            text
            color={"black"}
            margin={"1.5rem 0 0 0"}
            align={"center"}
            onClick={() => {
              dispatch(currentItemRemoved());
              dispatch(productsRemoved());
              dispatch(itemCreateModeRemoved());
            }}
          >
            Close
          </Button>
        </InnerContainer>
      )}
    </Container>
  );
};

export default ProductCreator;
